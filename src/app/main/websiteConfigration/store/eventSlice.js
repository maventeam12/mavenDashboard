import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getEvent = createAsyncThunk('websiteConfiguration/event/getEvent', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/event/${param.eventId}`, {
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

export const removeEvent = createAsyncThunk(
  'websiteConfiguration/event/removeEvent',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/event/${param.eventId}`, {
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

export const saveEvent = createAsyncThunk(
  'websiteConfiguration/event/saveEvent',
  async (param, { dispatch, getState }) => {
    
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/event/${param.data.id}`,
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
export const addEvent = createAsyncThunk(
  'websiteConfiguration/event/addEvent',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/event`,
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

const eventSlice = createSlice({
  name: 'websiteConfiguration/event',
  initialState: null,
  reducers: {
    resetEvent: () => null,
    newEvent: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          name: '',
          coverImageFile: '',
        },
      }),
    },
  },
  extraReducers: {
    [getEvent.fulfilled]: (state, action) => action.payload,
    [saveEvent.fulfilled]: (state, action) => action.payload,
    [addEvent.fulfilled]: (state, action) => action.payload,
    [removeEvent.fulfilled]: (state, action) => null,
  },
});

export const { newEvent, resetEvent } = eventSlice.actions;

export const selectEventDB = ({ websiteConfiguration }) => websiteConfiguration.event;

export default eventSlice.reducer;
