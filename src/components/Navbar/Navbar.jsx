import logo from '../../assets/logo/logo.png';

const Navbar = ({ rendersPageLinks }) => {
  return (
    <header>
      <h1>
        <img src={logo} alt="Website Logo of Jahidul Sany Portfolio" />
      </h1>
      <div>
        <ul>{rendersPageLinks()}</ul>
      </div>
    </header>
  );
};

export default Navbar;
