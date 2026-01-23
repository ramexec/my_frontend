import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url){

    const urlFull = import.meta.env.VITE_BACKEND_URL + url;
    
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios.get(urlFull)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setError(err);
        }).finally(setLoading(false))
    },[url])

    return {data,loading,error};
}