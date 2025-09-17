import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    };
  },
}));

const mockMenuItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
];

describe('NavBar', () => {
  it('renders navigation links', () => {
    render(<NavBar menuItems={mockMenuItems} dark={false} setDark={() => {}} />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders the dark mode toggle button', () => {
    render(<NavBar dark={false} setDark={() => {}} />);
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
  });
});