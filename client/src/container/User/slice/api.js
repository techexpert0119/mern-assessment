import { fetchAPI } from "../../../utils/fetchAPI";

export const authUserAPI = async () => {
    return await fetchAPI("/auth/user", {
        method: "GET",
    });
};

export const loginUserAPI = async (payload) => {
    return await fetchAPI("/auth/login", {
        method: "POST",
        body: JSON.stringify({
            email: payload.email,
            password: payload.password,
        }),
    });
}