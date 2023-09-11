import { IUser } from '@/types/user.interface'

export interface IUserState {
	email: string
	isAdmin: boolean
	avatarPath?:string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
	name?:any
	avatar?:any
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
