import React, { useState } from 'react'
import { ListModel } from '../model/ListModel';
import { ListViewUsers } from '../view/ListViewUsers'

const ListControllerUsers = () => {

    const [users, setUsers] = useState({ name: 'faramarz', lastName: 'shourAbadi', age: 32 });
    const { userList, error } = ListModel(users)
    const _handleAddUser = () => {
        setUsers({ name: 'faramarz' + Math.random(), lastName: 'shourAbadi', age: Math.random() })
    }
    const _handleShowUser = (index) => {
        console.log('user info==>', userList[index])
    }

    return (
        <>

            <ListViewUsers usersList={userList} addUser={_handleAddUser} showUser={_handleShowUser} />
        </>
    )
}

export { ListControllerUsers }