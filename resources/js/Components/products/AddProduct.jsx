import axios from "axios";
import Modal from "../Modal";
import { Button, Form, Input, message, Select } from "antd";
import { FaArrowLeft, FaBeer, FaEye, FaFolder, FaRegEdit, FaSave } from "react-icons/fa";
import { useRef } from "react";

export default function AddProduct({ open, setOpen, datasource, setDataSource, categories }) {

    const formRef = useRef(null);

    const saveProduct = async (data) => {

        await axios.post(route('product.add.new'), data).then((res) => {
            setDataSource(res.data.products);
            formRef.current.resetFields();
            message.success('Producto Adiciona com sucesso');
        }).catch((err) => {

        });
    }

    return (<>

        <Modal show={open} onClose={() => setOpen(false)}>
            <p className='px-8 py-4 font-bold text-lg'>Adicionar Novo Producto</p>
            <Form className='mx-8 px-lg-4 py-4' layout='vertical' ref={formRef} onFinish={saveProduct}>
                <Form.Item label="Nome do producto" name={'name'} rules={[{
                    required: true,
                    message: 'Indique um nome'
                }]}>
                    <Input allowClear placeholder="nome do producto" />
                </Form.Item>
                <Form.Item label="Categoria" name={'categories'} rules={[{
                    required: true,
                    message: 'Indique uma categoria'
                }]}>
                    <Select placeholder="Categoria">
                        {
                            categories?.map((item, index) => (
                                <Select.Option key={index} value={item.value}>{item.name}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Preço" name={'price'}>
                    <Input allowClear placeholder="nPreço" />
                </Form.Item>
                <Form.Item label="Descrição" name={'descriptions'}>
                    <Input.TextArea allowClear placeholder="Descrição" />
                </Form.Item>
                <Form.Item>
                    <div className='flex justify-between px-8 py-4'>
                        <Button icon={<FaArrowLeft />} onClick={() => {
                            setOpen(false)
                        }}>
                            Fechar
                        </Button>
                        <Button icon={<FaSave />} className='bg-green-400 text-white'
                            onClick={() => {
                                formRef.current.submit()
                            }}>
                            Salvar & Adiconar
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    </>)
}