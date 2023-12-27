import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServer from "../../servers/authServer";

//createAsyncThunk --> data get from server and update redux status async
//"auth/login" just a name
//thunk action same as authSlice.actions;
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    // wait server return value
    const data = await authServer.login(user);
    if (data.success) {
      //id success "fulfilled" will do
      return data;
    } else {
      // if false "reject" status will do
      return thunkAPI.rejectWithValue(data.message);
    }
  } catch (error) {
    console.log(error);
  }
});
//register
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const data = await authServer.register(user);
      if (data.success) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
);
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
  //for handle createAsyncThunk function update
  //previous login function
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
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.auth = true;
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
