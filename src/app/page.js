import React from 'react';

import styles from '../styles/portfolio.module.css';
import Image from 'next/image';

const Project = ({ project }) => (
    <div>
        <h2>{project.name}</h2>
        <p>URL: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
        <Image src={project.pic} alt={project.name} />
        <p>GitHub: <a href={project.git} target="_blank" rel="noopener noreferrer">{project.git}</a></p>
    </div>
);


const newLocal = <Image src={project.pic} alt={project.name} />;
const ProjectList = ({ projects }) => (
  <div>
    {projects.map((project, index) => (
      <div key={index}>
        <h2>{project.name}</h2>
        <p>URL: {project.url}</p>
        <Image src={project.pic} alt={project.name} />
        {newLocal}
        <p>GitHub: {project.git}</p>
      </div>
    ))}
  </div>
);

// Skills component
const Skills = () => (
  <div>
    <h1>Skills</h1>
    <p>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>C</li>
        <li>C++</li>
        <li>Python</li>
        <li>Postgre</li>
        <li>SQL</li>
    </ul>
    </p>
  </div>
);

// AboutMe component
function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <p>Include information about yourself here.</p>
        </div>
    );
}

// ContactMe component
const ContactMe = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const email = 'stark_knight@live.com'; // Replace with your email address

  return (
    <div>
      <h1>Contact Me</h1>
      <p>You can contact me via email:</p>
      <a href={`mailto:${email}`}>{email}</a>
      <p>Send me a message:</p>
      <textarea
        rows="4"
        cols="50"
        value={message}
        onChange={handleMessageChange}
      />
    </div>
  );
};

// Portfolio component
const Portfolio = () => {
  const [view, setView] = useState('projects');
  const [projects, setProjects] = useState([
    {
      name: 'Bugged',
      url: 'http://turtle-head.github.io/Bugged/',
      pic: 'img/Bugged.png',
      git: 'https://github.com/Turtle-Head/Bugged'
    },
    {
        name: 'Coding-the-little-things',
        url: 'http://turtle-head.github.io/Coding-the-little-things/',
        pic: 'img/code.png',
        git: 'https://github.com/Turtle-Head/Coding-the-little-things/',
    },
    {
        name: 'CatClicker',
        url: 'http://turtle-head.github.io/CatClicker/',
        pic: 'img/CatClicker.png',
        git: 'https://github.com/Turtle-Head/CatClicker',
    },
    {
        name: 'Gelp',
        url: 'http://turtle-head.github.io/Project5/',
        pic: 'img/gelp-min.png',
        git: 'https://github.com/Turtle-Head/Project5',
    },
    {
        name: 'Feed Reader',
        url: 'http://turtle-head.github.io/FeedReader-P6/',
        pic: 'img/feedreader-min.png',
        git: 'https://github.com/Turtle-Head/FeedReader-P6'
    },
    {
        name: 'CleanUp',
      url: 'https://turtle-head.github.io/CleanUp/index.html',
      pic: 'img/water-1761027.jpg',
      git: 'https://github.com/Turtle-Head/CleanUp',
    },
    {
        name:'CalculatorV2',
        url: 'https://github.com/Turtle-Head/CalculatorV2',
        pic:'img/calcV2.png',
      git: 'https://github.com/Turtle-Head/CalculatorV2',
    },
    {
        name: 'Calculator-v6',
        url: 'https://github.com/Turtle-Head/Calculator-v6',
        pic: 'img/CalcV6.png',
        git:'https://github.com/Turtle-Head/Calculator-v6'
    },
    {
        name: 'AirBus',
        url: 'https://github.com/Turtle-Head/AirBub',
        pic: 'img/AirBus.png',
        git: 'https://github.com/Turtle-Head/AirBub',
    },
    {
        name: 'BattleShip',
        url: 'https://github.com/Turtle-Head/BattleShip',
        pic: 'img/BS3.png',
        git: 'https://github.com/Turtle-Head/BattleShip',
    },
    {
        name: 'Club',
        url: 'https://github.com/Turtle-Head/Club',
        pic: 'img/Club.png',
        git: 'https://github.com/Turtle-Head/Club',
    },
  ]);

  return (
    <div>
      <div>
        <button onClick={() => setView('projects')}>Projects</button>
        <button onClick={() => setView('skills')}>Skills</button>
        <button onClick={() => setView('about')}>About Me</button>
        <button onClick={() => setView('contact')}>Contact Me</button>
      </div>
      {view === 'projects' ? (
        <div>
          <h1>Project List</h1>
          <ProjectList projects={projectsData} />
        </div>
      ) : view === 'skills' ? (
        <Skills />
      ) : view === 'about' ? (
        <AboutMe />
      ) : (
        <ContactMe />
      )}
    </div>
  );
};

export default Portfolio;

