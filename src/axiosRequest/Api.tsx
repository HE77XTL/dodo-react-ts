import AxiosRequest from './AxiosRequest';

const Api = {
    loginTest: (p?: Record<string, string | number>) =>
        AxiosRequest.get('http://localhost:3000/', p),
    getCats: (p?: Record<string, string | number>) =>
        AxiosRequest.get('http://localhost:3000/cats', p),
    createCats: (p: Record<string, any>) =>
        AxiosRequest.post('http://localhost:3000/cats', p),

};

export default Api
