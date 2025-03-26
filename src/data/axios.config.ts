import axios from "axios";

// Crear instancia de Axios
export const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true  // This is important for CORS with credentials
});