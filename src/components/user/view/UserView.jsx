import React from 'react'

const UserView = ({ changeUserBTN, user }) => {

    return (
        <div>
            <h3>{`name is: ${user.name} ... family is : ${user.lastName} ... age is: ${user.age}`}</h3>
            <button onClick={changeUserBTN}>changed user info</button>
        </div>
    )
}

export { UserView }