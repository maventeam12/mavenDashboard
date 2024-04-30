import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getEvents = createAsyncThunk('websiteConfiguration/events/getEvents', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/event`, {
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

export const removeEvents = createAsyncThunk('websiteConfiguration/events/removeEvents', async (param) => {
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/event/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedEventsIds,
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
  return param.selectedEventsIds;
});

const eventsAdapter = createEntityAdapter({
  selectId: (event) => event.id,
  selectAll: (event) => event,
  selectById: (event) => event.id,
  removeMany: (event) => event.id,
});

export const { selectAll: selectEvents, selectById: selectEventById } = eventsAdapter.getSelectors(
  (state) => state.websiteConfiguration.events
);

const eventsSlice = createSlice({
  name: 'websiteConfiguration/events',
  initialState: eventsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setEventsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getEvents.fulfilled]: eventsAdapter.setAll,
    [removeEvents.fulfilled]: (state, action) => eventsAdapter.removeMany(state, action.payload),
  },
});

export const { setEventsSearchText } = eventsSlice.actions;

export const selectEventsSearchText = ({ websiteConfiguration }) => websiteConfiguration.events.searchText;

export default eventsSlice.reducer;
