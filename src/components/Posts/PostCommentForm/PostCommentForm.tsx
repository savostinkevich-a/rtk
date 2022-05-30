import React from 'react';
import {Button, Card, Form, Input, Typography} from "antd";

const PostCommentForm = () => {
    return (
        <Card hoverable>
            <Typography.Title level={2}>New comment</Typography.Title>
            <Form
                layout={"vertical"}
            >
                <Form.Item
                    label={"Username"}
                    name={"username"}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Email"}
                    name={"email"}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Comment"}
                    name={"comment"}
                >
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={"submit"} type="primary">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    );
};

export default PostCommentForm;