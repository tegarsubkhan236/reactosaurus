import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { IRoutes } from './routes/IRoutes.tsx'
import { themeConfig } from './theme/lightTheme.ts'
import { AppProvider } from './AppContext.tsx'

const App = () => {
    return (
        <AppProvider>
            <ConfigProvider theme={themeConfig}>
                <RouterProvider router={IRoutes} />
            </ConfigProvider>
        </AppProvider>
    )
}

export default App
