import  { useEffect, useState, useCallback } from 'react';
import { AxiosPromise } from 'axios';
import { useHistory } from 'react-router-dom';

interface ConfigInterface {
    manual?: boolean;
}

const useRequest = (
    requestCallback: (p?: any) => AxiosPromise,
    config?: ConfigInterface | undefined
) => {
    const [loading] = useState<boolean>(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const history = useHistory();
    const request = useCallback(() => {
        requestCallback()
            .then((res) => {
                setResponse(res);
            })
            .catch((err) => {
                // 请求失败处理
                //  4xx
                //  5xx
                if (err.response.status === 401) {
                    // 跳转登录
                    history.push('/login');
                }

                setError(err);
            })
            .finally(() => {
                // loading 及相关处理
                // 请求取消
                // 全局唯一loading 动画处理
                console.log('finally');
            });
    }, [requestCallback, history]);

    const run = () => {
        request();
    };

    useEffect(() => {
        if (!config || !config.manual) {
            request();
        }
    }, [request, config]);

    return {
        loading,
        response,
        error,
        run,
    };
};
export default useRequest;
