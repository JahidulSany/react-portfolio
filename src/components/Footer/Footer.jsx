import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()}{' '}
          <span className="brand-name">Jahidul Sany</span>.
          <span className="divider">|</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
