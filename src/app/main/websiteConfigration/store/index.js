import { combineReducers } from '@reduxjs/toolkit';
import blogs from './blogsSlice';
import blog from './blogSlice';
import service from './serviceSlice'
import services from './servicesSlice'
import event from './eventSlice'
import events from './eventsSlice'
import eventPhotography from './eventPhotographySlice'
import eventPhotographies from './eventPhotographiesSlice'
import appointment from './appointmentSlice'
import appointments from './appointmentsSlice'
import careers from './careersSlice'
import career from './careerSlice'
import userCareers from './userCareersSlice';
import userCareer from './userCareerSlice';
const reducer = combineReducers({
  blogs,
  blog,
  service,
  services,
  event,
  events,
  eventPhotography,
  eventPhotographies,
  appointments,
  appointment,
  careers,
  career,
  userCareers,
  userCareer,
});
export default reducer;
