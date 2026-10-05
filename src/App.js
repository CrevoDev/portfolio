import './styles.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Marquee from './components/Marquee';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LangProvider } from './i18n';

export default function App() {
  return (
    <LangProvider>
      <div className="page">
        <Nav />
        <main>
          <Hero />
          <Metrics />
          <About />
          <Marquee />
          <Stack />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </LangProvider>
  );
}
