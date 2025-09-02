import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SectionListComponent from './components/SectionListComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  const sectionService = new (require('./services/SectionService').default)();
  const sections = sectionService.getSections();
  const sectionsHeader = sectionService.getSectionsHeader();

  return (
    <Router>
      <div className="App">
        <HeaderComponent sectionsHeader={sectionsHeader} />

        <Routes>
          <Route path="/portfolio/" element={
            <main>
              <SectionListComponent sections={sections} />
            </main>
          } />
        </Routes>

        <footer>
          <p>&copy; 2025 Cleverson Domingues Pedroso</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;