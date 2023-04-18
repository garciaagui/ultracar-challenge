import { useContext } from 'react';
import { Menu, Image } from 'antd';
import { Link } from 'react-router-dom';
import {
  PlusOutlined,
  UnorderedListOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import logo from '../assets/ultracar-main-logo.png';
import AppContext from '../context/AppContext';

function Navbar() {
  const { user } = useContext(AppContext);

  return (
    <Menu mode="horizontal">
      <Image width={150} src={logo} preview={false} alt="Ultracar logo" />
      <Menu.Item key="inserir-pedido" icon={<PlusOutlined />}>
        <Link to="/orders/entry">Novo Pedido</Link>
      </Menu.Item>
      <Menu.Item key="pedidos" icon={<UnorderedListOutlined />}>
        <Link to="/orders">Pedidos</Link>
      </Menu.Item>
      <Menu.Item
        key="user"
        style={{ marginLeft: 'auto' }}
        icon={<UserOutlined />}
      >
        {user.name}
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <Link to="/">Logout</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
