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
import { getEventPhotography, newEventPhotography, resetEventPhotography, selectEventPhotographyDB } from '../store/eventPhotographySlice';
import reducer from '../store';
import EventHeader from './EventHeader';
import BasicInfoTab from './BasicInfoTab';
import EventImagesTab from './EventImagesTab';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  eventId: yup
    .number()
    .typeError("Must be a number")
    .integer('enter a valid number')
    .positive('enter a positive number')
    .required('enter a number')
    .min(1, 'The event ID must be bigger than 0'),
});

function Event(props) {
  const dispatch = useDispatch();
  const event = useSelector(selectEventPhotographyDB);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const user = useSelector(selectUser);
  const routeParams = useParams();
  const { eventPhotographyId } = routeParams;
  const [tabValue, setTabValue] = useState(0);
  const [noEvent, setNoEvent] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      eventId: '',
      imageFile:''
  
    },
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();
  useDeepCompareEffect(() => {
    function updateEventState() {
      if (eventPhotographyId === 'new') {
        /**
         * Create New event data
         */
        dispatch(newEventPhotography());
      } else {
        /**
         * Get event data
         */
        dispatch(
          getEventPhotography({
            access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            eventPhotographyId,
          })
        ).then((action) => {
          /**
           * If the requested event is not exist show message
           */
          if (!action.payload) {
            setNoEvent(true);
          }
        });
      }
    }

    updateEventState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!event) {
      return;
    }
    /**
     * Reset the form on event state changes
     */
    reset(event);
  }, [event, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset event on component unload
       */
      dispatch(resetEventPhotography());
      setNoEvent(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested events is not exists
   */
  if (noEvent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such photography!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/websiteConfiguration/eventPhotography"
          color="inherit"
        >
          Go to events Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while event data is loading and form is setted
   */
  if (
    _.isEmpty(form) 
   
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<EventHeader />}
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
              <Tab className="h-64" label="Cover Image" />
            </Tabs>
            <div className="">
              <div className={tabValue !== 0 ? 'hidden' : 'p-16 sm:p-24 max-w-5xl'}>
                <BasicInfoTab />
              </div>
              <div className={tabValue !== 1 ? 'hidden' : 'p-16 sm:p-24 max-w-5xl'}>
                <EventImagesTab />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('websiteConfiguration', reducer)(Event);
