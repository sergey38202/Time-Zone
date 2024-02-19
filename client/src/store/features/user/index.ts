import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { IUserDTO } from './../../../types/user';
import { SLICE_NAME } from "./constants";
import { IUserState } from "./types";
import { axiosWithAuth } from '../../../api/axios';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axiosWithAuth.get<IUserDTO[]>('/auth/users');
    return response.data;
  });

const initialState: IUserState = {
  data: null,
  users: [],
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    clearUser: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
