import {App, Button, Space, Typography} from "antd";
import PageHeader from "../../components/PageHeader";
import PageContent from "../../components/PageContent";

const Samples = () => {
    const { message, notification, modal } = App.useApp();

    const showMessage = () => {
      message.success('hallo World')
    }

    const showNotification = () => {
        notification.info({
            message : 'hallo world'
        })
    }

    const showModal = () => {
        modal.warning({
            title: 'hallo world'
        })
    }

    return (
        <>
            <PageHeader
                title="Sample"
                extra={
                    <Space>
                        <Button onClick={showModal}>Show Modal</Button>
                        <Button onClick={showNotification}>Show Notification</Button>
                        <Button onClick={showMessage}>Show Message</Button>
                        <Button type="primary">Button</Button>
                    </Space>
                }
                content={
                    <Typography.Text>
                        Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.
                    </Typography.Text>
                }
            />

            <PageContent>
                <h1>Hallo Sample</h1>
            </PageContent>
        </>
    )
}

export default Samples