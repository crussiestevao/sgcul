import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, Empty, Input, Statistic } from 'antd';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';

export default function Products(props) {




    return (
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Categorias'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Categorias</h2>}
        >
            <Head title="Categorias" />
            <div className="flex h-screen">
                {/* Left Side Content (65%) */}
                <div className="w-8/12 bg-gray-100 p-4 border border-left">
                    <div className="flex flex-col h-full">
                        {/* First Row */}
                        <div className="mb-4 flex justify-between space-x-2">
                            <Button type='primary'>Adicionar nova</Button>
                            <Input.Search
                                type="text"
                                placeholder="Buscar Categorias"
                                className="w-1/2"
                                allowClear
                            />
                        </div>
                        {/* Second Row */}
                        <div className="flex-grow overflow-auto">
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
                    </div>
                </div>

                {/* Right Side Content (35%) */}
                <div className="w-4/12 bg-gray-100 p-4">
                    <h2 className="text-lg font-bold mb-4">Productos Associados: </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Empty description="Nehum Producto Associado" style={{ marginTop: '40%' }} />
                        <Empty description="Nehum Producto Associado" style={{ marginTop: '40%' }} />
                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}
