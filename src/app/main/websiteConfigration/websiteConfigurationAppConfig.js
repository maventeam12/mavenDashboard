import { lazy } from 'react';


const Blogs = lazy(() => import('./blogs/Blogs'));
const Blog = lazy(() => import('./blog/Blog'));
const Services = lazy(() => import('./services/Services'));
const Service = lazy(() => import('./service/Service'));
const Events = lazy(() => import('./events/Events'));
const Event = lazy(() => import('./event/Event'));
const EventPhotographies = lazy(() => import('./eventPhotogrsphies/Events'));
const EventPhotography = lazy(() => import('./eventPhotography/Event'));
const Appointments = lazy(() => import('./appointments/Appointments'));
const Appointment = lazy(() => import('./appointment/Appointment'));
const Careers = lazy(() => import('./careers/Careers'));
const Career = lazy(() => import('./career/Career'));
const UserCareers = lazy(() => import('./userCareers/UserCareers'));
const UserCareer = lazy(() => import('./userCareer/UserCareer'));
const WebsiteConfigurationAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'websiteConfiguration/blogs',
      element: <Blogs />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/blogs/:blogId/*',
      element: <Blog />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/services',
      element: <Services />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/services/:serviceId/*',
      element: <Service />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/events',
      element: <Events />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/events/:eventId/*',
      element: <Event />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/eventPhotography',
      element: <EventPhotographies />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/eventPhotography/:eventPhotographyId',
      element: <EventPhotography />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/appointments',
      element: <Appointments />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/appointments/:appointmentId',
      element: <Appointment />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'websiteConfiguration/careers',
      element: <Careers />,
      auth: ['admin'],
    },
    {
      path: 'websiteConfiguration/careers/:careerId/*',
      element: <Career />,
      auth: ['admin'],
    },
    {
      path: 'websiteConfiguration/careersSolicitudes',
      element: <UserCareers />,
      auth: ['admin'],
    },
    {
      path: 'websiteConfiguration/careersSolicitudes/:userCareerId',
      element: <UserCareer />,
      auth: ['admin'],
    },
  ],
};

export default WebsiteConfigurationAppConfig;
