import { useEffect, useState } from 'react';
import { Row, Col, Divider } from 'antd';

import mockedOrders from '../data/mockedOrders';
import TableOrders from '../components/TableOrders';
import Navbar from '../components/Navbar';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = mockedOrders.map((order) => {
      return {
        id: order.id,
        service: order.service.name,
        customer: order.customer.name,
        employee: order.employee,
        price: `R$ ${order.price.toFixed(2)}`,
        startDate: order.startDate,
        finishDate: order.finishDate,
        status: order.status,
      };
    });
    setOrders(storedOrders);
  }, []);

  return (
    <main>
      <Navbar />
      <Row justify="center">
        <Col span={16}>
          <h1>Pedidos</h1>
          <Divider />
          <TableOrders orders={orders} setOrders={setOrders} />
        </Col>
      </Row>
    </main>
  );
}

export default Orders;
