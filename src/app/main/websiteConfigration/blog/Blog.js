import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { selectUser } from 'app/store/userSlice';
import { getBlog, newBlog, resetBlog, selectBlogDB } from '../store/blogSlice';
import reducer from '../store';
import BlogHeader from './BlogHeader';
import BasicInfoTab from './BasicInfoTab';
import BlogImagesTab from './BlogImagesTab';

/**
 * Form Validation Schema
 */
const MAX_FILE_SIZE = 51200000; //48 MB

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };
function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

const schema = yup.object().shape({
  title: yup
    .string()
    .required('You must enter a blog title')
    .min(3, 'The blog title must be at least 3 characters'),
    description: yup
    .string()
    .required('You must enter a blog description')
    .min(10, 'The blog description must be at least 10 characters'),
    content: yup
    .string()
    .required('You must enter a blog content')
    .min(20, 'The blog content must be at least 20 characters'),
});

function Blog(props) {
  const dispatch = useDispatch();
  const blog = useSelector(selectBlogDB);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const user = useSelector(selectUser);
  const routeParams = useParams();
  const { blogId } = routeParams;
  const [tabValue, setTabValue] = useState(0);
  const [noBlog, setNoBlog] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      content: '',
      description:'',
      title:'',
      imageFile:''
  
    },
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();
  useDeepCompareEffect(() => {
    function updateBlogState() {
      if (blogId === 'new') {
        /**
         * Create New blog data
         */
        dispatch(newBlog());
      } else {
        /**
         * Get blog data
         */
        dispatch(
          getBlog({
            access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            blogId,
          })
        ).then((action) => {
          /**
           * If the requested blog is not exist show message
           */
          if (!action.payload) {
            setNoBlog(true);
          }
        });
      }
    }

    updateBlogState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!blog) {
      return;
    }
    /**
     * Reset the form on blog state changes
     */
    reset(blog);
  }, [blog, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset blog on component unload
       */
      dispatch(resetBlog());
      setNoBlog(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested blogs is not exists
   */
  if (noBlog) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such blog!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/websiteConfiguration/blogs"
          color="inherit"
        >
          Go to blogs Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while blog data is loading and form is setted
   */
  if (
    _.isEmpty(form) 
   
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<BlogHeader />}
        content={
          <>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              classes={{ root: 'w-full h-64 border-b-1' }}
            >
              <Tab className="h-64" label="Basic Info" />
              <Tab className="h-64" label="photo" />
            </Tabs>
            <div className="">
              <div className={tabValue !== 0 ? 'hidden' : 'p-16 sm:p-24 max-w-5xl'}>
                <BasicInfoTab />
              </div>
              <div className={tabValue !== 1 ? 'hidden' : 'p-16 sm:p-24 max-w-5xl'}>
                <BlogImagesTab />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('websiteConfiguration', reducer)(Blog);
