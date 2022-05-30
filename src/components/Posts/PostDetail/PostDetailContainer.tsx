import React, {FC} from 'react';
import PostDetail from "./PostDetail";
import {useGetPostQuery} from "../../../services/PostService";
import {Divider, Typography} from "antd";
import PostCommentListContainer from "../PostCommentList/PostCommentListContainer";
import PostCommentFormContainer from "../PostCommentForm/PostCommentFormContainer";

interface PostDetailProps {
    id: number
}

const PostDetailContainer: FC<PostDetailProps> = ({id}) => {

    const {data: post, error: postError, isLoading: loadingPost} = useGetPostQuery(id)

    return (
        <>
            {loadingPost && <Typography.Title>Loading...</Typography.Title>}
            {postError && <Typography.Title>Error...</Typography.Title>}
            {post &&
                <>
                    <PostDetail post={post}/>
                    <Divider/>
                    <PostCommentListContainer postId={post.id}/>
                    <PostCommentFormContainer/>
                </>


            }
        </>

    );
};

export default PostDetailContainer;