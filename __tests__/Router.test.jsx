import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Route, Router } from '../src/routes';
import { getCurrentPath } from '../src/utils';
import { Link } from '../src/components';

vi.mock('../src/utils', async () => {
  const actual = await vi.importActual('../src/utils');
  return {
    ...actual,
    getCurrentPath: vi.fn()
  };
});

describe('Router', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render without problems', () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about');

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText('About')).toBeTruthy();
  });

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/');

    render(
      <Router>
        <Route
          path="/"
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="/about">About Me</Link>
              </>
            );
          }}
        />
        <Route path="/about" Component={() => <h1>About</h1>} />
      </Router>
    );

    const button = screen.getByText('About Me');
    fireEvent.click(button);
    const aboutTitle = await screen.findByText('About');
    expect(aboutTitle).toBeTruthy();
  });
});
