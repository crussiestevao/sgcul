import EditCategory from '@/Components/categories/EditCategory';
import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, Empty, Form, Input, message, notification, Popconfirm, Skeleton, Statistic } from 'antd';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useRef, useState } from 'react';
import { FaArrowLeft, FaBeer, FaEye, FaFolder, FaRegEdit, FaSave } from "react-icons/fa";

export default function Categories(props) {

    const [open, setOpen] = useState(false);
    const [fetching, setFetching] = useState(false);

    const [datasource, setDataSource] = useState(props.categories);

    const formRef = useRef(null);

    //
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState({});
    //

    const saveCategory = async (data) => {

        await axios.post(route('categorie.add.new'), data).then((res) => {
            setDataSource(res.data.categories);
            formRef.current.resetFields();
            message.success('Categoria com sucesso');
        }).catch((err) => {

        });
    }

    const destroy = async (id) =>{
        const n = datasource.filter(item => item.id!=id);
        setDataSource(n);

        await axios.delete(route('categorie.delete', {'id': id})).then((res) => {
            setDataSource(res.data.categories);
            message.success('Removido');
        }).catch((err) => {

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
            title: 'Descrição ',
            dataIndex: 'descriptions',
            key: 'descriptions',
        },
        {
            title: 'Data de criacao',
            dataIndex: 'created_at',
            key: 'created_at',
        },

        {
            title: 'Acção',
            key: 'action',
            render: (_, record) => (
                <Space size="middle" className='flex gap-1'>
                    <Button type="primary" icon={<FaEye />}
                        onClick={() => {
                            setOpenEdit(true);
                            setSelected(record)
                        }}
                    ></Button>

                    <Popconfirm title="Remover Categoria" description="deseja remover?" onConfirm={()=>destroy(record.id)}>
                    <Button type="primary" className='bg-red-400'>🗑️</Button>
                    </Popconfirm>

                </Space>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Categorias'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Categorias</h2>}
        >
            <Head title="Categorias" />

            <div className="flex h-screen">
                {/* Left Side Content (65%) */}
                <div className="w-full bg-gray-100 p-4 border border-left">
                    <div className="flex flex-col h-full">
                        {/* First Row */}
                        <div className="mb-4 flex justify-between space-x-2">
                            <Button type='primary' onClick={() => setOpen(true)}>Adicionar nova</Button>
                            <Input.Search
                                type="text"
                                placeholder="Buscar Categorias"
                                className="w-1/2"
                                allowClear
                            />
                        </div>
                        {/* Second Row */}
                        <div className="flex-grow overflow-auto">
                            <Table dataSource={datasource} columns={columns} className='shadow' />
                        </div>

                    </div>
                </div>


            </div>


            <div>
                <Modal show={open} closeable={true} onClose={() => {
                    setOpen(false)
                }}>
                    <p className='px-8 py-4 font-bold text-lg'>Adicionar nova Categoria</p>
                    <Form className='mx-8 px-lg-4 py-4' layout='vertical' ref={formRef} onFinish={saveCategory}>
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
                                    formRef.current.submit()
                                }}>
                                Salvar & Adiconar
                            </Button>
                        </div>
                    </Form.Item>
                </Modal>
            </div>

            <EditCategory
                setDataSource={setDataSource}
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
                selectedCategory={selected}
                setSelectedCategory={setSelected}
            />

        </AuthenticatedLayout>
    );
}
