import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7007/api",
});

export default api;
