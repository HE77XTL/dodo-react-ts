import AxiosRequest from './AxiosRequest';
import config from './api.config';

const { baseUrl } = config;

type GetProps = Record<string, string | number>;
type PostProps = Record<string, any>;

const Api = {
    getCats: (p?: GetProps) => AxiosRequest.get(`${baseUrl}/cats`, p),
    createCats: (p: PostProps) => AxiosRequest.post(`${baseUrl}/cats`, p),
};

export default Api;
