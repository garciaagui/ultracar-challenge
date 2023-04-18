import { Form, Button, Select, Table, notification } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import mockedUsers from '../data/mockedUsers';
import mockedServices from '../data/mockedServices';
import validateOrderBtnDisablement from '../utils/validations/orderEntryValidations';

const { Option } = Select;

function FormServiceOrderEntry({ order, setOrder }) {
  const [service, setService] = useState({});
  const [tableContent, setTableContent] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOrderBtnDisable, setIsOrderBtnDisable] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    validateOrderBtnDisablement(order, setIsOrderBtnDisable);
  }, [order]);

  const setEmployee = (value) => {
    setOrder((prevState) => ({
      ...prevState,
      employee: value,
    }));
  };

  const generatePartsTable = (parts) => {
    const columns = [
      {
        title: 'Peça',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Valor',
        dataIndex: 'price',
        key: 'price',
        render: (price) => `R$ ${price.toFixed(2)}`,
      },
    ];

    return (
      <Table
        dataSource={parts}
        columns={columns}
        pagination={false}
        title={() => 'Peças relacionadas ao serviço'}
      />
    );
  };

  const getTotalPrice = (selectedService) => {
    let servicePrice = selectedService.price;

    if (selectedService.parts.length) {
      selectedService.parts.forEach((part) => {
        servicePrice += part.price;
      });
    }

    return servicePrice;
  };

  const getServiceData = (value) => {
    const selectedService = mockedServices.find((item) => item.name === value);
    setService(selectedService);
    setTotalPrice(getTotalPrice(selectedService));
    setOrder((prevState) => ({
      ...prevState,
      service: selectedService,
      price: getTotalPrice(selectedService),
    }));

    if (!selectedService.parts.length) {
      setTableContent('Este serviço não possui peças');
    } else {
      setTableContent(generatePartsTable(selectedService.parts));
    }
  };

  const startService = () => {
    navigate('/orders');
    notification.success({
      message: 'Serviço inicializado!',
    });
  };

  return (
    <Form name="basic" layout="vertical">
      <Form.Item
        label="Pessoa responsável pelo serviço:"
        name="employee"
        rules={[{ required: true, message: 'Por favor, selecione uma opção' }]}
      >
        <Select
          placeholder="Responsável"
          onChange={(value) => setEmployee(value)}
        >
          {mockedUsers.map((user) => {
            return (
              <Option key={user.id} value={user.name}>
                {user.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label="Serviço a ser executado:"
        name="service"
        rules={[{ required: true, message: 'Por favor, selecione uma opção' }]}
      >
        <Select
          placeholder="Serviço"
          onChange={(value) => getServiceData(value)}
        >
          {mockedServices.map((item) => {
            return (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <div className="parts-table-order-entry">
        {!Object.keys(service).length ? 'Selecione um serviço' : tableContent}
      </div>

      <div style={{ fontSize: '1.1em' }}>
        <p>
          Valor do serviço: R$
          {Object.keys(service).length
            ? ` ${service.price.toFixed(2)}`
            : ' 0.00'}
        </p>
        <p style={{ fontWeight: '800' }}>
          Valor total (serviço + peças): R$ {totalPrice.toFixed(2)}
        </p>
      </div>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          disabled={isOrderBtnDisable}
          onClick={() => startService(order)}
        >
          Iniciar Serviço
        </Button>
      </Form.Item>
    </Form>
  );
}

FormServiceOrderEntry.propTypes = {
  customerData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    vehicle: PropTypes.string,
    licensePlate: PropTypes.string,
  }).isRequired,

  order: PropTypes.shape({
    id: PropTypes.number,
    customer: PropTypes.shape({}),
    employee: PropTypes.string,
    service: PropTypes.shape({}),
    price: PropTypes.number,
    status: PropTypes.string,
    startDate: PropTypes.string,
    finishDate: PropTypes.string,
  }).isRequired,

  setOrder: PropTypes.func.isRequired,
};

export default FormServiceOrderEntry;
