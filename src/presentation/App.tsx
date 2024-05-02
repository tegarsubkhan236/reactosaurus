import {App as AntdApp, ConfigProvider} from 'antd'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/route.tsx'
import { themeConfig } from './theme/lightTheme.ts'
import { AppProvider } from './AppContext.tsx'

const App = () => {
    return (
        <AppProvider>
            <ConfigProvider theme={themeConfig}>
                <AntdApp>
                    <RouterProvider router={router} />
                </AntdApp>
            </ConfigProvider>
        </AppProvider>
    )
}

export default App
