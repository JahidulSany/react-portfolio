import './Navbar.css';
import logo from '../../assets/logo/logo.png';

const Navbar = ({ rendersPageLinks }) => {
  return (
    <header className="header-container">
      <nav className="custom-navbar">
        <a className="custom-brand" href="/">
          <img src={logo} alt="Jahidul Sany Portfolio" className="logo-img" />
        </a>
        <ul className="nav-list">{rendersPageLinks()}</ul>
      </nav>
    </header>
  );
};

export default Navbar;
