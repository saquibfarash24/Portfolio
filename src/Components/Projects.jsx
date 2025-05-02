import React from 'react';

// Project data
const projects = [
  {
    title: 'JOB-DEKHO USING MERN STACK',
    description:
      'A job search platform built using the MERN stack, with role-based access for recruiters and job seekers, job applications, and admin dashboards.',
    image: '/jobdeko.png',
    url: 'https://jobdekho.aiztsinfotech.com/',
    color: 'bg-blue-100',
  },
  {
    title: 'AIZTS OFFICIAL WEBSITE',
    description:
      'Tech Stack: Postgre SQL, Node, Express, React, HTML CSS JavaScript, Tailwind CSS',
    image:
      '/aizts.png',
      url: 'https://aiztsinfotech.com/',
    color: 'bg-green-100',
  },
  {
    title: 'CHAT APPLICATION USING MERN',
    description:
      'An interactive book manager where users can add, edit, and delete book entries with MongoDB and a clean React UI.',
    image:
      '/chatapp.jpg',
    //url: 'https://aiztsinfotech.com/',
    color: 'bg-red-100',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ${project.color}`}
    >
      <img
        className="w-full h-52 object-cover"
        src={project.image}
        alt={project.title}
      />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm flex-1">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 cursor-pointer bg-black hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md text-center transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  MY PROJECTS
</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
