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
      <li
        style={page.key === selectedPage ? { backgroundColor: '#999' } : {}}
        key={page.key}
        onClick={() => {
          onSetPage(page.key);
        }}
      >
        {page.name}
      </li>
    ));
  };
  return (
    <>
      <Navbar />
      <main>
        <aside>
          <ul>{rendersPageLinks()}</ul>
        </aside>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
