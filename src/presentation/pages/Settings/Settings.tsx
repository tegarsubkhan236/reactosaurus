import { Card, Flex, Form, Radio, Select, Typography } from 'antd'
import './Setting.css'
import { useDashboardContext } from '../../layout/dashboard/DashboardContext.tsx'

const { Text } = Typography
const Settings = () => {
    const { menuOrientation, changeMenuOrientation } = useDashboardContext()

    return (
        <Card title="My Theme">
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
                layout="horizontal"
            >
                <Form.Item label="Theme" name="theme" initialValue={1}>
                    <Radio.Group
                        onChange={(e) => console.log(e.target.value)}
                        className="radio-custom"
                    >
                        <Radio value={1}>
                            <Flex vertical align="center" gap="middle">
                                <img
                                    src="https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg"
                                    alt="default"
                                />
                                <Text> Default </Text>
                            </Flex>
                        </Radio>
                        <Radio value={2}>
                            <Flex vertical align="center" gap="middle">
                                <img
                                    src="https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg"
                                    alt="dark"
                                />
                                <Text> Dark </Text>
                            </Flex>
                        </Radio>
                        <Radio value={3}>
                            <Flex vertical align="center" gap="middle">
                                <img
                                    src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original"
                                    alt="custom"
                                />
                                <Text> User Preferences </Text>
                            </Flex>
                        </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Menu Orientation"
                    name="menu_orientation"
                    initialValue={menuOrientation}
                >
                    <Select
                        style={{ width: 120 }}
                        onChange={(value) => changeMenuOrientation(value)}
                        options={[
                            { value: 'left', label: 'Left' },
                            { value: 'top', label: 'Top' },
                        ]}
                    />
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Settings
