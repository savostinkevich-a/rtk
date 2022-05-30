import React from 'react';
import PostListContainer from "../components/Posts/PostList/PostListContainer";
import {useParams} from "react-router-dom";

const PostListPage = () => {

    const params = useParams()

    return (
        <PostListContainer current={params.page ? parseInt(params.page) : 1}
                           size={params.limit ? parseInt(params.limit): 10}/>
    );
};

export default PostListPage;