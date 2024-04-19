import { Layout, Menu, theme } from 'antd'
import { IMenu } from '../../../routes/IMenu.tsx'
import { useDashboardContext } from '../DashboardContext.tsx'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const ISider = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const { menuOrientation } = useDashboardContext()
    const navigate = useNavigate()

    return menuOrientation === 'left' ? (
        <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
                items={IMenu}
                onClick={({key}) => navigate(key)}
            />
        </Sider>
    ) : null
}

export default ISider
