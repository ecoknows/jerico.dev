import { ThemeProvider } from './components/theme/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ReleaseShelf from './components/sections/ReleaseShelf';
import Projects from './components/sections/Projects';
import Capabilities from './components/sections/Capabilities';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-stone-50 text-stone-900 transition-colors duration-300 motion-reduce:transition-none dark:bg-[#121311] dark:text-stone-100">
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <ReleaseShelf />
          <Projects />
          <Capabilities />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
