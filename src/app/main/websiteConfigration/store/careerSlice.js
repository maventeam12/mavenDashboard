import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";
import CareerModel from '../career/model/CareerModel';
export const getCareer = createAsyncThunk('websiteConfiguration/career/getCareer', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/careers/${param.careerId}`, {
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

export const removeCareer = createAsyncThunk(
  'websiteConfiguration/career/removeCareer',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/careers/${param.careerId}`, {
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
    return param.careerId;
  }
  
);

export const saveCareer = createAsyncThunk(
  'websiteConfiguration/career/saveCareer',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/careers/${param.data.id}`,
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
export const addCareer = createAsyncThunk(
  'websiteConfiguration/career/addCareer',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/careers`,
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

const careerSlice = createSlice({
  name: 'websiteConfiguration/career',
  initialState: null,
  reducers: {
    resetCareer: () => null,
    newCareer: (state, action) => CareerModel(),
  },
  extraReducers: {
    [getCareer.fulfilled]: (state, action) => action.payload,
    [saveCareer.fulfilled]: (state, action) => action.payload,
    [addCareer.fulfilled]: (state, action) => action.payload,
    [removeCareer.fulfilled]: (state, action) => null,
  },
});

export const { newCareer, resetCareer } = careerSlice.actions;

export const selectCareerDB = ({ websiteConfiguration }) => websiteConfiguration.career;

export default careerSlice.reducer;
