import { useState } from 'react';
import { Row, Col, Divider } from 'antd';

import FormCustomerOrderEntry from '../components/FormCustomerOrderEntry';
import FormServiceOrderEntry from '../components/FormServiceOrderEntry';
import { ORDER_INITIAL_STATE } from '../utils/constants';

function OrderEntry() {
  const [customerData, setCustomerData] = useState({});
  const [order, setOrder] = useState(ORDER_INITIAL_STATE);

  return (
    <Row justify="center">
      <Col span={8}>
        <h1>Novo Pedido</h1>
        <Divider />
        <FormCustomerOrderEntry
          setCustomerData={setCustomerData}
          setOrder={setOrder}
        />
        <Divider />
        <FormServiceOrderEntry
          customerData={customerData}
          order={order}
          setOrder={setOrder}
        />
      </Col>
    </Row>
  );
}

export default OrderEntry;
