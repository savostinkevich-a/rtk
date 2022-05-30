import React from 'react';
import {useParams} from "react-router-dom";
import {Navigate} from "react-router-dom";
import PostDetailContainer from "../components/Posts/PostDetail/PostDetailContainer";

const PostDetailPage = () => {

    const params = useParams()

    if (!params.id) return <Navigate to={"/"}/>

    return (
        <PostDetailContainer id={parseInt(params.id)}/>
    );
};

export default PostDetailPage;