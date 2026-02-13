"use server"

import { serverFetch } from "@/utils/server-fetch";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function getDoctorOwnSchedules(queryString?: string) {
    try {
        // const response = await serverFetch.get(`/doctor-schedule/my-schedule${queryString ? `?${queryString}` : ""}`);
        const response = await serverFetch.get(`/doctor-schedule${queryString ? `?${queryString}` : ""}`);
        return await response.json();
        
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            data: [],
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export async function getAvailableSchedules(queryString?: string) {
    try {
        const response = await serverFetch.get(`/schedule/${queryString ? `?${queryString}` : ""}`);
        return await response.json();
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export async function createDoctorSchedule(scheduleIds: string[]) {
    try {
        const response = await serverFetch.post(`/doctor-schedule`, {
            body: JSON.stringify({ scheduleIds }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        // if (result.success) {
        //     revalidateTag('my-schedules', { expire: 0 });
        //     revalidateTag('doctor-schedules-list', { expire: 0 });
        //     revalidateTag('schedules-list', { expire: 0 });
        // }
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export async function deleteDoctorOwnSchedule(scheduleId: string) {
    try {
        const response = await serverFetch.delete(`/doctor-schedule/${scheduleId}`);
        const result = await response.json();

        // if (result.success) {
        //     revalidateTag('my-schedules', { expire: 0 });
        //     revalidateTag('doctor-schedules-list', { expire: 0 });
        //     revalidateTag('schedules-list', { expire: 0 });
        // }

        return {
            success: result.success,
            message: result.message || "Schedule removed successfully",
        };
    } catch (error: any) {
        console.error("Delete schedule error:", error);
        return {
            success: false,
            message: error.message || "Failed to remove schedule",
        };
    }
}