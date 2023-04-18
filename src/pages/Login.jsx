import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Row, Col, Form, Input, Button, notification } from 'antd';
import logo from '../assets/ultracar-main-logo.png';
import { LOGIN_INITIAL_STATE } from '../utils/constants';
import {
  validateLoginData,
  validateLoginBtnDisablement,
} from '../utils/validations/loginValidations';
import AppContext from '../context/AppContext';

function Login() {
  const [loginData, setLoginData] = useState(LOGIN_INITIAL_STATE);
  const [isLoginBtnDisable, setIsLoginBtnDisable] = useState(true);
  const navigate = useNavigate();
  //

  const { setUser } = useContext(AppContext);

  useEffect(() => {
    validateLoginBtnDisablement(loginData, setIsLoginBtnDisable);
  }, [loginData]);

  const handleChanges = ({ target }) => {
    const { name, value } = target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const userStoredData = validateLoginData(loginData);

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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
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
              onChange={handleChanges}
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
              onChange={handleChanges}
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
      </Col>
    </Row>
  );
}

export default Login;
