import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Card from './components/Card';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import DisclaimerBanner from './components/DisclaimerBanner';


// Pages
import Home from './pages/Home';
import Knowledge from './pages/KnowledgeBase';
import Exploration from './pages/SelfExploration';
import Tracking from './pages/GrowthTracking';
import Resources from './pages/Resources';
import Practice from './pages/PracticalGuide';
import AboutUsPage from './pages/AboutUsPage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <BrowserRouter basename="/self-nurture-mvp">
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <DisclaimerBanner />
         <div className="content-wrapper flex-grow-1">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/exploration" element={<Exploration />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/practice-guides" element={<Practice />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        
        {/* 页脚 */}
        <footer className="py-4 mt-5" style={{ backgroundColor: 'var(--text-light)' }}>
          <Container>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h5 className="mb-1" style={{ color: 'var(--text-dark)' }}><span style={{ color: 'var(--primary-purple)' }}>自我</span>养育</h5>
                <p className="mb-0 small" style={{ color: 'var(--text-dark)' }}>© {new Date().getFullYear()} 自我养育平台. 保留所有权利.</p>
              </div>
              <div className="d-flex gap-3">
                <Link to="/about-us" className="text-decoration-none" style={{ color: 'var(--text-dark)' }}>关于我们</Link>
                <a href="#" className="text-decoration-none" style={{ color: 'var(--text-dark)' }}>联系我们</a>
                <a href="#" className="text-decoration-none" style={{ color: 'var(--text-dark)' }}>隐私政策</a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
