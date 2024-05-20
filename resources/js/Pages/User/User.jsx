import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { UserOutlined } from '@ant-design/icons';
import { Head } from '@inertiajs/react';
import { Button, Col, Form, Input, Modal, notification, Row, Select, Space, Table } from 'antd';
import { useRef, useState } from 'react';

export default function User(props) {

    const t = (text) => {
        return text;
    }

    const [users, setUsers] = useState(props.users);
    const [openCreation, setOpenCreation] = useState(false);

    const [saving, setSaving] = useState(false);

    const formRef = useRef(null);

    const onCloseAndSave = async (data) => {

        setSaving(true);

        await axios.post(route('user.store', data)).then((response) => {
            setSaving(false);
            formRef.current.resetFields();
            setUsers(response.data.users);
            notification.open({
                message: <><p className='text-white'>Parabéns</p></>,
                placement:'top',
                type: 'success',
                description: <><p className='text-white'>Um novo usuário foi criado com sucesso</p></>,
                style: { fontSize: '12px', backgroundColor: '#344248', }
            });
        }
        ).catch((error) => {
            console.log(error.message)
            setSaving(false)
            formRef.current.resetFields();
        });
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>👤 {text}</a>,
        },
        {
            title: 'Nivel de acesso',
            dataIndex: 'age',
            key: 'age',
            render: (text) => <a>Aqui ficara o nivel de acesso</a>,
        },
        {
            title: 'Data de criacao',
            dataIndex: 'created_at',
            key: 'created_at',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle" className='flex gap-1'>
                    <Button type="primary">🖌️Editar</Button>
                    <Button type="primary" className='bg-red-400'>🗑️ Apagar</Button>
                </Space>
            ),
        },
    ];


    return (
        <AuthenticatedLayout
            user={props.auth.user}
            page={'lista de usuarios'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Listas de Usuario</h2>}
        >
            <Head title="Lista de Usuarios" />


            <div className='flex justify-between'>
                <p></p>
                <Button type="primary" onClick={() => setOpenCreation(true)}> + Registrar Novo usuario</Button>
            </div>

            <div className='mt-4'>
                <Table columns={columns} dataSource={users} />
            </div>

            <Modal className='bg-slate-100 rounded shadow' title="Criação de usuários e acessos" open={openCreation} onCancel={() => setOpenCreation(false)} width={1000}
                okButtonProps={{ className:'bg-red-400' }} okText="🎴 Salvar novo usuário"
                styles={{ body:{ backgroundColor:'#f1f5f9', padding:20} }}
                onOk={()=>formRef.current.submit()}
            >
                <Form ref={formRef} onFinish={onCloseAndSave} layout="vertical">
                    <Row gutter={16} className='mt-4'>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label={t('Nome do Tecnico')}
                                rules={[
                                    {
                                        type: 'string',
                                        required: true,
                                        message: t('Ensira o nome do tecnico'),
                                    },
                                ]}
                            >
                                <Input style={{
                                    width: '100%',
                                }} placeholder={t('Ensira um nome')} allowClear size='middle'
                                    prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: t('Por favor ensira um email'),
                                        required: true
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder={t('ensira um email')}
                                    allowClear

                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='w-full'>
                            <Form.Item name="roles" label={'Função'}
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Select allowClear showSearch placeholder="indique a função " mode='multiple' optionFilterProp='children'>
                                    {
                                        props.roles?.map((item, index) => (
                                            <Option key={index} value={item.id}>{item.name}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='w-full'>
                            <Form.Item name="password" label={'Senha'}>
                                <Input.Password min={8} maxLength={8} name='password' placeholder='default: nome@123' allowClear showCount />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>

        </AuthenticatedLayout>
    );
}
