import React from 'react';

function About() {
  return (
    <div
      name="About"
      className=" max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-16"
    >
     <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  ABOUT ME
</h1>

      <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
        I'm a passionate full-stack developer with hands-on experience in both the MERN (MongoDB, Express.js, React.js, Node.js) and PERN (PostgreSQL, Express.js, React.js, Node.js) stacks. I specialize in building dynamic, high-performance web applications with clean, scalable code. From designing intuitive user interfaces with React to managing robust databases with MongoDB and PostgreSQL, I enjoy working across the entire development lifecycle.
        <br /><br />
        My proficiency in backend logic, RESTful APIs, and state management enables me to develop full-featured applications efficiently. In addition to JavaScript frameworks, I also have a solid foundation in Java, which strengthens my object-oriented programming and backend development skills.
        <br /><br />
        I value collaboration, clean code, and continuous learning, and I'm always looking to push my skills further. Whether it’s deploying full-stack apps, optimizing database performance, or integrating APIs, I bring dedication and problem-solving to every project I take on.
      </p>
    </div>
  );
}

export default About;
