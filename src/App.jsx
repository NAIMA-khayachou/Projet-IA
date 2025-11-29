import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recommandations from './pages/Recommandations';
import Preferences from './pages/Preferences';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <NavBar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommandations" element={<Recommandations />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;