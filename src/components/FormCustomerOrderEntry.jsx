import { Form, Button, InputNumber } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';

import mockedCustomers from '../data/mockedCustomers';

function FormCustomerOrderEntry({ setCustomerData, setOrder }) {
  const [customerId, setCustomerId] = useState(0);
  const [customerContent, setCustomerContent] = useState(
    'Insira o ID para buscar o cliente'
  );

  const getCustomerData = () => {
    const foundCustomer = mockedCustomers.find(
      (customer) => customer.id === customerId
    );

    if (!foundCustomer) {
      setCustomerContent('Cliente não encontrado');
      setOrder((prevState) => ({
        ...prevState,
        customer: {},
      }));
    } else {
      setCustomerData(foundCustomer);
      setOrder((prevState) => ({
        ...prevState,
        customer: foundCustomer,
      }));

      const { name, vehicle, licensePlate } = foundCustomer;
      setCustomerContent(
        `Cliente: ${name} | Veículo: ${vehicle} - Placa: ${licensePlate}`
      );
    }
  };

  return (
    <Form name="basic" layout="vertical">
      <Form.Item
        label="ID do Cliente:"
        name="client-id"
        rules={[{ required: true }]}
      >
        <InputNumber
          name="client-id"
          min={1}
          placeholder="ID"
          onChange={(value) => setCustomerId(value)}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="default"
          htmlType="submit"
          size="large"
          disabled={!customerId}
          onClick={() => getCustomerData()}
        >
          Buscar cliente
        </Button>
      </Form.Item>

      <div className="customer-data-order-entry">{customerContent}</div>
    </Form>
  );
}

FormCustomerOrderEntry.propTypes = {
  setCustomerData: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};

export default FormCustomerOrderEntry;
