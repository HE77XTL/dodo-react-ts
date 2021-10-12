import React, { useState } from 'react';
import axios from 'axios';

interface Props {
    url: string;
    data?: Record<string, any>;
    config?: Record<string, any>;
}

const useRequest = ({ url, data, config }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    function run() {
        console.log(777)
        setLoading(true);
        setResponse(2);
    }

    return {
        loading,
        response,
        error,
        run,
    };
};
export default useRequest;
