import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getClientExtraServices = createAsyncThunk('contract/clientExtraService/getClientExtraServices', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/contractExtraService`, {
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

export const removeClientExtraServices = createAsyncThunk('contract/clientExtraService/removeClientExtraServices', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/contractExtraService/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedClientExtraServicesIds,
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
  return param.selectedClientExtraServicesIds;
});

const clientExtraServicesAdapter = createEntityAdapter({
  selectId: (message) => message.id,
  selectAll: (message) => message,
  selectById: (message) => message.id,
  removeMany: (message) => message.id,
});

export const { selectAll: selectClients, selectById: selectClientMessagesById } = clientExtraServicesAdapter.getSelectors(
  (state) => state.contract.clientExtraService
);

const clientExtraServicesSlice = createSlice({
  name: 'contract/clientExtraService',
  initialState: clientExtraServicesAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setClientExtraServicesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getClientExtraServices.fulfilled]: clientExtraServicesAdapter.setAll,
    [removeClientExtraServices.fulfilled]: (state, action) => clientExtraServicesAdapter.removeMany(state, action.payload),
  },
});

export const { setClientExtraServicesSearchText } = clientExtraServicesSlice.actions;

export const selectClientsSearchText = ({ contract }) => contract.clientExtraService.searchText;

export default clientExtraServicesSlice.reducer;
