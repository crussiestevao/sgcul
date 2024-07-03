import { UserOutlined } from '@ant-design/icons';
import { Col, Form, Input, message, Modal, notification, Row, Select, Skeleton } from 'antd';
import { useEffect, useRef, useState } from 'react';

export default function EditUser({ openEdit, setOpenEdit, selectedUser, props, setSelectedUser, setDataSource }) {

    const formRef2 = useRef(null);
    const [saving, setSaving] = useState(false);
    const [loading, setLoading]=useState(false);

    const t = (text) => {
        return text;
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const onCloseAndEdit = async (data) => {
        
        const roles = [];

        data.roles.forEach((role) =>
         {
            const finded =  props.roles.find(item => item.id===role || item.name===role)
            roles.push(finded.id)
         }

        )

        data['roles'] = roles;
        data['id'] = selectedUser.id;
        
        
        setSaving(true);

        await axios.post(route('user.update', data)).then((response) => {
            setSaving(false);
            setDataSource(response.data.data);
            console.log(response.data.data);
            notification.open({
                message: <><p className='text-white'>Parabéns</p></>,
                placement: 'top',
                type: 'success',
                description: <><p className='text-white'>usuário foi actualizado com sucesso</p></>,
                style: { fontSize: '12px', backgroundColor: '#344248', }
            });
        },
        (error) => {
            message.error()
            setSaving(false)
            notification.open({
                message: <><p className='text-white'>Erro</p></>,
                placement: 'top',
                type: 'error',
                description: <><p className='text-white'>{error.response.data.message}</p></>,
                style: { fontSize: '12px', backgroundColor: 'red', }
            });
        }
        )
    }

    useEffect(() => {

        if (openEdit===true) {
            setLoading(true);
            delay(700).then(() => {
                setLoading(false);
            })
        }
    }, [selectedUser])

    return (<>

        <Modal key={'user_edit'} className='bg-red-300 rounded shadow'
            title={<p className=' text-lg font-weight-bold'>⚠️ Editar usuario:  {selectedUser?.name}{loading}</p>}
            open={openEdit}
            onCancel={() => {
                setOpenEdit(false)
                formRef2.current?.resetFields();
                setSelectedUser(null);
            }} width={1000}
            okButtonProps={{ className: 'bg-red-400', loading: saving }} okText="Salvar alterações"
            styles={{ body: { backgroundColor: '#f1f5f9', padding: 20 } }}
            onOk={() => formRef2.current.submit()}
        >
            {
                loading? <Skeleton active /> :
                    <Form ref={formRef2} onFinish={onCloseAndEdit} layout="vertical" initialValues={selectedUser}>
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
                                <Form.Item name="roles" label={'Atribuir nova Função'}
                                    rules={[
                                        {
                                            required: true
                                        }
                                    ]}
                                >
                                    <Select allowClear showSearch placeholder="indique a nova função " mode='multiple' optionFilterProp='children'>
                                        {
                                            props.roles?.map((item, index) => (
                                                <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
                                            ))
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='w-full'>
                                <Form.Item name="password" label={'Nova Senha'}>
                                    <Input.Password min={8} maxLength={8} name='password' placeholder='default: nome@123' allowClear showCount />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
            }
        </Modal>
    </>)

}