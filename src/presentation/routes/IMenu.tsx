import { MenuProps } from 'antd'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons'

export const IMenu: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <MailOutlined />,
    },
    {
        label: 'Samples',
        key: 'samples',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Settings',
        key: 'settings',
        icon: <SettingOutlined />,
    },
]
