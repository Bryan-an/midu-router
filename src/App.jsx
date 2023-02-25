import { HomePage, AboutPage } from './pages';
import { NotFound, Route, Router, routes } from './routes';

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={NotFound}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  );
}

export default App;
