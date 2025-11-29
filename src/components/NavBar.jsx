import React from "react";

const NavBar = () => {
  const styles = {
    header: {
      background: 'linear-gradient(135deg, #c8102e 0%, #a00d26 100%)',
      color: 'white',
      padding: '2rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    headerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center',
    },
    headerLogo: {
      margin: 0,
      fontSize: '2.5rem',
      fontWeight: 800,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      fontFamily: '"Poppins", sans-serif',
    },
    headerTagline: {
      margin: '0.5rem 0 0 0',
      fontSize: '1.1rem',
      opacity: 0.95,
      fontFamily: '"Poppins", sans-serif',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.headerLogo}>
          🇲🇦 Recettes Marocaines
        </h1>
        <p style={styles.headerTagline}>
          Les saveurs authentiques du Maroc
        </p>
      </div>
    </header>
  );
};

export default NavBar;