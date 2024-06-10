import { Button, Form, Input, message, notification, Select } from "antd";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useRef } from "react";
import axios from "axios";
import Modal from "../Modal";


export default function Payments({ show, setShow, setBalances, station }) {

    const [api, contextHolder] = notification.useNotification();
    const formRef = useRef(null);

    const saveOperations = async (data) => {

        data['station'] = station.id;
        await axios.post(route('station.make.payment'), data).then((response) => {

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
            <p className='px-8 py-4 font-bold text-lg bg-amber-400 text-white'>Efectuar Pagamentos</p>
            <Form className='mx-8 px-lg-4 py-4' layout='vertical' ref={formRef} onFinish={saveOperations}>
                <Form.Item label="Valor total" name={'total'} rules={[{ required: true, message: 'Valor' }]}>
                    <Input type="number" allowClear placeholder="Valor a pagar" min={1} />
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
                <Form.Item label="Número de Documento (Recibo)" name={'doc_number'} rules={[{ required: true, message: 'Recibo' }]}>
                    <Input allowClear placeholder="Número do Documento passado pela estacão " />
                </Form.Item>
                <Form.Item>
                    <div className='flex justify-between px-8 py-4'>
                        <Button icon={<FaArrowLeft />} onClick={() => {
                            setShow(false)
                        }}>
                            Fechar
                        </Button>
                        <Button icon={<FaSave />} className='bg-amber-400 text-white'
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