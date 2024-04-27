import {Col, Layout, Row} from 'antd'
import BtnFullscreen from './components/BtnFullscreen.tsx'
import BtnNotification from './components/BtnNotification.tsx'
import BtnAvatar from "./components/BtnAvatar.tsx";
import BtnLanguage from "./components/BtnLanguage.tsx";
import HeaderLogo from "./components/HeaderLogo.tsx";

const {Header} = Layout

const IHeader = () => {
    return (
        <Header style={{
            height: '48px',
            background: '#001529',
            padding: '0 16px',
            boxShadow: '0px -1px 0px 0px rgba(240,240,240,1) inset'
        }}>
            <Row justify="space-between">
                <Col
                    span={4}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '8px'
                    }}
                >
                    <HeaderLogo/>
                </Col>
                <Col
                    span={8}
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-end'
                    }}
                >
                    <BtnNotification/>
                    <BtnAvatar/>
                    <BtnFullscreen/>
                    <BtnLanguage/>
                </Col>
            </Row>
        </Header>
    )
}

export default IHeader
