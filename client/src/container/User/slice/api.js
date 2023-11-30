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

export const registerUserAPI = async (payload) => {
    return await fetchAPI("/auth/register", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}