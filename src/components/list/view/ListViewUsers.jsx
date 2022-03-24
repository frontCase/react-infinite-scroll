import React from 'react'

const ListViewUsers = ({ usersList, addUser, showUser }) => {

    return (
        <div>
            <button onClick={addUser}>add user</button>
            <ul>
                {
                    usersList.map((item, index) => <li key={index} onClick={() => showUser(index)}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}

export { ListViewUsers }