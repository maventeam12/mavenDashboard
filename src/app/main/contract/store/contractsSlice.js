import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getContracts = createAsyncThunk('contract/contracts/getContracts', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/contract`, {
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
  return await response.data;
});

export const removeContracts = createAsyncThunk('contract/contracts/removeContracts', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/contract/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedContractIds,
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
  return param.selectedContractIds;
});

const contractAdapter = createEntityAdapter({
  selectId: (contract) => contract.id,
  selectAll: (contract) => contract,
  selectById: (contract) => contract.id,
  removeMany: (contract) => contract.id,
});

export const { selectAll: selectContracts, selectById: selectContractById } = contractAdapter.getSelectors(
  (state) => state.contract.contracts
);

const contractsSlice = createSlice({
  name: 'contract/contracts',
  initialState: contractAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setContractsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getContracts.fulfilled]: contractAdapter.setAll,
    [removeContracts.fulfilled]: (state, action) => contractAdapter.removeMany(state, action.payload),
  },
});

export const { setContractsSearchText } = contractsSlice.actions;

export const selectContractsSearchText = ({ contract }) => contract.contracts.searchText;

export default contractsSlice.reducer;
