import axios from "axios";
import Modal from "../Modal";
import { Button, Form, Input, message, Select, Skeleton } from "antd";
import { FaArrowLeft, FaBeer, FaEye, FaFolder, FaRegEdit, FaSave } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function EditProduct({ open, setOpen, setDataSource, categories, selectedProduct={} }) {

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const editProduct = async (data) => {

      
        const cat = categories.find(item => item.id ===data.categorie || item.name ===data.categorie);

        data['category'] = cat.id;
        data['id'] = selectedProduct.id;

    
        await axios.post(route('product.update'), data).then((res) => {
            setDataSource(res.data);
            formRef.current.resetFields();
            message.success('Producto Actualizado com sucesso');
        }).catch((err) => {

        });
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );


    useEffect(() => {
        if (open === true) {
            setLoading(true);
            const cat = categories.find(item => item.id ===selectedProduct.category_id);
            selectedProduct['categorie'] = cat.name
            delay(700).then(() => {
                setLoading(false);
            })
        }
    }, [open]);

    return (<>

        <Modal show={open} onClose={() => setOpen(false)}>
            <p className='px-8 py-4 font-bold text-lg'>Editar Producto</p>
            {
                loading ? <Skeleton active /> :
                    <Form className='mx-8 px-lg-4 py-4' layout='vertical' ref={formRef} onFinish={editProduct} initialValues={selectedProduct}>
                        <Form.Item label="Nome do producto" name={'name'} rules={[{
                            required: true,
                            message: 'Indique um nome'
                        }]}>
                            <Input allowClear placeholder="nome do producto" />
                        </Form.Item>
                        <Form.Item label="Categoria" name={'categorie'} rules={[{
                            required: true,
                            message: 'Indique uma categoria'
                        }]}>
                            <Select placeholder="Categoria">
                                {
                                    categories?.map((item, index) => (
                                        <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
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
                                    Actualizar Info
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
            }
        </Modal>
    </>)
}