import axios from 'axios';
import queryString from 'query-string';

axios.defaults.headers = {
    token: '123',
};


// 添加请求拦截器
axios.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

const AxiosRequest = {
    get(url: string, params?: Record<string, string | number>) {
        const v = new Date().getTime();
        const paramsFmt = params ? { ...params, v } : { v };
        return axios({
            method: 'get',
            url: `${url}?${queryString.stringify(paramsFmt)}`,
        });
    },
    post(url: string, params: Record<string, any>) {
        return axios({
            method: 'post',
            url,
            data: params,
        });
    },
};

export default AxiosRequest;
