import AddProduct from '@/Components/products/AddProduct';
import EditProduct from '@/Components/products/EditProduct';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, Input, Statistic } from 'antd';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

export default function Products(props) {

    const [datasource, setDataSource] = useState(props.products);
    const [categories, setCategories]= useState(props.categories);

    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    //
    const [selected, setSelectedProduct] = useState(null);

    const columns = [
        {
            title: 'Codigo',
            dataIndex: 'code',
            key: 'code',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
          </svg>
           {text}</a>,
        },
        {
            title: 'Descrição ',
            dataIndex: 'descriptions',
            key: 'descriptions',
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price',
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
                            setEdit(true)
                            setSelectedProduct(record)
                        }}
                    ></Button>

                    <Button type="primary" className='bg-red-400'>🗑️</Button>

                </Space>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Lista de Produtos'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Lista de Produtos</h2>}
        >
            <Head title="Lista de Produtos" />
            <div className="h-screen">

                {/* First Row */}
                <div className="mb-4 flex justify-between space-x-2">
                    <Button type='primary'
                        onClick={() => {
                            setOpen(true)
                        }}>Adicionar No producto</Button>
                    <Input.Search
                        type="text"
                        placeholder="Buscar Produto"
                        className="w-1/2"
                        allowClear
                    />
                </div>

                <Table dataSource={datasource} columns={columns} className="min-w-full bg-white rounded shadow" />

            </div>


            <AddProduct categories={categories} open={open} datasource={datasource} setDataSource={setDataSource} setOpen={setOpen}/>
            <EditProduct open={edit} setOpen={setEdit} setDataSource={setDataSource} categories={categories} selectedProduct={selected}/>
        </AuthenticatedLayout>
    );
}
