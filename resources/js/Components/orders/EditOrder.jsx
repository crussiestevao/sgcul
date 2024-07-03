import { Button, Col, Form, Input, Row, Select, Table, Modal, Skeleton, message } from 'antd';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';


export default function EditOrder({ open, setOpen, stations = [], products = [], order = {}, setDataSource }) {

    const formRef1 = useRef(null);
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false)

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const addItem = () => {

        const data = formRef1.current.getFieldsValue();
 
         const selected = products.find(item => item.id === data.product);
 
         data['code'] = selected.code;
         data['name'] = selected.name;
         data['id'] = selected.id;
         setItems([
             ...items,
             data
         ]);
     }

    useEffect(() => {
        if (open===true) {
            setLoad(true);
            delay(700).then(() => {
                setItems(order?.items)
                setLoad(false)
            })
        }
    }, [open]);

    const update = async (data) =>{

        data['items'] = items;
        data['id'] = order.id;

        const station = stations.find(item => item.id===data.station || item.name===data.station);

        data['station'] = station.id;

       
        await axios.post(route('order.update'), data).then((res)=>{
                message.success('Requisiacao Actualizada');
                setDataSource(res.data.data)
        }).then(()=>{

        })
    }


    return (<>
        <Modal open={open} onCancel={() =>setOpen(false)} title="Editar Requisicao" width={1000} footer={null}>
            {
                load ? <Skeleton active /> :

                    (<>

                        <Form layout='vertical' ref={formRef1} initialValues={order} onFinish={update}>
                            <div className='shadow p-4 bg-white'>
                                <div className='flex gap-1'>
                                    <Form.Item label="Codigo da requisicao (Opcional)"  name={'code'} className='w-1/2'>
                                        <Input placeholder='Opcional' allowClear readOnly/>
                                    </Form.Item>

                                    <Form.Item className='w-1/2' label="Motorista" name={'driver'} rules={[{ required: true, message: 'Indique o motorista' }]}>
                                        <Input placeholder='Motorista' allowClear />
                                    </Form.Item>
                                </div>
                                <div className='flex gap-1'>
                                    <Form.Item className='w-1/2' label="Matricula" name={'registration'} rules={[{ required: true, message: 'Indique a matricula' }]}>
                                        <Input placeholder='Viatura' allowClear />
                                    </Form.Item>
                                    <Form.Item className='w-1/2' label="Estação" name={'station'} rules={[{ required: true, message: 'Selecione uma estação ' }]}>
                                        <Select placeholder="Estação" showSearch optionFilterProp='children' allowClear>
                                            {
                                                stations?.map((item, index) => (
                                                    <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
                                                ))
                                            }
                                        </Select>
                                    </Form.Item>
                                </div>

                                <Form.Item label="Observação (Nota)" name={'notes'}>
                                    <Input.TextArea placeholder='Observação' allowClear />
                                </Form.Item>
                            </div>
                            <div className='shadow p-4 bg-white mt-4'>
                                <Row gutter={12}>
                                    <Col xs={10}>
                                        <Form.Item label="Productos" name={'product'}>
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

                                        <Form.Item label="Quantidade" name={'quantity'}>
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
                                <Button className='flex gap-1 bg-green-400 text-white mb-4' disabled={items?.length > 0 ? false : true}
                                    onClick={() => formRef1.current.submit()}>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                                    </svg>


                                    Actualizar

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

                    </>)
            }

        </Modal>
    </>)
}