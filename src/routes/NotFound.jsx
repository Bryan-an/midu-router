import { Link } from '../components';

export function NotFound() {
  return (
    <>
      <div>
        <h1>Not Found</h1>
        <img
          src="https://apply.sts.net.pk/assets/images/not-found.gif"
          alt="404 error"
        />
      </div>
      <Link to="/">Go back to Home</Link>
    </>
  );
}
