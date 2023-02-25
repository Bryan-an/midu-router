import { NotFound, Router, routes } from './routes';

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={NotFound} />
    </main>
  );
}

export default App;
