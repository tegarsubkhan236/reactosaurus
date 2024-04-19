import { createBrowserRouter } from 'react-router-dom'
import { default as DashboardLayout } from '../layout/dashboard/Dashboard.tsx'
import Dashboard from '../pages/Dashboard/Dashboard.tsx'
import Samples from '../pages/Samples/Samples.tsx'
import Settings from '../pages/Settings/Settings.tsx'

export const IRoutes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/samples',
                element: <Samples/>
            },
            {
                path: '/settings',
                element: <Settings/>
            },
        ]
    },
])