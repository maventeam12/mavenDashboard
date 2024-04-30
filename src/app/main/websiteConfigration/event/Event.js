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
import { getEvent, newEvent, resetEvent, selectEventDB } from '../store/eventSlice';
import reducer from '../store';
import EventHeader from './EventHeader';
import BasicInfoTab from './BasicInfoTab';
import EventImagesTab from './EventImagesTab';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a event title')
    .min(2, 'The event title must be at least 2 characters'),
    description: yup
    .string()
    .when("description", (val, schema) => {
      if(val?.length > 0) {  //if address exist then apply min max else not
         return yup.string().min(10, 'The event description must be at least 10 characters').required("Required");
      } else { 
         return yup.string().notRequired();
      }
 }),
},[
  ["description", "description"], 

 ]);

function Event(props) {
  const dispatch = useDispatch();
  const event = useSelector(selectEventDB);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const user = useSelector(selectUser);
  const routeParams = useParams();
  const { eventId } = routeParams;
  const [tabValue, setTabValue] = useState(0);
  const [noEvent, setNoEvent] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description:'',
      coverImageFile:''
  
    },
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();
  useDeepCompareEffect(() => {
    function updateEventState() {
      if (eventId === 'new') {
        /**
         * Create New event data
         */
        dispatch(newEvent());
      } else {
        /**
         * Get event data
         */
        dispatch(
          getEvent({
            access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            eventId,
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
      dispatch(resetEvent());
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
          There is no such event!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/websiteConfiguration/events"
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
