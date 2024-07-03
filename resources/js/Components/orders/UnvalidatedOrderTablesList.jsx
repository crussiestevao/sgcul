import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Popconfirm, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { FaAllergies, FaDiagnoses, FaEyeSlash, FaFlag, FaPrint, FaRegEdit, FaTrash, FaUpload } from 'react-icons/fa';
import axios from 'axios';
import EditOrder from './EditOrder';



export default function UnvalidatedOrderTablesList({ dataSource = [], setDataSource, stations, products }) {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const [selected, setSelected] = useState(null);



    //remove

    const handlerDelete = async (id) => {
        const newData = dataSource.filter(item => item.id != id);
        setDataSource(newData);

        try {
            await axios.put(route('order.delete', id)).then(() => {

            }).catch(() => {

            })
        } catch (error) {
            console.log(error)
        }
    }
    //

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


    const validateOrder = async (id) => {
        setLoading(true)
        await axios.get(route('order.validate.one', id)).then((res) => {
            setLoading(false)
            setDataSource(res.data)
        }).catch((err) => {
            setLoading(false)
        })
    }

    const validateAllOrder = async (id) => {
        setLoading(true)
        await axios.post(route('order.validate.all')).then((res) => {
            setDataSource(res.data)
            console.log(res.data)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })
    }

    const columns = [
        {
            title: 'Data de Emissao',
            dataIndex: 'created_at',
            key: 'created_at',
            ...getColumnSearchProps('created_at'),

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
            title: 'Estaco de servico',
            dataIndex: 'station',
            key: 'station',
            ...getColumnSearchProps('station'),
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
                    <div className='flex gap-1'>
                        <Popconfirm  title={`Validar Operação ${item.code} ?`} description="Click em SIM para Confirmar" okText="SIM" cancelText="Fechar" okButtonProps={{ className: 'bg-red-400 pl-4' }}
                            onConfirm={() => validateOrder(item.id)}
                        >
                            <Button icon={<FaUpload />} className='bg-red-400 text-white' loading={loading}>Validar-Operacao</Button>
                        </Popconfirm>

                        <Popconfirm title={`Cancelar Operação ${item.code} ?`} description="Deseja Cancelar" okText="SIM" cancelText="Fechar" okButtonProps={{ className: 'bg-red-400 pl-4' }}
                            onConfirm={() => handlerDelete(item.id)}
                        >
                            <Button icon={<FaTrash  />} className='bg-yellow-400 text-white' loading={loading}>Cancelar</Button>
                        </Popconfirm>
                        <Button onClick={() => {
                            setSelected(item)
                            setEdit(true)
                        }} icon={<FaRegEdit  />} className='bg-green-400 text-white' loading={loading}>Editar</Button>
                        <Button onClick={() => {
                              window.open(route('order.print', item.id), '_blank', 'width=800,height=500,top=200,left=200')
                        }} icon={<FaPrint />} className='bg-gray-800 text-white'>Imprimir</Button>
                    </div>
                </>
            )
        }
    ];


    return (<>
        <div className='flex justify-between'>
            <p></p>

            <Popconfirm title="Validar todas Operações ?" description={<p className='text-red-400 font-bold'>Opção  perigosa, confirme caso tenha certeza</p>} okText="SIM" cancelText="Fechar" okButtonProps={{ className: 'bg-red-400 pl-4' }}
                placement='left' onConfirm={() => validateAllOrder()}
            >
                <Button disabled={dataSource.length > 0 ? false : true} className='mb-4 bg-red-400 text-white' icon={<FaDiagnoses />} loading={loading}>Validar Todas</Button>
            </Popconfirm>
        </div>

        <Table dataSource={dataSource} columns={columns} />
        <EditOrder open={edit} setOpen={setEdit} stations={stations} products={products} order={selected} setDataSource={setDataSource} />
    </>)




}