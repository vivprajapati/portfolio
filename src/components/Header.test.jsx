import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders header component', () => {
    render(<Header />);
    // Header component uses <header> element which has banner role by default
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders without errors', () => {
    expect(() => render(<Header />)).not.toThrow();
  });
});
