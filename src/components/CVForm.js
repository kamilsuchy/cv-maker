import React from 'react';

const CVForm = ({ cvData, setCvData }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCvData({ ...cvData, [id]: value });
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 0 6px rgba(0,0,0,0.1)',
      width: '100%',
      boxSizing: 'border-box',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      minHeight: '60px',
    },
  };

  return (
    <form style={styles.form}>
      <input
        id="fullName"
        value={cvData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        style={styles.input}
      />
      <input
        id="title"
        value={cvData.title}
        onChange={handleChange}
        placeholder="Job Title"
        style={styles.input}
      />
      <input
        id="email"
        type="email"
        value={cvData.email}
        onChange={handleChange}
        placeholder="Email"
        style={styles.input}
      />
      <input
        id="phone"
        type="tel"
        value={cvData.phone}
        onChange={handleChange}
        placeholder="Phone"
        style={styles.input}
      />      
      <textarea
        id="summary"
        value={cvData.summary}
        onChange={handleChange}
        placeholder="Summary"
        rows={3}
        style={styles.textarea}
      />
      <textarea
        id="experience"
        value={cvData.experience}
        onChange={handleChange}
        placeholder="Experience"
        rows={3}
        style={styles.textarea}
      />
      <textarea
        id="education"
        value={cvData.education}
        onChange={handleChange}
        placeholder="Education"
        rows={3}
        style={styles.textarea}
      />
      <textarea
        id="skills"
        value={cvData.skills}
        onChange={handleChange}
        placeholder="Skills"
        rows={3}
        style={styles.textarea}
      />

    </form>
  );
};

export default CVForm;
