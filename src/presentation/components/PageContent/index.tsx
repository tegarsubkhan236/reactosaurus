import {CSSProperties, ReactNode} from "react";
import {theme} from "antd";

interface PageContentProps {
    children: ReactNode;
    style?: CSSProperties;
}

const Index = ({children, style} : PageContentProps) => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <div
            style={{
                margin: '20px 24px',
                padding: '24px',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default Index;