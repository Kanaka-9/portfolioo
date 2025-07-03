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
    <div id="education" className="bg-slate-800 text-white rounded-2xl shadow-lg p-8 sm:p-10 border border-slate-700">
      <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">🎓 Education</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-700 border border-slate-600 shadow-md rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-indigo-300">{edu.degree}</h2>
            <h3 className="text-md text-slate-300">{edu.school}</h3>
            <p className="text-sm text-slate-400 mb-0">{edu.year}</p>
            <p className="text-slate-200">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
