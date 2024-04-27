import {Typography} from "antd";

const HeaderLogo = () => {
    return (
        <>
            <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                height="32"
                width="32"
                alt="logo"
            />
            <Typography.Text
                style={{
                    fontSize: '18px', lineHeight: '32px', fontWeight: 'bold', color: 'white', padding: '8px 16px 8px 0',
                }}
            >
                Ant Design Pro
            </Typography.Text>
        </>
    );
};

export default HeaderLogo;