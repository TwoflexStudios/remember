import axios from 'axios'

const api = axios.create({baseURL:"https://api.skybr.digital/"})

api.interceptors.request.use((config:any) => {
    config.headers["x-api-key"] = "jVXvhTOQdcPV6xPZSzdFg8z61t1LTqfc";
    return config;
})

export default api;