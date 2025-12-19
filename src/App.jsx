import { useEffect, useState, lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer';
import LoadingOverlay from './components/LoadingOverlay.jsx'

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));


function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Try immediately, and again on next tick to handle fresh route mounts
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };
      tryScroll();
      setTimeout(tryScroll, 0);
    } else {
      // Optional: scroll to top when navigating routes without hash
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);
  return null;
}

function App() {
  const location = useLocation();
  const [booting, setBooting] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="App">
      {booting && <LoadingOverlay />}
      <Header />
      <main>
        <ScrollToHash />
        <div className="route-container" key={location.pathname}>
          <Suspense fallback={<div className="route-fallback"></div>}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
