import {Layout} from 'antd'
import {Outlet} from "react-router-dom";
import IHeader from './IHeader.tsx'
import ISider from './ISider.tsx'

const {Content} = Layout

const Dashboard = () => {
    return (
        <Layout>
            <IHeader />
            <Layout>
                <ISider />
                <Layout>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard
