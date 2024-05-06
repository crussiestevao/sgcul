import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, Statistic } from 'antd';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';

export default function User(props) {

    const [users, setUsers] = useState(props.users);

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
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
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
                <Button type="primary"> + Registrar Novo usuario</Button>
            </div>

            <div className='mt-4'>
                <Table columns={columns} dataSource={users} />

            </div>

        </AuthenticatedLayout>
    );
}
