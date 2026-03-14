import { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredRepoNames = [
    'portfolio-project',
    'tasaask',
    'tasaask-bootstrap-migration',
    'the-interactive-todo-list',
    'javascript-api-team-project',
    'github-readme-file-generator',
    'noteon',
    'techno-express',
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/JahidulSany/repos?per_page=100',
        );
        console.log(response);

        const filtered = response.data.filter((repo) =>
          featuredRepoNames.includes(repo.name),
        );

        setProjects(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="loader">Loading Projects...</div>;

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((repo) => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name.replace(/-/g, ' ')}</h3>
            <p>{repo.description || 'A cool web development project.'}</p>
            <div className="project-tags">
              <span>{repo.language || 'JavaScript'}</span>
            </div>
            <div className="project-links">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="view-link"
              >
                View Repo
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer" className='view-link'>
                  Live Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
