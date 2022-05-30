import React, {FC,} from 'react'
import PostItem from "../PostItem/PostItem";
import {Pagination, Typography} from "antd";
import IPost from "../../../models/IPost";

interface PostListProps {
    posts: Array<IPost>
    page: number
    limit: number
    handleSwitchPage: (page: number) => void
    handleSwitchLimit: (limit: number) => void
}

const PostList: FC<PostListProps> = ({posts, page, limit, handleSwitchPage, handleSwitchLimit}) => {

    const nodes = posts ? posts.map((post) => {
        return <li key={post.id}>
            <PostItem post={post}/>
        </li>
    }) : []


    return (
        <div style={{paddingBottom: "2rem"}}>
            {posts.length === 0 && <Typography.Paragraph>No posts</Typography.Paragraph>}
            <ul>
                {nodes}
            </ul>
            <Pagination current={page} total={100} pageSize={limit}
                        onChange={(page) => {
                            handleSwitchPage(page)
                        }}
                        onShowSizeChange={(current, size) => {
                            handleSwitchLimit(size)
                        }}
            />
        </div>
    );
};

export default PostList