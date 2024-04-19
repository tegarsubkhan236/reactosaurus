import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'

const { Content } = Layout

const IContent = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            <Outlet />
        </Content>
    )
}

export default IContent