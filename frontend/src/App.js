import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import DownloadButton from './components/DownloadButton';
import TemplateSelector from './components/TemplateSelector';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [template, setTemplate] = useState('classic');
  const [cvData, setCvData] = useState({
    fullName: '',
    title: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    email: '',
    phone: '',
  });

  return (
    <>
      {/* Górna nawigacja */}
      <nav
        style={{
          padding: '1rem 2rem',
          background: '#e5e7eb',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
          borderBottom: '1px solid #ccc',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#0369a1' }}>Main Page</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#0369a1' }}>Sign in</Link>
        <Link to="/register" style={{ textDecoration: 'none', color: '#0369a1' }}>Sign up</Link>
      </nav>

      {/* Routing + główny layout */}
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2rem',
                padding: '2rem',
                alignItems: 'flex-start',
                background: '#f3f4f6',
                minHeight: '100vh',
                fontFamily: 'sans-serif',
              }}
            >
              {/* LEWA KOLUMNA – FORMULARZ */}
              <div style={{ flex: 1, background: '#ffffff', padding: '1rem', borderRadius: '8px' }}>
                <h2 style={{ marginBottom: '1rem' }}>CV Form</h2>
                <TemplateSelector template={template} setTemplate={setTemplate} />
                <CVForm cvData={cvData} setCvData={setCvData} />
                <DownloadButton template={template} />
              </div>

              {/* PRAWA KOLUMNA – PODGLĄD */}
              <div style={{ flex: 1, background: '#ffffff', padding: '1rem', borderRadius: '8px' }}>
                <h2 style={{ marginBottom: '1rem' }}>CV Preview</h2>
                <CVPreview cvData={cvData} template={template} />
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;