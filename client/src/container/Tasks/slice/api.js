import { fetchAPI } from "../../../utils/fetchAPI";

export const getAllTasksAPI = async () => {
    return await fetchAPI("/tasks", {
        method: "GET",
    });
}

export const getTaskAPI = async (_id) => {
    return await fetchAPI(`/tasks/${_id}`, {
        method: "GET",
    });
}

export const createTaskAPI = async (payload) => {
    return await fetchAPI("/tasks", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

export const updateTaskAPI = async (payload) => {
    return await fetchAPI(`/tasks/${payload._id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
    });
}

export const deleteTaskAPI = async (_id) => {
    return await fetchAPI(`/tasks/${_id}`, {
        method: "DELETE",
    });
}