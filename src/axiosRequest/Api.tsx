import AxiosRequest from './AxiosRequest';

const Api = {
    loginTest: (p?: Record<string, string | number>) =>
        AxiosRequest.get('http://localhost:3001/', p),
    getCats: (p?: Record<string, string | number>) =>
        AxiosRequest.get('http://localhost:3001/cats', p),
    createCats: (p: Record<string, any>) =>
        AxiosRequest.post('http://localhost:3001/cats', p),

};

export default Api
