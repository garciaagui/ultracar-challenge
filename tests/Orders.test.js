/* eslint-disable no-undef */
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../src/App';

describe('Orders page', () => {
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
      <MemoryRouter initialEntries={['/orders']}>
        <App />
      </MemoryRouter>
    );
  });

  it('Tests when clicking on an enabled finish button, it is disabled afterwards', async () => {
    const buttons = screen.queryAllByRole('button');
    const [enabledButton] = buttons.filter(
      (button) => button.disabled === false
    );

    fireEvent.click(enabledButton);
    await waitFor(() => {
      expect(enabledButton).toBeDisabled();
    });
  });
});
