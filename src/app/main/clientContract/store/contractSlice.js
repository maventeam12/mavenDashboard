import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";
import ContractModel from '../contract/model/ContractModel';
export const getContract = createAsyncThunk('clientContract/contract/getContract', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/contract/months/${param.contractId}`, {
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

const contractSlice = createSlice({
  name: 'clientContract/contract',
  initialState: null,
  reducers: {
    resetContract: () => null,
    newContract: (state, action) => ContractModel(),
  },
  extraReducers: {
    [getContract.fulfilled]: (state, action) => action.payload,
  },
});

export const { newContract, resetContract } = contractSlice.actions;

export const selectContractDB = ({ clientContract }) => clientContract.contract;

export default contractSlice.reducer;
