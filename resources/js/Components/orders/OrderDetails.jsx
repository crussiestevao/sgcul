import { Button, Col, Form, Input, Row, Select, Table, Modal, Skeleton, Descriptions } from 'antd';
import { useEffect, useRef, useState } from 'react';


export default function OrderDetails({ open, setOpen, order = {} }) {

    const formRef1 = useRef(null);
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false)

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );



    useEffect(() => {
        if (open === true) {
            setLoad(true);
            delay(700).then(() => {
                setItems(order?.items)
                setLoad(false)
            })
        }
    }, [open])

    return (<>
        <Modal open={open} onCancel={() => setOpen(false)} title="Visao Detalhada" width={1200} footer={null}>
            {
                load ? <Skeleton active /> :

                    (<>

                        <Descriptions bordered className='mb-4 shadow font-bold'>
                            <Descriptions.Item label="Data de Emissao: ">{order?.created_at}</Descriptions.Item>
                            <Descriptions.Item label="Data de Validacao: ">{order?.validated_at}</Descriptions.Item>
                            <Descriptions.Item label="Emitido por: ">{order?.registration}</Descriptions.Item>
                        </Descriptions>

                        <Descriptions bordered className='mb-4 shadow font-bold'>
                            <Descriptions.Item label="Codigo: ">{order?.code}</Descriptions.Item>
                            <Descriptions.Item label="Motorista: ">{order?.driver}</Descriptions.Item>
                            <Descriptions.Item label="Matricula: ">{order?.registration}</Descriptions.Item>
                            <Descriptions.Item label="Estacao de Servico: ">{order?.station}</Descriptions.Item>
                        </Descriptions>
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
                                key: 'Preco',
                                title: 'Preco',
                                dataIndex: 'price',
                            }
                        ]} />


                    </>)
            }

        </Modal>
    </>)
}