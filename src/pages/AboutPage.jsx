import { Link } from '../components';
import { useI18n } from '../hooks';

export function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en');

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/79723966?v=4"
          alt="Foto de Bryan"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
