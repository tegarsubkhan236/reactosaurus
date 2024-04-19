import { Drawer } from 'antd'
import { useDashboardContext } from '../DashboardContext.tsx'

const IDrawer = () => {
    const { isOpenDrawer, toggleDrawer } = useDashboardContext()

    return (
        <Drawer
            title="Basic Drawer"
            onClose={toggleDrawer}
            open={isOpenDrawer}
            width={320}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

export default IDrawer