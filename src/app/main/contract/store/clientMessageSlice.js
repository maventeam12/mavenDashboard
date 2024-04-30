import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getClientMessage = createAsyncThunk('contract/clientMessage/getClientMessage', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/clientMessage/${param.clientMessageId}`, {
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

export const removeClientMessage = createAsyncThunk(
  'contract/clientMessage/removeClientMessage',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/clientMessage/${param.clientMessageId}`, {
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
    return param.clientMessageId;
  }
  
);

export const saveClientMessage = createAsyncThunk(
  'contract/clientMessage/saveClientMessage',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/clientMessage/${param.data.id}`,
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
export const addClientMessage = createAsyncThunk(
  'contract/clientMessage/addClientMessage',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/clientMessage`,
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

const clientMessageSlice = createSlice({
  name: 'contract/clientMessage',
  initialState: null,
  reducers: {
    resetClientMessage: () => null,
    newClientMessage: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          message: '',
          clientId:'',
        },
      }),
    },
  },
  extraReducers: {
    [getClientMessage.fulfilled]: (state, action) => action.payload,
    [saveClientMessage.fulfilled]: (state, action) => action.payload,
    [addClientMessage.fulfilled]: (state, action) => action.payload,
    [removeClientMessage.fulfilled]: (state, action) => null,
  },
});

export const { newClientMessage, resetClientMessage } = clientMessageSlice.actions;

export const selectClientMessageDB = ({ contract }) => contract.clientMessage;

export default clientMessageSlice.reducer;
