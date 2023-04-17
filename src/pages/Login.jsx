import { Image, Row, Col, Form, Input, Button } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import logo from '../assets/ultracar-main-logo.png';

function LoginForm() {
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
          <Paragraph strong="true">Acesse sua conta</Paragraph>
        </div>

        <Form
          name="basic"
          layout="vertical"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Por favor, insira seu e-mail' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" size="large">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default LoginForm;
