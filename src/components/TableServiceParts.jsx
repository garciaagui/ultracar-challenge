import { Table } from 'antd';
import PropTypes from 'prop-types';

function TableServiceParts({ parts }) {
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
}

TableServiceParts.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default TableServiceParts;
