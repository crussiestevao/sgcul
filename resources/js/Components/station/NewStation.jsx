import { Button, Form, Input, message, notification, Select } from "antd";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import Modal from "../Modal";
import { useRef } from "react";
import axios from "axios";

export function AddNewStation({ open, setOpen, setDatasource }) {

    const formRef = useRef(null);

    const saveStation = async (data) => {
        await axios.post(route('station.add.new', data)).then((res)=>{
            notification.open(
                {
                    message:'✅ Criada com sucesso',
                    placement: 'top',
                    type: 'success',
                    description: <><p>Estacao criada</p></>,
                }
            )
            formRef.current.resetFields();
            setDatasource(res.data)
        }).catch((err)=>{

        })
    }

    return (<>
        <Modal show={open} onClose={() => {
            setOpen(false)
        }}>
            <p className='px-8 py-4 font-bold text-lg'>Criar Nova Estacão</p>
            <Form className='mx-8 px-lg-4 py-4' layout='vertical' ref={formRef} onFinish={saveStation}>
                <Form.Item label="Nome" name={'name'} rules={[{required:true, message:'Nome da bomba'}]}>
                    <Input type="name" allowClear placeholder="Nome da Bomba" />
                </Form.Item>
                <Form.Item label="Endereço" name={'address'}>
                    <Input.TextArea allowClear placeholder="Endereço" />
                </Form.Item>
                <Form.Item label="Contacto" name={'contact'}>
                    <Input allowClear placeholder="Contacto" />
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