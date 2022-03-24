import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (query, page) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            console.log('query==>', query)
            setLoading(true);
            setError(false);
            const res = await axios.get(`https://gorest.co.in//public/v2/todos?page=${page}`);
            setList((prev) => [...prev, ...res.data])
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [query, page]);

    useEffect(() => {
        sendQuery(query);
    }, [query, sendQuery, page]);

    return { loading, error, list };
}

export default useFetch;