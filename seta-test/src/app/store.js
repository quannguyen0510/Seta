import { configureStore } from '@reduxjs/toolkit';
import posts from '../features/posts/postSlices'
export const store = configureStore({
  reducer: {
    posts
  },
});
