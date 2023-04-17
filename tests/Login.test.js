/* eslint-disable no-undef */
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../src/App';
import { validUser, invalidUser } from './mocks/login';

describe('Login page', () => {
  beforeEach(() => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener() {},
          removeListener() {},
        };
      };

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  it('Tests login button disablement logic', async () => {
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    expect(loginButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: validUser.email } });
    expect(loginButton).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: validUser.password } });
    expect(loginButton).toBeEnabled();
  });

  it('Tests if user is redirected to orders entry page after successful login', async () => {
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: validUser.email } });
    fireEvent.change(passwordInput, { target: { value: validUser.password } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const notification = screen.getByText(/login realizado com sucesso/i);
      const header = screen.getByRole('heading', {
        name: /novo pedido/i,
      });
      expect(header).toBeInTheDocument();
      expect(notification).toBeInTheDocument();
    });
  });

  it('Tests if user stays on login page after failed login', async () => {
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: invalidUser.email } });
    fireEvent.change(passwordInput, {
      target: { value: invalidUser.password },
    });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const notification = screen.getByText(/login não realizado/i);
      const header = screen.queryByRole('heading', {
        name: /novo pedido/i,
      });

      expect(notification).toBeInTheDocument();
      expect(header).not.toBeInTheDocument();
    });
  });
});
