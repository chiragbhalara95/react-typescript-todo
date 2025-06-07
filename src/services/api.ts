import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers:{
        "Content-Type": "application/json"
    }
});

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        handleApiError(error);
        return Promise.reject(error);
    }
);

const handleApiError = (error: AxiosError) => {
    if (error.response){
        switch(error.response.status) {
            case 400:
                console.log("Bad request. Please check input.")
                break;
            case 401:
                console.log("Unauthorized. Please login again.")
                break;
            case 404:
                console.log("Resource not found.")
                break;
            case 500:
                console.log("Internal server error. Please try again.")
                break;
            default:
                console.log("An error occured. Please try again.")
        }
        console.log("Error Response:", error.response.data);
    } else if(error.request){
        console.log("Error Request: ", error.request);
    } else {
        console.log("Error Message:", error.message);
    }
};

export default api;