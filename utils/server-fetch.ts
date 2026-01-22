"use server";
import envVars from "@/config/env"
import { getCookie } from "./tokenHandlers";

export const serverFetchHandler = async(endpoint: string, options: RequestInit): Promise<Response>=>{
    const accessToken = await getCookie('accessToken');
    const {headers, ...restOptions} = options;
    const res =  await fetch(`${envVars.api}${endpoint}`, {
        headers: {
           Cookie: accessToken ? `accessToken=${accessToken}` : '',
            ...headers
        },
        ...restOptions,
    });

    return res;
}

export const serverFetch = {
    get: async(endpoint: string, options: RequestInit = {}): Promise<Response> => {
        return serverFetchHandler(endpoint, {...options, method: 'GET'});
    },
    post: async(endpoint: string, options: RequestInit = {}): Promise<Response> => {
        return serverFetchHandler(endpoint, {...options, method: 'POST'});
    },
    patch: async(endpoint: string, options: RequestInit = {}): Promise<Response> => {
        return serverFetchHandler(endpoint, {...options, method: 'PATCH'});
    },
    delete: async(endpoint: string, options: RequestInit = {}): Promise<Response> => {
        return serverFetchHandler(endpoint, {...options, method: 'DELETE'});
    }
}