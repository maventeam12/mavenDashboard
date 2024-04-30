import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getClientMessages = createAsyncThunk('clientContract/clientMessages/getClientMessages', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/clientMessage/client/${param.id}`, {
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


const clientMessagesAdapter = createEntityAdapter({
  selectId: (message) => message.id,
  selectAll: (message) => message,
  selectById: (message) => message.id,
  removeMany: (message) => message.id,
});

export const { selectAll: selectClients, selectById: selectClientMessagesById } = clientMessagesAdapter.getSelectors(
  (state) => state.clientContract.clientMessages
);

const clientMessageSlice = createSlice({
  name: 'clientContract/clientMessages',
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
  },
});

export const { setClientMessagesSearchText } = clientMessageSlice.actions;

export const selectClientsSearchText = ({ clientContract }) => clientContract.clientMessages.searchText;

export default clientMessageSlice.reducer;
