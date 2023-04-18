import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Image, Row, Col, Form, Input, Button, notification } from 'antd';

import AppContext from '../context/AppContext';
import logo from '../assets/ultracar-main-logo.png';
import { LOGIN_INITIAL_STATE } from '../utils/constants';
import {
  getUserData,
  validateBtnDisablement,
  handleInputChanges,
} from '../utils/functions/login';

function Login() {
  const [loginData, setLoginData] = useState(LOGIN_INITIAL_STATE);
  const [isLoginBtnDisable, setIsLoginBtnDisable] = useState(true);
  const navigate = useNavigate();

  const { setUser } = useContext(AppContext);

  useEffect(() => {
    validateBtnDisablement(loginData, setIsLoginBtnDisable);
  }, [loginData]);

  const handleLogin = (event) => {
    event.preventDefault();

    const userStoredData = getUserData(loginData);

    if (userStoredData) {
      const { email, name } = userStoredData;
      setUser({ email, name });
      navigate('/orders/entry');
      notification.success({
        message: 'Login realizado com sucesso!',
      });
    } else {
      notification.error({
        message: 'Login não realizado!',
        description: 'Consulte se o e-mail e a senha estão corretos.',
      });
    }
  };

  return (
    <Row justify="center">
      <Col span={6}>
        <div className="div-login-img">
          <Image width={250} src={logo} preview={false} alt="Ultracar logo" />
          <p>Acesse sua conta</p>
        </div>

        <Form name="basic" layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Por favor, insira seu e-mail' },
            ]}
          >
            <Input
              name="email"
              placeholder="usuario@mail.com"
              onChange={(event) => {
                handleInputChanges(event, setLoginData);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha' }]}
          >
            <Input.Password
              name="password"
              placeholder="******"
              onChange={(event) => {
                handleInputChanges(event, setLoginData);
              }}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              disabled={isLoginBtnDisable}
              onClick={(event) => handleLogin(event)}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="div-content">
          <p>Email e senha para testar:</p>
          <p>guilherme@mail.com | senhadoguilherme</p>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
