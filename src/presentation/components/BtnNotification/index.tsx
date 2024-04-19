import { Badge, Button, Tooltip } from 'antd'
import { AlertFilled } from '@ant-design/icons'

const Index = () => {
    return (
        <Tooltip placement="bottom" title="Open Notification">
            <Badge count={5}>
                <Button
                    ghost
                    icon={<AlertFilled/>}
                />
            </Badge>
        </Tooltip>
    )
}

export default Index