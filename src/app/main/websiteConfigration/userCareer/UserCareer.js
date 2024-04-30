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
import { getUserCareer, newUserCareer, resetUserCareer, selectUserCareerDB } from '../store/userCareerSlice';
import reducer from '../store';
import BlogHeader from './BlogHeader';
import BasicInfoTab from './BasicInfoTab';
import BlogImagesTab from './BlogImagesTab';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a solicitud name')
    .min(3, 'The solicitud name must be at least 3 characters'),
    email: yup
      .string()
      .required("You must enter the email ")
      .email("must be email format"),
    career: yup
    .string()
    .required('You must enter and career')
    .min(3, 'The career must be at least 3 characters'),
    message: yup.string().when("message", (val, schema) => {
      if (val?.length > 0) {
        //if address exist then apply min max else not
        yup
          .string()
          .required("message is required")
          .min(3, "must be more than 3 characters")

      } else {
        return yup.string().notRequired();
      }
    }),
    isChecked: yup.boolean().required(""),
},[
  ["message", "message"]
]);

function Blog(props) {
  const dispatch = useDispatch();
  const blog = useSelector(selectUserCareerDB);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const user = useSelector(selectUser);
  const routeParams = useParams();
  const { userCareerId } = routeParams;
  const [tabValue, setTabValue] = useState(0);
  const [noBlog, setNoBlog] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email:'',
      message:'',
      cvFile:'',
      career:'',
      isChecked:false,
  
    },
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();
  useDeepCompareEffect(() => {
    function updateBlogState() {
      if (userCareerId === 'new') {
        /**
         * Create New blog data
         */
        dispatch(newUserCareer());
      } else {
        /**
         * Get blog data
         */
        dispatch(
          getUserCareer({
            access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            userCareerId,
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
      dispatch(resetUserCareer());
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
          There is no such Solicitud!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/websiteConfiguration/careersSolicitudes"
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
              <Tab className="h-64" label="CV" />
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
