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
import { getCareer, newCareer, resetCareer, selectCareerDB } from '../store/careerSlice';
import reducer from '../store';
import ProductHeader from './ProductHeader';
import InventoryTab from './tabs/InventoryTab';
/**
 * Form Validation Schema
 */
const schema = yup.object().shape(
  {
    position: yup
      .string()
      .required('You must enter the position')
      .min(3, 'The position name must be at least 3 characters'),
      description: yup
      .string()
      .required('You must enter the description')
      .min(3, 'The description name must be at least 3 characters'),
  }
);

function Customer(props) {
  const dispatch = useDispatch();
  const customer = useSelector(selectCareerDB);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const user = useSelector(selectUser);
  const routeParams = useParams();
  const { careerId } = routeParams;
  const [tabValue, setTabValue] = useState(0);
  const [noCustomer, setNoCustomer] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateCustomerState() {
      if (careerId === 'new') {
        /**
         * Create New customer data
         */
        dispatch(newCareer());
      } else {
        /**
         * Get customer data
         */
        dispatch(
          getCareer({
            access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            careerId,
          })
        ).then((action) => {
          /**
           * If the requested customer is not exist show message
           */
          if (!action.payload) {
            setNoCustomer(true);
          }
        });
      }
    }

    updateCustomerState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!customer) {
      return;
    }
    /**
     * Reset the form on customer state changes
     */
    reset(customer);
  }, [customer, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset customer on component unload
       */
      dispatch(resetCareer());
      setNoCustomer(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested customers is not exists
   */
  if (noCustomer) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such career!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/websiteConfiguration/careers"
          color="inherit"
        >
          Go to careers Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while customer data is loading and form is setted
   */
  if (
    _.isEmpty(form) 
   
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<ProductHeader />}
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
              <Tab className="h-64" label="Basic info" />
            </Tabs>
 

            <div className={tabValue !== 0 ? 'hidden' : ''}>
              <InventoryTab />
            </div>

          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('websiteConfiguration', reducer)(Customer);
