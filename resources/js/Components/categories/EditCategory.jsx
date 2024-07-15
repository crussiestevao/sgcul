import { Form, Input, message, Modal, Skeleton } from 'antd';
import { useEffect, useRef, useState } from 'react';

import { Button } from 'antd';
import { FaArrowLeft, FaSave } from "react-icons/fa";
import axios from 'axios';

export default function EditCategory({ openEdit, setOpenEdit, selectedUser, props, setSelectedUser, setDataSource }) {

    const formRef2 = useRef(null);
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(false);

    const t = (text) => {
        return text;
    }

    const saveCategory = async (data) => {

        await axios.post(route('categorie.add.new'), data).then((res) => {
            setDataSource(res.data.categories);
            formRef2.current.resetFields();
            message.success('Categoria com sucesso');
        }).catch((err) => {

        });
    }

    useEffect(() => {

        if (openEdit === true) {
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
                loading ? <Skeleton active /> :
                    <div>
                        <Form className='mx-8 px-lg-4 py-4' layout='vertical' ref={formRef2} onFinish={saveCategory}>
                            <Form.Item label="Nome" name={'name'} rules={[{
                                required: true,
                                message: 'Indique um nome valido'
                            }]}>
                                <Input allowClear name='name' placeholder='Um nome valido' />
                            </Form.Item>
                            <Form.Item label="Descricao" name={'descriptions'}>
                                <Input.TextArea allowClear />
                            </Form.Item>
                        </Form>
                        <Form.Item>
                            <div className='flex justify-between px-8 py-4'>
                                <Button icon={<FaArrowLeft />} onClick={() => {
                                    setOpen(false)
                                }}>
                                    Fechar
                                </Button>
                                <Button icon={<FaSave />} className='bg-green-400 text-white'
                                    onClick={() => {
                                        formRef2.current.submit()
                                    }}>
                                    Salvar & Adiconar
                                </Button>
                            </div>
                        </Form.Item>
                    </div>
            }
        </Modal>
    </>)

}