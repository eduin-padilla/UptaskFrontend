import {isAxiosError} from "axios";
import api from "@/lib/axios";
import { type TaskFormData, type Project } from "@/types";

type TaskApi = {
    formData: TaskFormData
    projectId: Project['_id']
}


export async function createTask({formData, projectId}: Pick<TaskApi, 'formData' | 'projectId'>) {



    try {
        const url = `/projects/${projectId}/task`
        const {data} = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error, { cause: error });
            
        }
        
    }
}