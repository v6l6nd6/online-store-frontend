import { createAsyncThunk } from '@reduxjs/toolkit'

import { errorCatch } from '@/api/api.helper'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { UserService } from '@/services/user.service'

/* register */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			
			console.log('piska',data.avatar)
			const formData:any = new FormData();
			formData.append('email', data.email);
			formData.append('password',data.password);
			formData.append('name', data.name);
			formData.append('file',data.avatar[0]);
			const response = await AuthService.main('register', formData)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* login */
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main('login', data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* logout */
export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)


/* getProfile */
export const getProfile = createAsyncThunk<any>(
	'auth/getProfile',
	async () => {
		try {
			const response = await UserService.getProfile()
			debugger
			console.log(response)
			return response
		} catch (error) {
			return 'error'
		}
	}
)
