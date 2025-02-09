import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://wwwnick2690.fvds.ru/api',
    timeout: 1000,
    headers: {'Content-Type' : "application/json"}
})

export { axiosInstance }