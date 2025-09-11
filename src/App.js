// Import all CSS modules
import './styles/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

/**
 * Componente principal da aplicação
 * Segue o princípio Single Responsibility Principle (SRP)
 * Responsável apenas pelo roteamento e estrutura geral
 */
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/portfolio/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;