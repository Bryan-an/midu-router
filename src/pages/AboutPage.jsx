import { Link } from '../components';

export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/79723966?v=4"
          alt="Foto de Bryan"
        />
        <p>
          Hello! My name is Bryan Andagoya and I am creating a React Router
          clone with midudev.
        </p>
      </div>
      <Link to="/">Home</Link>
    </>
  );
}
