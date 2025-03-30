import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import ThemeProvider from './themes/ThemeProvider';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
