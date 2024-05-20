import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, Statistic } from 'antd';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';

export default function Products(props) {

   


    return (
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Requisicao'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Requisicao</h2>}
        >
            <Head title="Requisicao" />



        </AuthenticatedLayout>
    );
}
