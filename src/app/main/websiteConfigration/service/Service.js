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
import { getService, newService, resetService, selectServiceDB } from '../store/serviceSlice';
import reducer from '../store';
import ServiceHeader from './ServiceHeader';
import BasicInfoTab from './BasicInfoTab';

/**
 * Form Validation Schema
 */

const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter the service title')
    .min(1, 'The service title must be at least 1 characters'),

 
});

function Service(props) {
  const dispatch = useDispatch();
  const service = useSelector(selectServiceDB);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const user = useSelector(selectUser);
  const routeParams = useParams();
  const { serviceId } = routeParams;
  const [tabValue, setTabValue] = useState(0);
  const [noService, setNoService] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
  
    },
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();
  useDeepCompareEffect(() => {
    function updateServiceState() {
      if (serviceId === 'new') {
        /**
         * Create New service data
         */
        dispatch(newService());
      } else {
        /**
         * Get service data
         */
        dispatch(
          getService({
            access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            serviceId,
          })
        ).then((action) => {
          /**
           * If the requested service is not exist show message
           */
          if (!action.payload) {
            setNoService(true);
          }
        });
      }
    }

    updateServiceState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!service) {
      return;
    }
    /**
     * Reset the form on service state changes
     */
    reset(service);
  }, [service, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset service on component unload
       */
      dispatch(resetService());
      setNoService(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested services is not exists
   */
  if (noService) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such service!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/websiteConfiguration/services"
          color="inherit"
        >
          Go to services Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while service data is loading and form is setted
   */
  if (
    _.isEmpty(form) 
   
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<ServiceHeader />}
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
            </Tabs>
            <div className="">
              <div className={tabValue !== 0 ? 'hidden' : 'p-16 sm:p-24 max-w-2xl'}>
                <BasicInfoTab />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('websiteConfiguration', reducer)(Service);
