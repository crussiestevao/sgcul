import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, Input, Statistic } from 'antd';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';

export default function Products(props) {




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
                    <Button type='primary'>Adicionar No producto</Button>
                    <Input.Search
                        type="text"
                        placeholder="Buscar Produto"
                        className="w-1/2"
                        allowClear
                    />
                </div>

                <table className="min-w-full bg-white rounded shadow">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Nome</th>
                            <th className="py-2 px-4 border-b">Descrição</th>
                            <th className="py-2 px-4 border-b">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Category 1</td>
                            <td className="py-2 px-4 border-b">Description 1</td>
                            <td className="py-2 px-4 border-b">
                                <Button>Detalhes</Button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>



        </AuthenticatedLayout>
    );
}
