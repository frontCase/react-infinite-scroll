import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';

const UserModel = (name, lastName, age) => {

    const [user, setUser] = useState({ name: '', lastName: '', age: 0 })

    const makeUserObject = useCallback(() => {

        setUser({
            name,
            lastName,
            age
        })

    }, [name, lastName])

    useEffect(() => {
        makeUserObject(name, lastName)
    }, [name, makeUserObject, lastName])

    return user
}

export { UserModel }