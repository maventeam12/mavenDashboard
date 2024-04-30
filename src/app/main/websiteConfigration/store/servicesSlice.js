import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getServices = createAsyncThunk('websiteConfiguration/services/getServices', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/services`, {
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

export const removeServices = createAsyncThunk('websiteConfiguration/services/removeServices', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/services/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedServicesIds,
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
  return param.selectedServicesIds;
});

const servicesAdapter = createEntityAdapter({
  selectId: (service) => service.id,
  selectAll: (service) => service,
  selectById: (service) => service.id,
  removeMany: (service) => service.id,
});

export const { selectAll: selectServices, selectById: selectServiceById } = servicesAdapter.getSelectors(
  (state) => state.websiteConfiguration.services
);

const servicesSlice = createSlice({
  name: 'websiteConfiguration/services',
  initialState: servicesAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setServicesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getServices.fulfilled]: servicesAdapter.setAll,
    [removeServices.fulfilled]: (state, action) => servicesAdapter.removeMany(state, action.payload),
  },
});

export const { setServicesSearchText } = servicesSlice.actions;

export const selectServicesSearchText = ({ websiteConfiguration }) => websiteConfiguration.services.searchText;

export default servicesSlice.reducer;
