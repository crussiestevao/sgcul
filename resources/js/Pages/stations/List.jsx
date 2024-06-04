import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button, Empty, Input, message, Skeleton, Statistic, Table } from "antd";
import image from '../../images/station.jpg'
import { AddNewStation } from "@/Components/station/NewStation";
import { useState } from "react";
import axios from "axios";

export default function Stations(props) {

    const [open, setOpen] = useState(false);
    const [stations, setStations] = useState(props.stations);
    const [loading, setLoading] = useState(false);
    const [balances, setBalances] = useState([]);


    const getBalances = async (id) => {

        setLoading(true);

        await axios.get(route('station.get.balances', id)).then((res) => {
            setLoading(false);
            setBalances(res.data.station);
            message.success('Balanco Obtido');
        }).catch((err) => {

        });
    }
    return (<>
        <AuthenticatedLayout
            user={props.auth.user}
            page={'lista de Estações de serviço'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Listas de Etscaoes</h2>}
        >
            <Head title="Lista de Estações de serviço" />

            <div className='flex justify-between'>
                <p><Input.Search placeholder="Buscar Estacao" allowClear /></p>
                <Button className='flex gap-2' type='primary'
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>

                    <p>Adicionar novas Estações de serviço</p></Button>
            </div>


            <div className="flex h-screen mt-4">
                {/* Left Side Content (65%) */}
                <div className="w-8/12 bg-gray-100 p-4 border border-left">
                    {
                        balances.length === 0 ?
                            <Empty description="Nehum estacao selecionada" />
                            :
                            loading ? <Skeleton active />
                                :
                                <div>
                                    <div className="flex justify-between mb-4">
                                        {/* Debit card */}
                                        <div className="bg-white p-4 rounded shadow flex-grow">
                                            <Statistic value={balances[0]?.debit}
                                                title={<h2 className="text-lg font-medium">Saldo a favor</h2>}
                                                suffix="Mzn"
                                                valueStyle={{ color: 'green', fontWeight: 'bold' }} />
                                        </div>
                                        {/* Credit card */}
                                        <div className="bg-white p-4 rounded shadow flex-grow ml-4">
                                            <Statistic value={balances[0]?.credit}
                                                title={<h2 className="text-lg font-medium">Saldo em divida</h2>}
                                                suffix="Mzn"
                                                valueStyle={{ color: 'red', fontWeight: 'bold' }} />
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-3 mb-2">
                                        <p></p>
                                        <p className="underline text-blue-400 cursor-pointer">Saldo inicial ✒️ {balances[0].name}</p>
                                    </div>
                                    <h2 className="text-lg font-bold mb-4">Movementos</h2>
                                    <Table dataSource={[]} columns={[]} className="w-full" size="small" />
                                </div>

                    }
                </div>

                {/* Right Side Content (35%) */}
                <div className="w-4/12 bg-gray-100 p-4">
                    <h2 className="text-lg font-bold mb-4">Estações de serviço</h2>
                    <div className="grid grid-cols-2 gap-4">

                        {
                            stations?.map((item, index) => (
                                <div onClick={() => {
                                    getBalances(item.id)
                                }}
                                    key={index}
                                    className="bg-white p-4 rounded shadow relative cursor-pointer ripple hover:shadow-lg">
                                    <img
                                        src={image}
                                        alt="Cover"
                                        className="w-full h-32 object-cover rounded-t"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b">
                                        {item.name}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <AddNewStation open={open} setOpen={setOpen} setDatasource={setStations} />

        </AuthenticatedLayout>
    </>)
}