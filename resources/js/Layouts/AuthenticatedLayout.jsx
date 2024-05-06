import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { router, useForm } from '@inertiajs/react';
const { Header, Sider, Content } = Layout;

const AuthenticatedLayout = ({ children, user, header, page }) => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const { get } = useForm();

    const navegateTo = (e) => {

        switch (e.key) {

            case '1':
                return router.get(route('dashboard'));
                break;
            case '2':
                return router.get(route('user.create'));
                break;

            default:
                break;
        }
    }

    return (
        <div style={{ height: '100vh' }}>
            <Layout style={{ height: '100%' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className='p-4 text-2xl text-white font-bold uppercase'>
                        sgcul
                    </div>
                    <Menu
                        className='mt-12'
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={()=>{
                         return  route().current('user.create')? ['2'] : ["1"];
                        }}
                        onClick={navegateTo}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Dashboard'
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'Usuários',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>

                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            //   background: colorBgContainer,
                            //   borderRadius: borderRadiusLG,
                        }}
                    >

                        <div className='flex justify-between'>
                            <Breadcrumb
                                style={{
                                    margin: '16px 0',
                                }}
                            >
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>{page}</Breadcrumb.Item>
               
                            </Breadcrumb>

                            <p>{header}</p>
                        </div>

                        {children}
                       
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AuthenticatedLayout;
