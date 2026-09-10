import HomePage from './pages/HomePage';
import WomenMeasurementPage from './pages/WomenMeasurementPage';
import MenMeasurementPage from './pages/MenMeasurementPage';

function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/men-measurement') return <MenMeasurementPage />;
  return path === '/women-measurement' ? <WomenMeasurementPage /> : <HomePage />;
}

export default App;
