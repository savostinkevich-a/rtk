import React, {FC} from 'react';
import {Avatar, Comment} from "antd";
import IComment from "../../../models/IComment";

interface PostCommentItemProps {
    comment: IComment
}

const PostCommentItem: FC<PostCommentItemProps> = ({comment}) => {
    return (
        <Comment
            key={comment.id}
            content={comment.body}
            author={comment.name}
            avatar={<Avatar>{comment.name[0].toUpperCase()}</Avatar>}
        />
    );
};

export default PostCommentItem;