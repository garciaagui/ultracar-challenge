/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from '../src/App';

describe('App', () => {
  it('Renders home page', () => {
    render(<WrappedApp />);
    const header = screen.getByRole('heading', { level: 1 });

    expect(header).toHaveTextContent('Ultracar Challenge 🚘');
  });

  it('Renders not found page if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <App />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { level: 1 });

    expect(header).toHaveTextContent('Page Not Found!');
  });
});
