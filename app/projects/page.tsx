'use client'
import Link from 'next/link';
import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  date: string;
  image: string;
  technologies: string;
};

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    date: 'Completed on: 01/01/2023',
    image: '/images/proj1.png',
    technologies: 'Tech used: HTML, CSS, JavaScript',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    date: 'Completed on: 02/02/2023',
    image: '/images/proj2.png',
    technologies: 'Tech used: Java, Springboots',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    date: 'Completed on: 03/03/2023',
    image: '/images/proj3.png',
    technologies: 'Tech used: Java, Springboots',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    date: 'Completed on: 04/04/2023',
    image: '/images/proj4.png',
    technologies: 'Tech used: Java, Springboots',
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Projects</h1>
        <nav className="mt-2">
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/resume" className="mr-4">Resume</Link>
          <Link href="/projects" className="mr-4">Projects</Link>
          <Link href="/contact" className="mr-4">Contact</Link>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{projects[currentProject].title}</h2>
          <p>{projects[currentProject].description}</p>
          <p className="mt-2">{projects[currentProject].date}</p>
          <p className="mt-2">{projects[currentProject].technologies}</p>
          <img src={projects[currentProject].image} alt={projects[currentProject].title} className="mt-4" />
        </div>
        <div className="flex justify-between">
          <button onClick={prevProject} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
          <button onClick={nextProject} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}
