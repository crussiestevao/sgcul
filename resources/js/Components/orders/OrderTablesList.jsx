import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { FaEyeSlash } from 'react-icons/fa';
import OrderDetails from './OrderDetails';



export default function OrderTablesList({ dataSource }) {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const [show, setShow] = useState(false);

    const [selected, setSelected] = useState(null);


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Buscar por ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Buscar
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Limpar
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filtrar
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Fechar
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const formateDate = (param) => {
        const dateStr = param;
        const date = new Date(dateStr);

        const formattedDate = date.toLocaleDateString('en-GB'); // For DD/MM/YYYY format
        const formattedTime = date.toLocaleTimeString();

        return (
            <div>
                {formattedDate} {formattedTime}
            </div>
        );
    };

    const columns = [
        {
            title: 'Data de Emissao',
            // dataIndex: 'created_at',
            key: 'created_at',
            render: (item) => formateDate(item.created_at)

        },
        {
            title: 'Codigo',
            dataIndex: 'code',
            key: 'code',
            ...getColumnSearchProps('code'),
        },
        {
            title: 'Tipo',
            dataIndex: 'type',
            key: 'type',
            ...getColumnSearchProps('type'),
        },
        {
            title: 'Total',
            dataIndex: 'amount',
            key: 'amount',
            ...getColumnSearchProps('amount'),
        },
        {
            title: 'Deito',
            dataIndex: 'debit',
            key: 'debit',
            ...getColumnSearchProps('debit'),
        },
        {
            title: 'Credito',
            dataIndex: 'credit',
            key: 'credit',
            ...getColumnSearchProps('credit'),
        },
        {
            title: 'Balanco',
            dataIndex: 'balance',
            key: 'balance',
            ...getColumnSearchProps('balance'),
        },

        {
            title: 'Matricula',
            dataIndex: 'registration',
            key: 'registration',
            ...getColumnSearchProps('registration'),
        },
        {
            title: 'Motorista',
            dataIndex: 'driver',
            key: 'driver',
            ...getColumnSearchProps('driver'),
        },
        {
            title: 'Detalhes ?',
            key: 'opts',
            render: (item) => (
                <>
                    <div className='flex justify-between'>
                        <Button icon={<FaEyeSlash />} className='bg-gray-800 text-white' onClick={() => {
                            setShow(true)
                            setSelected(item)
                        }}>Ver Detalhes</Button>
                    </div>
                </>
            )
        }
    ];


    return (<>
        <Table dataSource={dataSource} columns={columns}
            rowHoverable={false}
            rowClassName={(e) => {
                return 'cursor-pointer hover:bg-blue-400 font-normal hover:text-white';
            }}
        />
        <OrderDetails open={show} setOpen={setShow} order={selected} />
    </>)




}