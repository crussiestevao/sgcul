import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Col, Form, Input, Row, Select, Table } from 'antd';
import axios from 'axios';
import { useRef, useState } from 'react';
import { FaAddressCard } from 'react-icons/fa';


export default function NewOrder(props) {

    const [items, setItems] = useState([]);
    const [details, setDetails] = useState()
    const [products, setProducts] = useState(props.products);
    const formRef1 = useRef(null);
    const formRef2 = useRef(null);

    const delay = ms => new Promise(() => {
        return resolve => setTimeout(resolve, ms);
    })

    const addItem = (data) => {
        const selected = props.products.find(item => item.id === data.product);

        data['code'] = selected.code;
        data['name'] = selected.name;
        data['id'] = selected.id;
        setItems([
            ...items,
            data
        ]);
        formRef2.current.resetFields();
        formRef1.current.submit(); // submit details
        setProducts(props.products)
    }

    const getOrderDetails = (data) => {
        setDetails(data);
    }

    const saveOrder = async () => {
        formRef1.current.submit(); // submit details
        delay(300);
        details['items'] = items;
        axios.post(route('order.add.new'), details).then((response) => {

        }).catch((err)=>{

        });
    }

    return (<>
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Nova Requisição'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Nova Requisição</h2>}
        >
            <Head title="Nova Requisição" />

            <Form layout='vertical' className='shadow p-4 bg-white' ref={formRef1} onFinish={getOrderDetails}>
                <Form.Item label="Codigo da requisicao" name={'code'}>
                    <Input placeholder='Opcional' allowClear />
                </Form.Item>

                <Form.Item label="Motorista" name={'driver'}>
                    <Input placeholder='Motorista' allowClear />
                </Form.Item>
                <Form.Item label="Matricula" name={'registration'}>
                    <Input placeholder='Viatura' allowClear />
                </Form.Item>
                <Form.Item label="Estação" name={'station'} rules={[{ required: true, message: 'Selecione uma estação ' }]}>
                    <Select placeholder="Estação" showSearch optionFilterProp='children'>
                        {
                            props.stations?.map((item, index) => (
                                <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
            </Form>

            <div className='shadow-lg bg-white mt-4 p-4'>
                <Form layout='vertical' ref={formRef2} onFinish={addItem}>
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
                                <Input placeholder='Quantidade' allowClear minLength={1} min={1} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label=" ">
                                <Button className='flex gap-1 bg-red-400 text-white' onClick={() => formRef2.current.submit()}>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                    Adicionr Item

                                </Button>

                            </Form.Item>

                        </Col>

                        <Col>
                            <Form.Item label=" ">
                                <Button className='flex gap-1 bg-green-400 text-white' disabled={items.length > 0 ? false : true}
                                    onClick={() => saveOrder()}>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                                    </svg>


                                    Emitir a requisição

                                </Button>

                            </Form.Item>
                        </Col>

                    </Row>
                </Form>

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


        </AuthenticatedLayout>
    </>)
}