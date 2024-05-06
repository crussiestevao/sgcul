import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, Statistic } from 'antd';
import Chart from "react-apexcharts";

export default function Dashboard({ auth }) {

    const data = {
        options: {
            chart: {
                id: "bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            page={'Pagina Inicial'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div class="grid grid-cols-4 gap-4">
                <Card className='shadow'>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Card>
                <Card className='shadow'>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Card>
                <Card className='shadow'>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Card>
                <Card className='shadow'>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Card>
            </div>

            <div class="grid grid-cols-3 gap-8">
                <div className='mt-4'>
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="bar"
                        width="500"
                    />
                </div>
                <div className='mt-4'>
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="bar"
                        width="500"
                    />
                </div>
                <div className='mt-4'>
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="bar"
                        width="500"
                    />
                </div>
            </div>



        </AuthenticatedLayout>
    );
}
