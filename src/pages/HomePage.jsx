import { navigate } from '../utils';

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example page to create a React Router from scratch</p>
      <button onClick={() => navigate('/about')}>About Me</button>
    </>
  );
}
