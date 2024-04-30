import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getBlogs = createAsyncThunk('websiteConfiguration/blogs/getBlogs', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/blog`, {
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

export const removeBlogs = createAsyncThunk('websiteConfiguration/blogs/removeBlogs', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/blog/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedBlogsIds,
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
  return param.selectedBlogsIds;
});

const blogsAdapter = createEntityAdapter({
  selectId: (blog) => blog.id,
  selectAll: (blog) => blog,
  selectById: (blog) => blog.id,
  removeMany: (blog) => blog.id,
});

export const { selectAll: selectBlogs, selectById: selectBlogById } = blogsAdapter.getSelectors(
  (state) => state.websiteConfiguration.blogs
);

const blogsSlice = createSlice({
  name: 'websiteConfiguration/blogs',
  initialState: blogsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setBlogsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getBlogs.fulfilled]: blogsAdapter.setAll,
    [removeBlogs.fulfilled]: (state, action) => blogsAdapter.removeMany(state, action.payload),
  },
});

export const { setBlogsSearchText } = blogsSlice.actions;

export const selectBlogsSearchText = ({ websiteConfiguration }) => websiteConfiguration.blogs.searchText;

export default blogsSlice.reducer;
