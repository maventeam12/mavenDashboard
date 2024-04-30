import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getEventPhotographies = createAsyncThunk('websiteConfiguration/eventPhotographies/getEventPhotographies', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/eventPhotography`, {
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

export const removeEventPhotographies = createAsyncThunk('websiteConfiguration/eventPhotographies/removeEventPhotographies', async (param) => {
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/eventPhotography/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedEventPhotographiesIds,
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
  return param.selectedEventPhotographiesIds;
});

const eventPhotographiesAdapter = createEntityAdapter({
  selectId: (eventPhotographies) => eventPhotographies.id,
  selectAll: (eventPhotographies) => eventPhotographies,
  selectById: (eventPhotographies) => eventPhotographies.id,
  removeMany: (eventPhotographies) => eventPhotographies.id,
});

export const { selectAll: selectEventPhotographies, selectById: selectEventPhotographiesById } = eventPhotographiesAdapter.getSelectors(
  (state) => state.websiteConfiguration.eventPhotographies
);

const eventPhotographiesSlice = createSlice({
  name: 'websiteConfiguration/eventPhotographies',
  initialState: eventPhotographiesAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setEventPhotographiesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getEventPhotographies.fulfilled]: eventPhotographiesAdapter.setAll,
    [removeEventPhotographies.fulfilled]: (state, action) => eventPhotographiesAdapter.removeMany(state, action.payload),
  },
});

export const { setEventPhotographiesSearchText } = eventPhotographiesSlice.actions;

export const selectEventPhotographiesSearchText = ({ websiteConfiguration }) => websiteConfiguration.eventPhotographies.searchText;

export default eventPhotographiesSlice.reducer;
