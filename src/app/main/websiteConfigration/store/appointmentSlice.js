import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getAppointment = createAsyncThunk('websiteConfiguration/appointment/getAppointment', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/appointments/${param.appointmentId}`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
  });
  if (Array.isArray(response.data.error)) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < response.data.error.length; i++) {
      toast.error(response.data.error[i].msg.message, {
        position: "bottom-right",
         draggable: false 
      })
    }
    return null
  } 
return response.data
});

export const removeAppointment = createAsyncThunk(
  'websiteConfiguration/appointment/removeAppointment',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/appointments/${param.appointmentId}`, {
      headers: {
        access_token: param.access_token,
        email: param.email,
        username: param.username,
        id: param.id,
      },
    });
    if (Array.isArray(response.data.error)) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < response.data.error.length; i++) {
        toast.error(response.data.error[i].msg.message, {
          position: "bottom-right",
           draggable: false 
        })
      }
    } 
    return param.appointmentId;
  }
  
);

export const saveAppointment = createAsyncThunk(
  'websiteConfiguration/appointment/saveAppointment',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/appointments/${param.data.id}`,
      {
        ...param.data,
      },
      { headers: {
        access_token: param.access_token,
        email: param.email,
        username: param.username,
        id: param.id,
      } }
    );
    if (Array.isArray(response.data.error)) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < response.data.error.length; i++) {
        toast.error(response.data.error[i].msg.message, {
          position: "bottom-right",
           draggable: false 
        })
      }
    } 
    return response.data
  }
);
export const addAppointment = createAsyncThunk(
  'websiteConfiguration/appointment/addAppointment',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/appointments`,
      {
        ...param.data,
      },
      { headers: {
        access_token: param.access_token,
        email: param.email,
        username: param.username,
        id: param.id,
      } }
    );
    if (Array.isArray(response.data.error)) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < response.data.error.length; i++) {
        toast.error(response.data.error[i].msg.message, {
          position: "bottom-right",
           draggable: false 
        })
      }
    } 
    return response.data;
  }
);

const AppointmentSlice = createSlice({
  name: 'websiteConfiguration/appointment',
  initialState: null,
  reducers: {
    resetAppointment: () => null,
    newAppointment: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          name: '',
          businessName: '',
          email: '',
          message: '',
          service: '',
          isDone: false,
          phone: '',
        },
      }),
    },
  },
  extraReducers: {
    [getAppointment.fulfilled]: (state, action) => action.payload,
    [saveAppointment.fulfilled]: (state, action) => action.payload,
    [addAppointment.fulfilled]: (state, action) => action.payload,
    [removeAppointment.fulfilled]: (state, action) => null,
  },
});

export const { newAppointment, resetAppointment } = AppointmentSlice.actions;

export const selectAppointmentDB = ({ websiteConfiguration }) => websiteConfiguration.appointment;

export default AppointmentSlice.reducer;
