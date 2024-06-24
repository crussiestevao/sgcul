import { Table } from "antd";

export default function OrderTablesList({dataSource}) {

    const columns = [
        {
            title: 'Codigo',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: 'Data de Validacao',
            dataIndex: 'validated_at',
            key: 'validated',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];


    return (<>
        <Table dataSource={dataSource} columns={columns} />
    </>)




}