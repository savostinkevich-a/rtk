import React, {FC, useState} from 'react';
import {useParams} from "react-router-dom";
import PostList from "./PostList";
import {useGetPostListQuery} from "../../../services/PostService";
import {Typography} from "antd";

interface PostListContainerProps {
    current: number
    size: number
}

const PostListContainer: FC<PostListContainerProps> = ({current, size}) => {

    const [page, setPage] = useState<number>(current)
    const [limit, setLimit] = useState<number>(size)

    const {data: posts, error, isLoading} = useGetPostListQuery({limit: limit, page: page})

    return (
        <>
            {error && <Typography.Title>Error occurred...</Typography.Title>}
            {isLoading && <Typography.Title>Loading...</Typography.Title>}
            {
                !error && !isLoading &&
                <>
                    <Typography.Title>Posts</Typography.Title>
                    <PostList posts={posts || []} page={page}
                              limit={limit} handleSwitchLimit={setLimit}
                              handleSwitchPage={setPage}/>
                </>
            }
        </>

    );
};

export default PostListContainer;