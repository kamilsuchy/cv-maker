import React from 'react';

const CVPreview = ({ cvData, template  }) => {
  const format = (text) => text.split('\n').map((line, i) => <div key={i}>{line}</div>);
  const renderList = (text) =>
  <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    {text.split('\n').map((item, i) => item && <li key={i}>{item}</li>)}
  </ul>;

  return (
    <div
      id="cv-preview"
      className={`cv-preview ${template}`}
      style={{ minHeight: '29.7cm', width: '21cm' }}
    >
      <h1 className="text-2xl font-bold">{cvData.fullName || 'Full Name'}</h1>
      <p className="italic">{cvData.title || 'Job Title'}</p>
      <div className="mt-4 text-sm">
        <p>Email: {cvData.email || 'your@email.com'}</p>
        <p>Phone: {cvData.phone || '123-456-789'}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Summary</h3>
        {format(cvData.summary || 'Summary...')}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Experience</h3>
        {format(cvData.experience || 'Experience...')}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Education</h3>
        {format(cvData.education || 'Education...')}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Skills</h3>
        {renderList(cvData.skills || 'Skills...')}
      </div>
    </div>
  );
};

export default CVPreview;
