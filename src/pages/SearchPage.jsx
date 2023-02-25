import { useEffect } from 'react';

export function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `You searched ${routeParams.query}`;
  }, []);

  return <h1>You searched {routeParams.query}</h1>;
}
