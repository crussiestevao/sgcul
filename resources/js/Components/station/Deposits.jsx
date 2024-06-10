import { Button, Form, Input, message, notification, Select } from "antd";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useRef } from "react";
import axios from "axios";
import Modal from "../Modal";


export default function Deposits({ show, setShow, setBalances, station }) {

    const [api, contextHolder] = notification.useNotification();
    const formRef = useRef(null);

    const saveOperations = async (data) => {

        data['station'] = station.id;
        await axios.post(route('station.make.deposits'), data).then((response) => {
            setBalances(response.data.station);
            formRef.current.resetFields();
            message.success('Feito com sucesso')
        }).catch((err) => {
            api.open({
                message: err.response.data.message,
                description:err.response.data.message,
                type:'warning'
            });
        });
    }

    return (<>
        {contextHolder}
        <Modal show={show} onClose={() => setShow(false)} footer={null}>
            <p className='px-8 py-4 font-bold text-lg bg-green-400 text-white'>Efectuar Depositos</p>
            <Form className='mx-8 px-lg-4 py-4' layout='vertical' ref={formRef} onFinish={saveOperations}>
                <Form.Item label="Valor a depositar" name={'total'} rules={[{ required: true, message: 'Valor' }]}>
                    <Input type="number" allowClear placeholder="Valor a depositar" min={1} />
                </Form.Item>
                <Form.Item label="Observação" name={'obs'}>
                    <Input.TextArea allowClear placeholder="Observação" />
                </Form.Item>
                <Form.Item name={'method'} label="Metodo de pagamento usado" rules={[{ required: true, message: 'Metodo de pagamento usado' }]}>
                    <Select placeholder="Metodo de pagamento usado">
                        <Select.Option value="Cheque Bancário">Cheque Bancário</Select.Option>
                        <Select.Option value="Numerário">Numerário</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Número de Documento (Recibo do deposito)" name={'doc_number'} rules={[{ required: true, message: 'Recibo' }]}>
                    <Input allowClear placeholder="Número do Recibo do deposito" />
                </Form.Item>
                <Form.Item>
                    <div className='flex justify-between px-8 py-4'>
                        <Button icon={<FaArrowLeft />} onClick={() => {
                            setShow(false)
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