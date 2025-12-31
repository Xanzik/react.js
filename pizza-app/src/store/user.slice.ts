import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage.ts';
import axios, { AxiosError } from 'axios';
import type { Profile } from '../interfaces/user.interface.ts';
import type { RootState } from './store.ts';

export const JWT_PERSISTENT_STATE = 'jwt';

export interface UserPersistedState {
	jwt: string | null;
}

export interface UserState {
	jwt: string | null;
	loginErrorMessage?: string;
	registerErrorMessage?: string;
	profile?: Profile;
}

const initialState: UserState = {
	jwt: loadState<UserPersistedState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk(
	'user/login',
	async (params: { email: string; password: string }) => {
		try {
			const { data } = await axios.post(`/pizza-api-demo/auth/login`, {
				email: params.email,
				password: params.password,
			});
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data.message);
			}
		}
	},
);

export const register = createAsyncThunk(
	'user/register',
	async (params: { email: string; password: string; name: string }) => {
		try {
			const { data } = await axios.post(`/pizza-api-demo/auth/register`, {
				email: params.email,
				password: params.password,
				name: params.name,
			});
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data.message);
			}
		}
	},
);

export const getProfile = createAsyncThunk<Profile, void, { state: RootState }>(
	'user/profile',
	async (_, thunkApi) => {
		try {
			const jwt = thunkApi.getState().user.jwt;
			const { data } = await axios.get('/pizza-api-demo/user/profile', {
				headers: { Authorization: `Bearer ${jwt}` },
			});
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data.message);
			}
		}
	},
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.jwt = null;
		},
		clearLoginError: (state) => {
			state.loginErrorMessage = undefined;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			if (!action.payload) {
				return;
			}
			state.jwt = action.payload.access_token;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginErrorMessage = action.error.message;
		});
		builder.addCase(register.fulfilled, (state, action) => {
			if (!action.payload) {
				return;
			}
			state.jwt = action.payload.access_token;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.registerErrorMessage = action.error.message;
		});
		builder.addCase(getProfile.fulfilled, (state, action) => {
			state.profile = action.payload;
		});
	},
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
