import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const InfiniteModel = (query, page) => {
    const [list, setListData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const FetchData = useCallback(async () => {

        try {
            setLoading(true)
            setError(null)
            const response = await axios.get(`https://gorest.co.in//public/v2/todos?page=${page}`);
            setListData(prev => [...prev, ...response.data])
        } catch (error) {
            setError(error)
        }
    }, [query, page])

    useEffect(() => {
        FetchData()
    }, [page, FetchData, query])
    return { list, loading, error }
}

export { InfiniteModel }