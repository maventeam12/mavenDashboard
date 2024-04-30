import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getBlog = createAsyncThunk('websiteConfiguration/blog/getBlog', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/blog/${param.blogId}`, {
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

export const removeBlog = createAsyncThunk(
  'websiteConfiguration/blog/removeBlog',
  async (param, { dispatch, getState }) => {
    const response = await axios.delete(`https://www.api.mavenevents.ae/api/blog/${param.blogId}`, {
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
    return param.blogId;
  }
  
);

export const saveBlog = createAsyncThunk(
  'websiteConfiguration/blog/saveBlog',
  async (param, { dispatch, getState }) => {
    
    const response = await axios.put(
      `https://www.api.mavenevents.ae/api/blog/${param.data.id}`,
      {
        ...param.data,
      },
      { headers: {
        'Content-Type': 'multipart/form-data',
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
export const addBlog = createAsyncThunk(
  'websiteConfiguration/blog/addBlog',
  async (param, { dispatch, getState }) => {
    const response = await axios.post(
      `https://www.api.mavenevents.ae/api/blog`,
      {
        ...param.data,
      },
      { headers: {
        'Content-Type': 'multipart/form-data',
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

const blogSlice = createSlice({
  name: 'websiteConfiguration/blog',
  initialState: null,
  reducers: {
    resetBlog: () => null,
    newBlog: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: '',
          description: '',
          title: '',
          content: '',
          imageFile: '',
        },
      }),
    },
  },
  extraReducers: {
    [getBlog.fulfilled]: (state, action) => action.payload,
    [saveBlog.fulfilled]: (state, action) => action.payload,
    [addBlog.fulfilled]: (state, action) => action.payload,
    [removeBlog.fulfilled]: (state, action) => null,
  },
});

export const { newBlog, resetBlog } = blogSlice.actions;

export const selectBlogDB = ({ websiteConfiguration }) => websiteConfiguration.blog;

export default blogSlice.reducer;
