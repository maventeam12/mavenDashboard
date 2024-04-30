import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";
import ContractModel from '../contract/model/ContractModel';
export const getContract = createAsyncThunk('contract/contracts/getContract', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/contract/${param.contractId}`, {
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

export const removeContract = createAsyncThunk(
  'contract/contract/removeContract',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/contract/${param.contractId}`, {
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
    return param.contractId;
  }
  
);

export const saveContract = createAsyncThunk(
  'contract/contract/saveContract',
  async (param, { dispatch, getState }) => {
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/contract/${param.data.id}`,
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
export const addContract = createAsyncThunk(
  'contract/contract/addContract',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/contract`,
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

const contractSlice = createSlice({
  name: 'contract/contract',
  initialState: null,
  reducers: {
    resetContract: () => null,
    newContract: (state, action) => ContractModel(),
  },
  extraReducers: {
    [getContract.fulfilled]: (state, action) => action.payload,
    [saveContract.fulfilled]: (state, action) => action.payload,
    [addContract.fulfilled]: (state, action) => action.payload,
    [removeContract.fulfilled]: (state, action) => null,
  },
});

export const { newContract, resetContract } = contractSlice.actions;

export const selectContractDB = ({ contract }) => contract.contract;

export default contractSlice.reducer;
