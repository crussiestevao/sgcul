import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Col, Form, Input, Row, Select, Table, Modal, Flex, Spin, Space, notification } from 'antd';
import axios from 'axios';
import { useRef, useState } from 'react';
import { FaAddressCard } from 'react-icons/fa';
import { ExclamationCircleOutlined } from '@ant-design/icons';


export default function NewOrder(props) {

    const [items, setItems] = useState([]);
    const [details, setDetails] = useState()
    const [products, setProducts] = useState(props.products);
    const formRef1 = useRef(null);

    const [saving, setSaving] = useState(false);

    const delay = ms => new Promise(() => {
        return resolve => setTimeout(resolve, ms);
    })

    const addItem = () => {

       const data = formRef1.current.getFieldsValue();

        const selected = props.products.find(item => item.id === data.product);

        data['code'] = selected.code;
        data['name'] = selected.name;
        data['id'] = selected.id;
        setItems([
            ...items,
            data
        ]);

        setProducts(props.products)
    }


    const saveOrder = async (data) => {

        setSaving(true);
        delay(300);

        data['items'] = items;

        axios.post(route('order.add.new'), data).then((response) => {
            formRef1.current.resetFields();
            setSaving(false);
            setItems([]);
            notification.open({
                message:'Emitido',
                type:'success',
                description:'Aguarde a impressao'
            })
            window.open(route('order.print', response.data.id), '_blank', 'width=800,height=500,top=200,left=200')
        }).catch((err) => {
            setSaving(false);
        });
    }

    return (<>
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Nova Requisição'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Nova Requisição</h2>}
        >
            <Head title="Nova Requisição" />

            <Form layout='vertical' ref={formRef1} onFinish={saveOrder}>
                <p className='font-bold text-lg mb-4'>* Detalhes da Req</p>
                <div className='shadow p-4 bg-white'>
                    <Form.Item label="Codigo da requisicao (Opcional)" name={'code'}>
                        <Input placeholder='Opcional' allowClear />
                    </Form.Item>

                    <Form.Item label="Motorista" name={'driver'} rules={[{ required: true, message: 'Indique o motorista' }]}>
                        <Input placeholder='Motorista' allowClear />
                    </Form.Item>
                    <Form.Item label="Matricula" name={'registration'} rules={[{ required: true, message: 'Indique a matricula' }]}>
                        <Input placeholder='Viatura' allowClear />
                    </Form.Item>
                    <Form.Item label="Estação" name={'station'} rules={[{ required: true, message: 'Selecione uma estação ' }]}>
                        <Select placeholder="Estação" showSearch optionFilterProp='children' allowClear>
                            {
                                props.stations?.map((item, index) => (
                                    <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="Observação (Nota)" name={'notes'}>
                        <Input.TextArea placeholder='Observação' allowClear />
                    </Form.Item>
                </div>
                <p className='font-bold text-lg mb-4 mt-4'>* Adicione Productos</p>
                <div className='shadow p-4 bg-white mt-4'>
                    <Row gutter={12}>
                        <Col xs={10}>
                            <Form.Item label="Productos" name={'product'} rules={[{ required: true, message: 'Selecione um producto' }]}>
                                <Select placeholder="Productos" showSearch optionFilterProp='children'>
                                    {
                                        products.map((item, index) => (
                                            <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={8}>

                            <Form.Item label="Quantidade" name={'quantity'} rules={[{ required: true, message: 'indique quantidade' }]}>
                                <Input type='number' placeholder='Quantidade' allowClear minLength={1} min={1} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label=" ">
                                <Button className='flex gap-1 bg-red-400 text-white' onClick={() => addItem()}>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                    Adicionr Item

                                </Button>

                            </Form.Item>

                        </Col>

                    </Row>
                </div>
            </Form>

            <div className='shadow-lg bg-white mt-4 p-4'>
                <div className='flex justify-between'>
                    <p></p>
                    <Button className='flex gap-1 bg-green-400 text-white mb-4' disabled={items.length > 0 ? false : true}
                        onClick={() => formRef1.current.submit()}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                        </svg>


                        Emitir a requisição

                    </Button>
                </div>
                <Table dataSource={items} columns={[
                    {
                        key: 'code',
                        dataIndex: 'code',
                        title: 'Codigo'
                    },
                    {
                        key: 'name',
                        dataIndex: 'name',
                        title: 'Producto'
                    },
                    {
                        key: 'qty',
                        dataIndex: 'quantity',
                        title: 'Quantidade'
                    },
                    {
                        key: 'remove',
                        title: 'Opcoes',
                        render: (item) => (
                            <>
                                <Button color='red' onClick={() => {
                                    const newdata = items.filter(row => row.id != item.id);
                                    setItems(newdata);
                                }}>Remover</Button>
                            </>
                        )
                    }
                ]} />
            </div>

            <Modal open={saving} footer={null}>
                <Flex align="center" gap="middle">
                    <p className="font-bold text-2xl">Aguarde....</p>
                    <Space />
                    <Spin size="large" />
                </Flex>
            </Modal>

        </AuthenticatedLayout>
    </>)
}