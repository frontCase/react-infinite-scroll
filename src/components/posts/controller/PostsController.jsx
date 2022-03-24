import React, { useState } from 'react'
import { PostsModel } from '../model/PostsModel';
import { PostsView } from '../view/PostsView'

const PostsController = () => {

    const [page, setPage] = useState(1);
    const { posts, error } = PostsModel(page)

    const _handleGetPostNext = () => {
        setPage(prev => prev + 1)
    }
    return (
        <>
            <PostsView posts={posts} getPostsBTN={_handleGetPostNext} />
        </>
    )
}

export { PostsController }