import { Layout } from 'antd'
import IHeader from './components/IHeader.tsx'
import { DashboardProvider } from './DashboardContext.tsx'
import IDrawer from './components/IDrawer.tsx'
import IContent from './components/IContent.tsx'
import ISider from './components/ISider.tsx'

const Dashboard = () => {
    return (
        <DashboardProvider>
            <Layout>
                <IHeader />
                <Layout>
                    <ISider />
                    <Layout style={{ padding: '24px' }}>
                        <IContent />
                    </Layout>
                </Layout>
            </Layout>
            <IDrawer />
        </DashboardProvider>
    )
}

export default Dashboard
