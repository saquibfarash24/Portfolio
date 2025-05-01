import React from "react";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaTasks } from "react-icons/fa";

const workExperience = [
  {
    id: 1,
    companyName: "Intern at AIZTS Infotech",
    startDate: "25/08/2024",
    endDate: "Present",
    location: "Pathruth Chowk, Solapur, Maharashtra",
    description: [
      "Developed and maintained responsive web interfaces using modern frontend technologies.",
      "Managed and optimized PostgreSQL and MongoDB databases.",
      "Integrated APIs to enhance frontend-backend communication.",
      "Used Git for version control and collaborated in teams to improve user experience and performance."
    ],
    color: "from-orange-300 to-purple-300",
  },
];

const WorkExperience = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-5 sm:px-10 py-10" name="work">
     <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  WORK EXPERIENCE
</h1>


      <div className="space-y-8">
        {workExperience.map((job) => (
          <div
            key={job.id}
            className={`bg-gradient-to-br ${job.color} rounded-2xl shadow-xl p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <FaBuilding className="text-lg text-gray-700" />
                {job.companyName}
              </h2>
              <div className="text-sm md:text-base text-gray-700 flex items-center gap-2">
                <FaCalendarAlt className="text-md" />
                {job.startDate} - {job.endDate}
              </div>
            </div>

            {/* Description as bullet list */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2 text-gray-800">
                <FaTasks className="text-lg text-gray-700" />
                <span className="font-medium text-base md:text-lg">Responsibilities:</span>
              </div>
              <ul className="list-disc list-inside space-y-2 pl-2 text-sm md:text-base text-gray-800">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700 flex items-center gap-2 text-sm md:text-base">
              <FaMapMarkerAlt className="text-md text-red-600" />
              {job.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
