import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'Project', key: 'project' },
  { name: 'Contact', key: 'contact' },
];

const Layout = ({ children, selectedPage, onSetPage }) => {
  const rendersPageLinks = () => {
    return pages.map((page) => (
      <li key={page.key} className="nav-item">
        <a
          className={`${page.key === selectedPage ? 'nav-link active' : 'nav-link'}`}
          href={`#${page.key}`}
          onClick={(e) => {
            e.preventDefault();
            onSetPage(page.key);
          }}
        >
          {page.name}
        </a>
      </li>
    ));
  };
  return (
    <>
      <Navbar rendersPageLinks={rendersPageLinks} />
      <main>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
