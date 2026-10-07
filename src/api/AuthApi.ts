import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { userSchema, type ConfirmToken, type ForgotPasswordForm, type NewPasswordForm, type RequestConfirmationCodeForm, type UserLoginForm, type UserRegistrationForm } from "@/types";

export async function createAccount(formdata:UserRegistrationForm) {

    try {
        const url = '/auth/create-account'
        const {data} = await api.post<string>(url, formdata)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}

export async function confirmAccount(formdata: ConfirmToken) {

    try {
        const url = '/auth/confirm-account'
        const {data} = await api.post<string>(url, formdata)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}

export async function requestConfirmationCode(formdata: RequestConfirmationCodeForm) {

    try {
        const url = '/auth/request-code'
        const {data} = await api.post<string>(url, formdata)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}

export async function authenticateUser(formdata: UserLoginForm) {

    try {
        const url = '/auth/login'
        const {data} = await api.post<string>(url, formdata)
        localStorage.setItem('AUTH_TOKEN', data)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}

export async function forgotPassword(formdata: ForgotPasswordForm) {

    try {
        const url = '/auth/forgot-password'
        const {data} = await api.post<string>(url, formdata)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}

export async function validateToken(formdata: ConfirmToken) {

    try {
        const url = '/auth/validate-token'
        const {data} = await api.post<string>(url, formdata)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}

export async function updatePasswordWithToken({formdata, token}: {formdata: NewPasswordForm, token: ConfirmToken['token']}) {

    try {
        const url = `/auth/update-password/${token}`
        const {data} = await api.post<string>(url, formdata)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}

export async function getUser() {
    try {
        const {data} =  await api('/auth/user')
        const response = userSchema.safeParse(data)
        if(response.success){ 
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){ 
            throw new Error(error.response.data.error, { cause: error });
        }
        
    }
}
