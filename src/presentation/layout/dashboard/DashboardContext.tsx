import { createContext, ReactNode, useContext, useState } from 'react'
import { MENU_ORIENTATION } from '../../utils/constants.ts'

type DashboardContextType = {
    isOpenDrawer: boolean
    toggleDrawer: () => void
    menuOrientation: string,
    changeMenuOrientation: (orientation: string) => void
}

export const DashboardContext = createContext<DashboardContextType | undefined>(
    undefined
)

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [menuOrientation, setMenuOrientation] = useState<string>(MENU_ORIENTATION)

    const changeMenuOrientation = (orientation : string) => {
        setMenuOrientation(orientation);
    };

    const toggleDrawer = () => {
        setIsOpenDrawer((prevState) => !prevState);
    };

    return (
        <DashboardContext.Provider value={{ isOpenDrawer, toggleDrawer, menuOrientation, changeMenuOrientation }}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = (): DashboardContextType => {
    const context = useContext(DashboardContext)
    if (!context) {
        throw new Error(
            'useDashboardContext must be used within a DashboardProvider'
        )
    }
    return context
}
