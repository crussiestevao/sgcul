import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, Skeleton, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { FaCalendarMinus, FaFunnelDollar, FaUser } from 'react-icons/fa';


export default function Dashboard(props) {

    const [orderData, setOrderData] = useState({
        options: {
            chart: {
                id: 'basic-bar'
            },
            xaxis: {
                categories: []
            }
        },
        series: [
            {
                name: 'Gps',
                data: []
            }
        ]
    });

    const [categoriesData, setCategoriesData] = useState(
        {
            options: {
                chart: {
                    type: 'donut'
                },
                labels: []
            },
            series: [],
    
        }
    )

    const [stationData, setStationData] = useState(
        {
            options: {
                chart: {
                    type: 'donut'
                },
                labels: []
            },
            series: [],
    
        }
    )

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getOrderData();
    }, []);

    const getOrderData = async () => {
        await axios.get(route('get.order.data'))
            .then(response => {
                setOrderData(response.data.orderChartdata);
                setStationData(response.data.stationsChartData);
                setCategoriesData(response.data.categorisChartData);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            page={'Pagina Inicial'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div class="grid grid-cols-4 gap-4">
                <Card className='shadow bg-green-400 text-white'>
                    <Statistic prefix={<FaCalendarMinus color='white' />} title={<p className='font-bold text-lg text-white'>Total de Requisicoes</p>} value={props.validated_orders.data.length} />
                </Card>
                <Card className='shadow bg-amber-400 text-white'>
                    <Statistic prefix={<FaCalendarMinus color='white' />} title={<p className='font-bold text-lg text-white'>Total Pendentes</p>} value={props.unvalidated_orders.data.length} />
                </Card>
                <Card className='shadow bg-green-400 text-white'>
                    <Statistic prefix={<FaUser color='white' />} title={<p className='font-bold text-lg text-white'>Total Usuarios</p>} value={props.users.length} />
                </Card>
                <Card className='shadow bg-gray-400 text-white'>
                    <Statistic prefix={<FaFunnelDollar color='white' />} title={<p className='font-bold text-lg text-white'>Total Estacaoes</p>} value={props.stations.length} />
                </Card>
            </div>

            <div className="2xl:gap-7.5 grid grid-cols-12 gap-4 md:gap-6">
                <div className='mt-4 bg-white shadow p-2 col-span-8 xl:col-span-4'>
                    <div class="py-6 px-4 md:px-6 xl:px-7.5">
                        <h4 class="text-xl font-semibold text-black dark:text-white">Req. Por Ano</h4>
                    </div>
                    {
                        loading ? <Skeleton active /> :
                            <Chart
                                options={orderData.options}
                                series={orderData.series}
                                type="bar"
                                width="500"
                            />
                    }
                </div>
                <div className='mt-4 bg-white shadow p-2 col-span-8 xl:col-span-4'>
                    <div class="py-6 px-4 md:px-6 xl:px-7.5">
                        <h4 class="text-xl font-semibold text-black dark:text-white">Mais Re. por Ctegoria</h4>
                    </div>
                    {
                        loading ? <Skeleton active /> :
                            <Chart
                                options={categoriesData.options}
                                series={categoriesData.series}
                                type="donut"
                                width="500"
                            />
                    }
                </div>
                <div className='mt-4 bg-white shadow p-2 col-span-8 xl:col-span-4'>
                    <div class="py-6 px-4 md:px-6 xl:px-7.5">
                        <h4 class="text-xl font-semibold text-black dark:text-white">Nivel por estacao</h4>
                    </div>
                    {
                        loading ? <Skeleton active /> :
                            <Chart
                                options={stationData.options}
                                series={stationData.series}
                                type="donut"
                                width="500"
                            />
                    }
                </div>
            </div>



        </AuthenticatedLayout>
    );
}
