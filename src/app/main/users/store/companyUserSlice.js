import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getCompanyUser = createAsyncThunk('users/companyUser/getCompanyUser', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/companyUser/${param.companyUserId}`, {
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

export const removeCompanyUser = createAsyncThunk(
  'users/companyUser/removeCompanyUser',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/companyUser/${param.companyUserId}`, {
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
    return param.companyUserId;
  }
  
);

export const saveCompanyUser = createAsyncThunk(
  'users/companyUser/saveCompanyUser',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/companyUser/${param.data.id}`,
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
export const addCompanyUser = createAsyncThunk(
  'users/companyUser/addCompanyUser',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/companyUser`,
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

const companyUserSlice = createSlice({
  name: 'users/companyUser',
  initialState: null,
  reducers: {
    resetCompanyUser: () => null,
    newCompanyuser: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          name: '',
          username: '',
          email: '',
          password: '',
          isAdmin: false,
          phone: '',
        },
      }),
    },
  },
  extraReducers: {
    [getCompanyUser.fulfilled]: (state, action) => action.payload,
    [saveCompanyUser.fulfilled]: (state, action) => action.payload,
    [addCompanyUser.fulfilled]: (state, action) => action.payload,
    [removeCompanyUser.fulfilled]: (state, action) => null,
  },
});

export const { newCompanyuser, resetCompanyUser } = companyUserSlice.actions;

export const selectCompanyUserDB = ({ users }) => users.companyUser;

export default companyUserSlice.reducer;
