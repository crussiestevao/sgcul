import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Col, Form, Input, Row, Select, Table } from 'antd';
import { FaAddressCard } from 'react-icons/fa';


export default function NewOrder(props) {

    return (<>
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Nova Requisição'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Nova Requisição</h2>}
        >
            <Head title="Nova Requisição" />

            <Form layout='vertical' className='shadow p-4 bg-white'>
                <Form.Item label="Codigo da requisicao" name={'code'}>
                    <Input placeholder='Opcional' allowClear />
                </Form.Item>

                <Form.Item label="Viatura" name={'car'}>
                    <Input placeholder='Viatura' allowClear />
                </Form.Item>
                <Form.Item label="Matricula" name={'registration'}>
                    <Input placeholder='Viatura' allowClear />
                </Form.Item>
            </Form>

            <div className='shadow-lg bg-white mt-4 p-4'>
                <Form layout='vertical'>
                    <Row gutter={12}>
                        <Col xs={12}>
                            <Form.Item label="Productos" name={'products'}>
                                <Select placeholder="Productos">
                                    <Select.Option></Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={8}>

                            <Form.Item label="Quantidade" name={'car'}>
                                <Input placeholder='Viatura' allowClear />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label=" ">
                                <Button className='flex gap-1 bg-red-400 text-white'>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                    Adicionr Item

                                </Button>
                            </Form.Item>

                        </Col>

                    </Row>
                </Form>

                <Table dataSource={[]} columns={[
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
                    }
                ]} />

            </div>

            <div className='mt-4 p-4 flex justify-between'>
                <p></p>
                <Button className='flex gap-1 bg-green-400 text-white'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                    </svg>


                    Emitir a requisição

                </Button>
            </div>

        </AuthenticatedLayout>
    </>)
}