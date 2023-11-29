export const fetchAPI = async (path, options = {}) => {
    try {
        // For now quick fix
        const hostName = "http://localhost:5000/api";
        const token = localStorage.getItem("auth");

        const res = await fetch(`${hostName}${path}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const json = await res.json();
        return json;
    } catch (error) {
        return { error: true, message: error.message };
    }
};
