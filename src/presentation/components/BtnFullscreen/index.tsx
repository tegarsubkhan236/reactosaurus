import { useEffect, useState } from 'react'
import screenfull from 'screenfull'
import { Button, message, Tooltip } from 'antd'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'

const Index = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const [isFullscreen, setIsFullscreen] = useState(false)
    const click = () => {
        if (!screenfull.isEnabled) {
            messageApi.warning('you browser can not work')
            return false
        }
        screenfull.toggle()
    }
    const change = () => {
        setIsFullscreen(screenfull.isFullscreen)
    }
    useEffect(() => {
        screenfull.isEnabled && screenfull.on('change', change)
        return () => {
            screenfull.isEnabled && screenfull.off('change', change)
        }
    }, [])

    const title = isFullscreen ? 'Exit FullScreen' : 'Open FullScreen'

    return (
        <>
            {contextHolder}
            <Tooltip placement="bottom" title={title}>
                <Button
                    ghost
                    icon={
                        isFullscreen ? (
                            <FullscreenExitOutlined />
                        ) : (
                            <FullscreenOutlined />
                        )
                    }
                    onClick={click}
                />
            </Tooltip>
        </>
    )
}

export default Index
