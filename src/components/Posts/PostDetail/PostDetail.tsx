import React, {FC} from 'react';
import {Card, Typography} from "antd";
import IPost from "../../../models/IPost";

interface PostDetailProps {
    post: IPost
}

const PostDetail: FC<PostDetailProps> = ({post}) => {

    return (
        <Card hoverable>
            <Typography.Title>{post.title}</Typography.Title>
            <Typography.Paragraph>
                {post.body}
            </Typography.Paragraph>
        </Card>
    );
};

export default PostDetail;