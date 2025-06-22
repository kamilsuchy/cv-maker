import React from 'react';

const templates = [
  { id: 'modern', name: 'Modern' },
  { id: 'classic', name: 'Classic' },
];

const TemplateSelector = ({ template, setTemplate }) => {
  return (
    <div className="mb-6">
      <label htmlFor="template" className="block font-semibold mb-2">
        Choose Template:
      </label>
      <select
        id="template"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        className="p-2 border rounded w-full max-w-xs"
      >
        {templates.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemplateSelector;
