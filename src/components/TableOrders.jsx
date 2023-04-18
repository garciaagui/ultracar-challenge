import { Table, Button } from 'antd';
import PropTypes from 'prop-types';

function TableOrders({ orders, setOrders }) {
  const finishService = (id) => {
    const finishDate = new Date().toLocaleDateString();
    const newState = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: 'Concluído', finishDate };
      }
      return order;
    });
    setOrders(newState);
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Serviço',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Cliente',
      dataIndex: 'customer',
      key: 'customer',
      align: 'center',
    },
    {
      title: 'Responsável',
      dataIndex: 'employee',
      key: 'employee',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (text) => {
        let color = '';
        if (text === 'Concluído') {
          color = 'blue';
        }
        return <span style={{ color }}>{text}</span>;
      },
    },
    {
      title: 'Início',
      dataIndex: 'startDate',
      key: 'startDate',
      align: 'center',
    },
    {
      title: 'Conclusão',
      dataIndex: 'finishDate',
      key: 'finishDate',
      align: 'center',
    },
    {
      title: 'Finalizar Serviço',
      key: 'finish',
      align: 'center',
      render: (record) => (
        <Button
          type="primary"
          disabled={record.status === 'Concluído'}
          onClick={() => finishService(record.id)}
        >
          Finalizar
        </Button>
      ),
    },
  ];

  return <Table dataSource={orders} columns={tableColumns} />;
}

TableOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      customer: PropTypes.string,
      employee: PropTypes.string,
      service: PropTypes.string,
      status: PropTypes.string,
      startDate: PropTypes.string,
      finishDate: PropTypes.string,
    }).isRequired
  ).isRequired,
  setOrders: PropTypes.func.isRequired,
};

export default TableOrders;
