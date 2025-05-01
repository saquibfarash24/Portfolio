import React from "react";

// Tech Skills
const skills = [
  "JavaScript", "ReactJS", "NodeJS", "MongoDB", "ExpressJS", "TailwindCSS",
  "Git", "GitHub", "RESTful APIs", "HTML5", "CSS3", "Java"
];

// Soft Skills
const softSkills = [
  "Team Collaboration", "Problem Solving", "Adaptability", "Time Management",
  "Communication", "Critical Thinking", "Self-Motivation"
];

// Experience
const experience = [
  {
    company: "Aizts Info Tech",
    role: "Junior Software Engineer",
    duration: "Aug 2024 - Present",
    bullets: [
      "Built and maintained responsive web applications using React and Tailwind CSS.",
      "Managed MongoDB and PostgreSQL databases for scalable data storage.",
      "Integrated RESTful APIs to streamline frontend-backend communication.",
      "Improved application performance and deployed user-friendly interfaces.",
      "Collaborated with cross-functional teams to meet project goals.",
      "Utilized Git for version control and workflow management.",
      "Contributed to core features that enhanced user experience.",
    ]
  },
];


// Education
const education = [
  {
    institution: "Bharti Vidyapeeth University",
    degree: "BCA & MCA in Computer Science",
    duration: "2018 - 2024",
    location: "Solapur, Maharashtra",
  },
];

// Projects
const projects = [
  {
    title: "Job Portal",
    bullets: [
      "Developed and maintained the frontend for a job portal using React.",
      "Integrated PostgreSQL and MongoDB to manage listings, profiles, and applications.",
      "Worked with backend developers to ensure smooth API communication.",
      "Focused on mobile-responsive design and user experience."
    ]
  },
  {
    title: "Aizts Official Website",
    bullets: [
      "Led frontend development with React and Tailwind CSS.",
      "Ensured consistency with brand guidelines through custom UI components.",
      "Used PostgreSQL for dynamic content management.",
      "Implemented responsive design for cross-device compatibility."
    ]
  }
];

const ResumePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg p-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Saquib Sayyed</h1>
          <p className="text-lg text-gray-600">Full Stack Developer (MERN & PERN)</p>
        </div>

        {/* Personal Info */}
        <section className="mb-12 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Personal Information</h2>
          <div className="space-y-2 text-lg text-gray-700">
            <p><strong>Name:</strong> Saquib Arif Sayyed</p>
            <p><strong>Email:</strong> saquibsayyed12345@gmail.com</p>
            <p><strong>Phone:</strong> +91 7378411134</p>
            <p><strong>Location:</strong> Solapur, Maharashtra, India</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-12 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Soft Skills</h2>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
       {/* Experience Section */}
<section className="mb-12 border-b border-gray-200 pb-6">
  <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Experience</h2>
  {experience.map((job, index) => (
    <div key={index} className="mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{job.company}</h3>
        <p className="text-sm text-gray-500">{job.duration}</p>
      </div>
      <p className="text-lg text-gray-700 font-medium">{job.role}</p>
      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
        {job.bullets.map((point, idx) => (
          <li key={idx} className="text-md">{point}</li>
        ))}
      </ul>
    </div>
  ))}
</section>


        {/* Projects */}
        <section className="mb-12 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                {project.bullets.map((point, idx) => (
                  <li key={idx} className="text-md">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </div>
              <p className="text-lg text-gray-700">{edu.degree}</p>
              <p className="text-md text-gray-600 mt-2">{edu.location}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
