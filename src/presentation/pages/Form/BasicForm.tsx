import {Button, Form, FormProps, Input, Typography} from "antd";
import PageHeader from "../../components/PageHeader";
import PageContent from "../../components/PageContent";

const BasicForm = () => {
    type FieldType = {
        username?: string;
        password?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <>
            <PageHeader
                title="Basic Form"
                content={
                    <Typography.Text>
                        Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.
                    </Typography.Text>
                }
                style={{ position: 'sticky', top: 0, zIndex: 10 }}
            />
            <PageContent>
                <Form
                    name="basic"
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 15 }}
                    style={{ maxWidth: 800 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </PageContent>
        </>
    );
};

export default BasicForm;