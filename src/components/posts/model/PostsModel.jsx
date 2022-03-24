import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const PostsModel = (page) => {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(undefined)

    const fetchApi = useCallback(async () => {

        try {
            setError(undefined)
            const response = await axios.get(`https://gorest.co.in//public/v2/posts?page=${page}`)
            setPosts(prev => [...prev, ...response.data])
        } catch (error) {
            setError(error)
        }
    }, [page])

    useEffect(() => {
        fetchApi()
    }, [page, fetchApi])

    return { posts, error };
}

export { PostsModel }