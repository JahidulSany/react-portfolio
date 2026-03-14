import './App.css';

import { useState } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [page, setPage] = useState('home');
  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {page === 'home' && <HomePage />}
      {page === 'project' && <ProjectPage />}
      {page === 'contact' && <ContactPage />}
    </Layout>
  );
}

export default App;
