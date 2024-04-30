import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getClient = createAsyncThunk('users/client/getClient', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/client/${param.clientId}`, {
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

export const removeClient = createAsyncThunk(
  'users/client/removeClient',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/client/${param.clientId}`, {
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
    return param.clientId;
  }
  
);

export const saveClient = createAsyncThunk(
  'users/client/saveClient',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/client/${param.data.id}`,
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
export const addClient = createAsyncThunk(
  'users/client/addClient',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/client`,
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

const clientSlice = createSlice({
  name: 'users/client',
  initialState: null,
  reducers: {
    resetClient: () => null,
    newClient: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          name: '',
          username: '',
          email: '',
          password: '',
          isImportant: false,
          phone: '',
          address:'',
          logoFile:'',
        },
      }),
    },
  },
  extraReducers: {
    [getClient.fulfilled]: (state, action) => action.payload,
    [saveClient.fulfilled]: (state, action) => action.payload,
    [addClient.fulfilled]: (state, action) => action.payload,
    [removeClient.fulfilled]: (state, action) => null,
  },
});

export const { newClient, resetClient } = clientSlice.actions;

export const selectClientDB = ({ users }) => users.client;

export default clientSlice.reducer;
