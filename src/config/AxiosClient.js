import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_REDDIT;

const axiosClient = axios.create({
    baseURL: "https://api.reddit.com/r/pics/hot.json"
});

export default axiosClient;