import React from 'react'

const PostsView = ({ posts, getPostsBTN }) => {

    return (
        <>
            <button onClick={getPostsBTN}>get next posts</button>
            <ul>
                {posts.map((item, index) => <li key={index}>{item.id}</li>)}
            </ul>
        </>
    )
}

export { PostsView }