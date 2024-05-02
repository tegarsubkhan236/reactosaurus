import AuthLayout from "../../layout/AuthLayout";
import Logo from '../../assets/img/ziromart_logo.svg'
import GoogleSVG from '../../assets/icon/google.svg'
import {Button, Card, Form, Input, Typography} from "antd";
import Icon from "@ant-design/icons";

const {Text, Title} = Typography

const GoogleIcon = () => <Icon
    component={() => (<img src={GoogleSVG} alt={"googleIcon"} height={24} width={24} style={{marginBottom: 5}}/>)}/>

const Login = () => {
    return (
        <AuthLayout>
            <Card>
                <img src={Logo} alt="logo" height={60} width={60}/>
                <Title level={3}>Login to your Account</Title>
                <Text>See what is going on with your business</Text>
                <Form
                    // onFinish={(values) => handleLogin(values)}
                    // onFinishFailed={(errorInfo) => handleLoginFailed(errorInfo)}
                    autoComplete="off"
                    style={{paddingTop: "20px"}}
                >
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            // loading={isLoading}
                            block
                            size="large"
                            icon={<GoogleIcon/>}
                        >
                            Continue with Google
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Text
                            type="secondary"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            Or continue with
                        </Text>
                    </Form.Item>
                    <Form.Item
                        name="identity"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username or email!",
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Email / Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password size="large" placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Text
                            type="secondary"
                            style={{
                                display: "flex",
                                justifyContent: "end",
                            }}
                        >
                            Forgot Password ?
                        </Text>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            // loading={isLoading}
                            block
                            size="large"
                            style={{
                                boxShadow: "0 4px 20px 0px rgba(77,71,195,0.75)",
                            }}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </AuthLayout>
    );
};

export default Login;