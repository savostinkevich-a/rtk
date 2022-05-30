import React, {FC} from 'react'
import IPost from "../../../models/IPost";
import {Card} from "antd";
import {Link} from "react-router-dom";

interface PostProps {
    post : IPost
}

const PostItem: FC<PostProps> = ({post}) => {
    return (
        <Link to={"/posts/" + post.id}>
            <Card title={post.title + " (" + post.id + ")"} style={{marginBottom: "1rem", borderRadius: 5}} hoverable>
                <p>{post.body}</p>
            </Card>
        </Link>

    );
};

export default PostItem