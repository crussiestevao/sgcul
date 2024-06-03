import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button, Input, Table } from "antd";
import image from '../../images/station.jpg'

export default function Stations(props) {


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
                // onClick={() => {
                //     router.get(route('order.new'))
                // }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>

                    <p>Adicionar novas Estações de serviço</p></Button>
            </div>


            <div className="flex h-screen mt-4">
                {/* Left Side Content (65%) */}
                <div className="w-8/12 bg-gray-100 p-4 border border-left">
                    <div className="flex justify-between mb-4">
                        {/* Debit card */}
                        <div className="bg-white p-4 rounded shadow flex-grow">
                            <h2 className="text-lg font-bold">Debit</h2>
                            <p>$1000</p>
                        </div>
                        {/* Credit card */}
                        <div className="bg-white p-4 rounded shadow flex-grow ml-4">
                            <h2 className="text-lg font-bold">Credit</h2>
                            <p>$2000</p>
                        </div>
                    </div>
                    <h2 className="text-lg font-bold mb-4">Movementos</h2>
                    <Table dataSource={[]} columns={[]} className="w-full" size="small" />
                </div>

                {/* Right Side Content (35%) */}
                <div className="w-4/12 bg-gray-100 p-4">
                    <h2 className="text-lg font-bold mb-4">Estações de serviço</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Four cards */}
                        <div className="bg-white p-4 rounded shadow relative">
                            <img
                                src={image}
                                alt="Cover"
                                className="w-full h-32 object-cover rounded-t"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b">
                                TOtal Chiveve
                            </div>
                        </div>
                        {/* Repeat similar structure for other cards */}
                        {/* Card 2 */}
                        <div className="bg-white p-4 rounded shadow relative">
                            <img
                                src="https://img.freepik.com/free-vector/gradient-hydrogen-illustration_23-2150079063.jpg?t=st=1717410036~exp=1717413636~hmac=21c5c117d207a5ea6dc24dcbeecdb0d606d42f6ae1f7b557b936498e7f5b8e42&w=1060"
                                alt="Cover"
                                className="w-full h-32 object-cover rounded-t"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b">
                                Card 2 Name
                            </div>
                        </div>
                        {/* Repeat similar structure for other cards */}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    </>)
}