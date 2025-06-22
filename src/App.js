import React, { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import DownloadButton from './components/DownloadButton';
import TemplateSelector from './components/TemplateSelector';
import './styles/templates.scss';

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
  );
};

export default App;