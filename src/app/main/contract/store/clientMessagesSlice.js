import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getClientMessages = createAsyncThunk('contract/clientMessages/getClientMessages', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/clientMessage`, {
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

export const removeClientMessages = createAsyncThunk('contract/clientMessages/removeClientMessages', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/clientMessage/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedClientMessagesIds,
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
  return param.selectedClientMessagesIds;
});

const clientMessagesAdapter = createEntityAdapter({
  selectId: (message) => message.id,
  selectAll: (message) => message,
  selectById: (message) => message.id,
  removeMany: (message) => message.id,
});

export const { selectAll: selectClients, selectById: selectClientMessagesById } = clientMessagesAdapter.getSelectors(
  (state) => state.contract.clientMessages
);

const clientMessageSlice = createSlice({
  name: 'contract/clientMessages',
  initialState: clientMessagesAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setClientMessagesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getClientMessages.fulfilled]: clientMessagesAdapter.setAll,
    [removeClientMessages.fulfilled]: (state, action) => clientMessagesAdapter.removeMany(state, action.payload),
  },
});

export const { setClientMessagesSearchText } = clientMessageSlice.actions;

export const selectClientsSearchText = ({ contract }) => contract.clientMessages.searchText;

export default clientMessageSlice.reducer;
