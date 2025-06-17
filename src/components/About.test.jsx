import { render } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  test('renders about component', () => {
    const { container } = render(<About />);
    expect(container).toBeInTheDocument();
  });

  test('renders without errors', () => {
    expect(() => render(<About />)).not.toThrow();
  });
});
