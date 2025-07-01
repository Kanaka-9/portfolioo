import React from 'react';

function Education() {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication",
      school: "VNRVJIET",
      year: "2022 - 2026",
      desc: "Focused on software development, python, and machine learning.",
    },
    {
      degree: "High School",
      school: "Narayana High School",
      year: "2020 - 2022",
      desc: "Studied Mathematics, Physics, Chemistry.",
    },
  ];

  return (
    <div id="education" className="bg-gray-50 pt-10 pb-4 px-6 scroll-mt-24">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">🎓 Education</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{edu.degree}</h2>
            <h3 className="text-md text-gray-600">{edu.school}</h3>
            <p className="text-sm text-gray-500 mb-0">{edu.year}</p>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
