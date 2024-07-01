import OrderTablesList from '@/Components/orders/OrderTablesList';
import UnvalidatedOrderTablesList from '@/Components/orders/UnvalidatedOrderTablesList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { Button, Card, Statistic, Tabs } from 'antd';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { FaAddressBook, FaCheckDouble, FaRegClipboard } from 'react-icons/fa';

export default function Products(props) {
      
  const [validated_orders, setValidated]=useState(props.validated_orders.data);
  const [unvalidated_orders, setUnvalidated]=useState(props.unvalidated_orders.data);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Requisição'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Requisição</h2>}
        >
            <Head title="Requisicao" />
            <div className='flex justify-between'>
                <p></p>
                <Button className='flex gap-2' type='primary' 
                onClick={()=>{
                    router.get(route('order.new'))
                    
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>

                    <p>Emitir uma nova Requisição </p></Button>
            </div>

            <Tabs items={[{
                key: '1',
                label:<p className='flex gap-1 text-base'><FaRegClipboard/>Operações Pendentes</p>,
                children: <UnvalidatedOrderTablesList dataSource={unvalidated_orders} setDataSource={setUnvalidated}
                 stations={props.stations} products={props.products}/>,
            },
            {
                key: '2',
                label: <p className='flex gap-1 text-base'><FaCheckDouble/> Validados</p>,
                children: <OrderTablesList dataSource={validated_orders}/>,
    
            }]} />

        </AuthenticatedLayout>
    );
}
