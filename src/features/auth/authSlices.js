import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServer from "../../servers/authServer";

//createAsyncThunk --> data from server and update redux status
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const data = await authServer.login(user);
    console.log("slices", data);
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.message);
    }
  } catch (error) {
    console.log(error);
  }
});
//get user information from localstorage
const user = JSON.parse(localStorage.getItem("user"));
//create a auth slice
const authSlice = createSlice({
  name: "auth",
  //init value
  initialState: {
    auth: false,
    user: user ? user : null,
    loading: false,
    message: null,
  },
  reducers: {
    logOut: (state, action) => {
      state.user = null;
      state.auth = null;
      state.loading = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.auth = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.auth = false;
        state.message = action.payload;
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
