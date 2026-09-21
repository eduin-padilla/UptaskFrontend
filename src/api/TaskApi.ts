import {isAxiosError} from "axios";
import api from "@/lib/axios";
import { type TaskFormData, type Project, type Task, TaskSchema } from "@/types";

type TaskApi = {
    formData: TaskFormData
    projectId: Project['_id'],
    taskId: Task['_id']
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

export async function getTaskById({projectId, taskId} : Pick<TaskApi, 'projectId' | 'taskId'>)  {

    try {
        const url = `/projects/${projectId}/task/${taskId}`
        const { data} = await api(url)
        const response = TaskSchema.safeParse(data)
        if(response.success){

            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error, { cause: error });
            
        }
    }
    
}


export async function UpdateTask({projectId, taskId, formData}: Pick<TaskApi, 'projectId' | 'taskId' | 'formData'>) {

    try {
        const url = `/projects/${projectId}/task/${taskId}`
        const {data} = await api.put<string>(url, formData)
        return data
        
    } catch (error) {
        if(isAxiosError(error) && error.response){
            
            throw new Error(error.response.data.error, { cause: error });
            
        }
    }
}

export async function DeleteTask({projectId, taskId}: Pick<TaskApi, 'projectId' | 'taskId'>) {

    try {
        const url = `/projects/${projectId}/task/${taskId}`
        const {data} = await api.delete<string>(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error, { cause: error });
        }
    }
}