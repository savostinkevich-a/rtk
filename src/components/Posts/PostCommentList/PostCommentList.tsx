import React, {FC} from 'react';
import {Card, Typography} from "antd";
import IComment from "../../../models/IComment";
import PostCommentItem from "../PostCommentItem/PostCommentItem";

interface PostCommentListProps {
    comments: Array<IComment>
}

const PostCommentList: FC<PostCommentListProps> = ({comments}) => {
    return (
        <Card hoverable>
            <Typography.Title level={2}>Comments</Typography.Title>
            {comments.length === 0 ? <Typography.Paragraph>No comments</Typography.Paragraph>
                : comments.map(comment => {
                    return <PostCommentItem key={comment.id} comment={comment}/>
                })
            }
        </Card>
    );
};

export default PostCommentList;