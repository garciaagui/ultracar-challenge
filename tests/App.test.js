import { render, screen } from "@testing-library/react"
import App from "../src/App"


describe('App', () => { 
  it('Renders home page', () => {
    render(<App />);
    const header = screen.getByRole('heading', { level: 1 });

    expect(header).toHaveTextContent('Ultracar Challenge 🚘');
  })
 })