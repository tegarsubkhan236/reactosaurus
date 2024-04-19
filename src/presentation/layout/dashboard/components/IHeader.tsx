import { Avatar, Col, Flex, Layout, Row, Typography } from 'antd'
import BtnFullscreen from '../../../components/BtnFullscreen'
import { useDashboardContext } from '../DashboardContext.tsx'
import BtnNotification from '../../../components/BtnNotification'

const { Header } = Layout

const IHeader = () => {
    const { toggleDrawer } = useDashboardContext()

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Row justify="space-between" align="middle" style={{ width: '100%' }}>
                <Col span={3}>
                    <Flex
                        align="center"
                        justify="start"
                    >
                        <img
                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                            height="32"
                            width="32"
                            alt="logo"
                            style={{ margin: '0px 12px 0px 0px' }}
                        />
                        <Typography.Title
                            level={4}
                            style={{
                                fontSize: '18px',
                                marginTop: '10px',
                            }}
                        >
                            Ant Design
                        </Typography.Title>
                    </Flex>
                </Col>
                <Col span={9}>
                    <Flex justify="flex-end" align="center" gap="middle">
                        <BtnNotification />
                        <BtnFullscreen />
                        <Avatar
                            onClick={toggleDrawer}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: '#f56a00',
                            }}
                        >
                            K
                        </Avatar>
                    </Flex>
                </Col>
            </Row>
        </Header>
    )
}

export default IHeader
