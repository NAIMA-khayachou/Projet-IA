import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      background: '#2c3e50',
      color: 'white',
      padding: '2rem',
      marginTop: '3rem',
    },
    footerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center',
    },
    footerText: {
      margin: 0,
      fontSize: '0.95rem',
      fontFamily: '"Poppins", sans-serif',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>
          © 2024 Recettes Marocaines - Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;