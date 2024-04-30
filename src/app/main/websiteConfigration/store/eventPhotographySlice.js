import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getEventPhotography = createAsyncThunk('websiteConfiguration/eventPhotography/getEventPhotography', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/eventPhotography/${param.eventPhotographyId}`, {
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

export const removeEventPhotography = createAsyncThunk(
  'websiteConfiguration/eventPhotography/removeEventPhotography',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/eventPhotography/${param.eventId}`, {
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
    return param.eventId;
  }
  
);

export const saveEventPhotography = createAsyncThunk(
  'websiteConfiguration/eventPhotography/saveEventPhotography',
  async (param, { dispatch, getState }) => {
    
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/eventPhotography/${param.data.id}`,
      {
        ...param.data,
      },
      { headers: {
        'Content-Type': 'multipart/form-data',
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
export const addEventPhotography = createAsyncThunk(
  'websiteConfiguration/eventPhotography/addEventPhotography',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/eventPhotography`,
      {
        ...param.data,
      },
      { headers: {
        'Content-Type': 'multipart/form-data',
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

const eventPhotographySlice = createSlice({
  name: 'websiteConfiguration/eventPhotography',
  initialState: null,
  reducers: {
    resetEventPhotography: () => null,
    newEventPhotography: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          imageFile: '',
          eventId: '',
        },
      }),
    },
  },
  extraReducers: {
    [getEventPhotography.fulfilled]: (state, action) => action.payload,
    [saveEventPhotography.fulfilled]: (state, action) => action.payload,
    [addEventPhotography.fulfilled]: (state, action) => action.payload,
    [removeEventPhotography.fulfilled]: (state, action) => null,
  },
});

export const { newEventPhotography, resetEventPhotography } = eventPhotographySlice.actions;

export const selectEventPhotographyDB = ({ websiteConfiguration }) => websiteConfiguration.eventPhotography;

export default eventPhotographySlice.reducer;
