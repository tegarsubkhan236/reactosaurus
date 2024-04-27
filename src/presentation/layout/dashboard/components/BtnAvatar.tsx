import Icon from "@ant-design/icons";
import profileSvg from "../assets/profil.svg";
import {Button, Card, Flex, GetProps, Popover, Typography} from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const BtnAvatar = () => {
    const ProfileIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={() => <img src={profileSvg} alt="profileSvg"/>} {...props} />);

    const content = (
        <Flex vertical>
        <Card bordered={false}>
            <Button type="text">
                <Flex gap='small'>
                    <ProfileIcon/>
                    <Typography.Text>
                        Tegar Subkhan Fauzi
                    </Typography.Text>
                </Flex>
            </Button>
        </Card>
            <Button type="text">
                <Flex gap='small'>
                    <ProfileIcon/>
                    <Typography.Text>
                        Tegar Subkhan Fauzi
                    </Typography.Text>
                </Flex>
            </Button>
        </Flex>
    );

    return (
        <Popover content={content} trigger="click">
            <Button type="text">
                <Flex gap='small'>
                    <ProfileIcon/>
                    <Typography.Text
                        style={{
                            color: 'white'
                        }}
                    >
                        Tegar Subkhan Fauzi
                    </Typography.Text>
                </Flex>
            </Button>
        </Popover>
    );
};

export default BtnAvatar;