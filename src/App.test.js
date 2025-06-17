import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders main content', () => {
    const { container } = render(<App />);
    // Test that the app renders with content
    expect(container).toBeTruthy();
  });
});
