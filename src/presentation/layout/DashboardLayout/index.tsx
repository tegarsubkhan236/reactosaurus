import MainLayout from "../MainLayout.tsx";
import ISider from "../_partials/ISider.tsx";
import {Layout} from "antd";
import {Outlet} from "react-router-dom";

const {Content} = Layout

const Index = () => {
    return (
        <MainLayout>
            <Layout hasSider>
                <ISider />
                <Layout>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </MainLayout>
    );
};

export default Index;