import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import MainLayout from "../MainLayout.tsx";

const {Content} = Layout

const Index = () => {
    return (
        <MainLayout>
            <Layout>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </MainLayout>
    );
};

export default Index;