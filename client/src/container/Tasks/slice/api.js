import { fetchAPI } from "../../../utils/fetchAPI";

export const getAllTasksAPI = async () => {
    return await fetchAPI("/tasks", {
        method: "GET",
    });
}