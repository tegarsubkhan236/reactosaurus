import { createBrowserRouter } from 'react-router-dom'
import { default as DashboardLayout } from '../layout/dashboard/Dashboard.tsx'
import AnalysisDashboard from "../pages/Dashboard/AnalysisDashboard.tsx";
import BasicForm from "../pages/Form/BasicForm.tsx";
import StepForm from "../pages/Form/StepForm.tsx";
import AdvancedForm from "../pages/Form/AdvancedForm.tsx";
import SearchTable from "../pages/List/SearchTable.tsx";
import SearchListProjects from "../pages/List/SearchListProjects.tsx";
import SearchListArticles from "../pages/List/SearchListArticles.tsx";
import Login from "../pages/Auth/Login.tsx";
import Register from "../pages/Auth/Register.tsx";

export const IRoutes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <AnalysisDashboard/>,
            },
            {
                path: 'form',
                children: [
                    {
                        path: 'basic_form',
                        element: <BasicForm/>
                    },
                    {
                        path: 'step_form',
                        element: <StepForm/>
                    },
                    {
                        path: 'advanced_form',
                        element: <AdvancedForm/>
                    }
                ]
            },
            {
                path: 'list',
                children: [
                    {
                        path: 'search_table',
                        element: <SearchTable/>
                    },
                    {
                        path: 'search_list_projects',
                        element: <SearchListProjects/>
                    },
                    {
                        path: 'search_list_articles',
                        element: <SearchListArticles/>
                    }
                ]
            },
        ]
    },
    {
        path: '/auth',
        element: <DashboardLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
        ]
    }
])