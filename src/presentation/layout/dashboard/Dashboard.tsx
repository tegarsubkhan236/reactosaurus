import {Layout} from 'antd'
import {Outlet} from "react-router-dom";
import { DashboardProvider } from './DashboardContext.tsx'
import IHeader from './IHeader.tsx'
import ISider from './ISider.tsx'

const {Content} = Layout

const Dashboard = () => {
    return (
        <DashboardProvider>
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
        </DashboardProvider>
    )
}

export default Dashboard
