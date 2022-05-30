import React, {FC} from 'react';
import PostCommentList from "./PostCommentList";
import {useGetPostCommentsQuery} from "../../../services/PostService";

interface PostCommentListContainerProps {
    postId: number
}

const PostCommentListContainer: FC<PostCommentListContainerProps> = ({postId}) => {

    const {data: comments} = useGetPostCommentsQuery(postId)

    return (
        <PostCommentList comments={comments || []}/>
    );
};

export default PostCommentListContainer;