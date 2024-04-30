import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getService = createAsyncThunk('websiteConfiguration/service/getService', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/services/${param.serviceId}`, {
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

export const removeService = createAsyncThunk(
  'websiteConfiguration/service/removeService',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/services/${param.serviceId}`, {
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
    return param.serviceId;
  }
  
);

export const saveService = createAsyncThunk(
  'websiteConfiguration/service/saveService',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/services/${param.data.id}`,
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
export const addService = createAsyncThunk(
  'websiteConfiguration/service/addService',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/services`,
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

const serviceSlice = createSlice({
  name: 'websiteConfiguration/service',
  initialState: null,
  reducers: {
    resetService: () => null,
    newService: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          name: '',
        },
      }),
    },
  },
  extraReducers: {
    [getService.fulfilled]: (state, action) => action.payload,
    [saveService.fulfilled]: (state, action) => action.payload,
    [addService.fulfilled]: (state, action) => action.payload,
    [removeService.fulfilled]: (state, action) => null,
  },
});

export const { newService, resetService } = serviceSlice.actions;

export const selectServiceDB = ({ websiteConfiguration }) => websiteConfiguration.service;

export default serviceSlice.reducer;
