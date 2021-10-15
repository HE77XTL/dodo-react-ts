import axios from 'axios';
import queryString from 'query-string';

axios.defaults.headers = {
    token: '123',
};

axios.interceptors.response.use(response => {
    console.log('response----')
    console.log(response)
    if (response.status === 200) {
        return false;
    }
    return response
});

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
