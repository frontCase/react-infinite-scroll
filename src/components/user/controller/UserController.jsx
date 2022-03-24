import React, { useState } from 'react'
import { UserView } from '../view/UserView'
import { UserModel } from '../model/UserModel'

const UserController = () => {

    const [user, setUser] = useState({ name: 'faramarz', lastName: 'shourAbadi' })
    const users = UserModel(user.name, user.lastName, 10)
    const _handleChangeUserBTN = () => {
        setUser({
            name: 'feri',
            lastName: 'sh'
        })
    }

    return (
        <>
            <UserView
                user={users}
                changeUserBTN={_handleChangeUserBTN}
            />
        </>
    )
}

export { UserController }