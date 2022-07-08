import { render, screen } from '@testing-library/react';
import App from '././main-page';

test('renders header subtitle', () => {
  render(<App />);
  const subtitle = screen.getByText('Providing houses all over the world');
  expect(subtitle).toBeInTheDocument();
});
