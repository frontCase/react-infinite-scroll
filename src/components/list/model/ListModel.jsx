import React, { useCallback, useEffect, useState } from 'react'

const ListModel = (userObject) => {

    // id name lastName age
    const [userList, setUserList] = useState([])
    const [error, setError] = useState(null)

    const getUsers = useCallback(() => {
        try {
            setError(null)
            setUserList(prev => [...prev, userObject])

        } catch (error) {
            setError(error)
        }
    }, [userObject])

    useEffect(() => {
        getUsers()
    }, [userObject, getUsers])

    return { userList, error };
}

export { ListModel }