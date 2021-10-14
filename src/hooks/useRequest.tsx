import React, { useEffect, useState, useCallback } from 'react';
import { AxiosPromise } from 'axios';

const useRequest = (cd: (p?: any) => AxiosPromise) => {
    const [loading, setLoading] = useState<boolean>(false);

    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    const request = useCallback(() => {
        cd().then((res) => {
            console.log(res);
        });
    }, [cd]);

    const run = () => {
        request();
    };

    useEffect(() => {
        request();
    }, [request]);

    return {
        loading,
        response,
        error,
        run,
    };
};
export default useRequest;
