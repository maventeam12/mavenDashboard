import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getUserCareer = createAsyncThunk('websiteConfiguration/userCareer/getUserCareer', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/userCareer/${param.userCareerId}`, {
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

export const removeUserCareer = createAsyncThunk(
  'websiteConfiguration/userCareer/removeUserCareer',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/userCareer/${param.userCareerId}`, {
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
    return param.userCareerId;
  }
  
);

export const saveUserCareer = createAsyncThunk(
  'websiteConfiguration/userCareer/saveUserCareer',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/userCareer/${param.data.id}`,
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
export const addUserCareer = createAsyncThunk(
  'websiteConfiguration/userCareer/addUserCareer',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/userCareer`,
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

const userCareerSlice = createSlice({
  name: 'websiteConfiguration/userCareer',
  initialState: null,
  reducers: {
    resetUserCareer: () => null,
    newUserCareer: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          name: '',
          email: '',
          message: '',
          cvFile: '',
          career:'',
          isChecked:false,
        },
      }),
    },
  },
  extraReducers: {
    [getUserCareer.fulfilled]: (state, action) => action.payload,
    [saveUserCareer.fulfilled]: (state, action) => action.payload,
    [addUserCareer.fulfilled]: (state, action) => action.payload,
    [removeUserCareer.fulfilled]: (state, action) => null,
  },
});

export const { newUserCareer, resetUserCareer } = userCareerSlice.actions;

export const selectUserCareerDB = ({ websiteConfiguration }) => websiteConfiguration.userCareer;

export default userCareerSlice.reducer;
