import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
};

export const getPosts = createAsyncThunk(
  'posts/get',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
);

export const postSlices = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postAdded : (state, action) => {
        state.posts.unshift(action.payload)
    }
  },
  extraReducers: {
      [getPosts.fulfilled] : (state, action) => {
          state.posts = action.payload
      }
  },
});

export const { postAdded } = postSlices.actions;

export default postSlices.reducer;
