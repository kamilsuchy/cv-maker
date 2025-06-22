import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadButton = ({ template }) => {
  const handleDownload = () => {
    const element = document.getElementById('cv-preview');
    if (!element) return alert('CV Preview not found.');

    const opt = {
      margin: 0.5,
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Download PDF
    </button>
  );
};

export default DownloadButton;
