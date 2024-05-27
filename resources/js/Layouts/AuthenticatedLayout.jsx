import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { router, useForm } from '@inertiajs/react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
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
            case '3':
                return router.get(route('categorie.create'));
                break;
            case '4':
                return router.get(route('product.create'));
                break;
            case "5":
                return router.get(route('order.create'));
                break;

            default:
                break;
        }
    }

    const logout = async (data) => {
        router.post(route('logout'));
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
                        defaultSelectedKeys={() => {
                            return route().current('user.create') ? ['2'] :
                                route().current('product.create') ? ["4"] :
                                    route().current('order.create') ? ["5"] :
                                        route().current('categorie.create') ? ["3"] :
                                            ['1']
                                ;
                        }}
                        onClick={navegateTo}
                        items={[
                            {
                                key: '1',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                </svg>
                                ,
                                label: 'Dashboard'
                            },
                            {
                                key: '2',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                ,
                                label: 'Usuários',
                            },
                            {
                                key: '3',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                </svg>
                                ,
                                label: 'Categorias',
                            },
                            {
                                key: '4',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                </svg>
                                ,
                                label: 'Produtos',
                            },
                            {
                                key: '5',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                                ,
                                label: 'Requisição',
                            },
                            {
                                key: '6',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                                </svg>
                                ,
                                label: 'Fornecedores'
                            }
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                        className='flex justify-between'
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
                        <div className='pr-8'>
                            <Button onClick={() => logout()}>{
                                user.name
                            }
                            </Button>
                        </div>
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
                                className='cursor-pointer'
                            >
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item onClick={() => router.get(route(route().current()))}>{page}</Breadcrumb.Item>

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
