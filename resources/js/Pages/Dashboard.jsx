import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, Statistic } from 'antd';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            page={'Pagina Inicial'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div class="grid grid-cols-4 gap-4">
              <Card>
              <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
              </Card>
              <Card>
              <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
              </Card>
              <Card>
              <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
              </Card>
              <Card>
              <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
              </Card>
            </div>

        </AuthenticatedLayout>
    );
}
