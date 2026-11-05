import api from "@/lib/axios";
import type { UpdateCurrentPasswordForm, UserProfileForm } from "@/types";
import { isAxiosError } from "axios";




export async function upateProfile(formData: UserProfileForm) {

    try {

        const {data} = await api.put<string>('/auth/profile', formData)
        return data

    } catch (error) {

        if (isAxiosError(error)) {
            throw new Error(error.response?.data.error, { cause: error })
        }
    }
    
}
export async function changePassword(formData: UpdateCurrentPasswordForm) {

    try {

        const {data} = await api.post<string>('/auth/update-password', formData)
        return data

    } catch (error) {

        if (isAxiosError(error)) {
            throw new Error(error.response?.data.error, { cause: error })
        }
    }
    
}