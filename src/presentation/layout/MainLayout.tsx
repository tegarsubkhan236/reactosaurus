import {ReactNode} from "react";
import {Layout} from 'antd'
import IHeader from './_partials/IHeader.tsx'

interface MainProps {
    children: ReactNode;
}

const MainLayout = ({children} : MainProps) => {
    return (
        <Layout>
            <IHeader />
            {children}
        </Layout>
    )
}

export default MainLayout
