import React from "react";

// Sample data
const notices = [
  {
    id: 1,
    title: "Class Suspension Notice",
    description: "All classes will be suspended on August 15 due to National Mourning Day.",
    date: "2025-08-12",
    link: "/notices/class-suspension.pdf",
  },
  {
    id: 2,
    title: "Exam Routine Published",
    description: "Final exam routine for Degree 2nd Year has been published.",
    date: "2025-07-25",
    link: "/notices/degree-routine.pdf",
  },
  {
    id: 3,
    title: "New Admission Circular",
    description: "Admission circular for the academic session 2025–2026 is now available.",
    date: "2025-07-15",
    link: "/notices/admission-2025.pdf",
  },
];

const NoticePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Notices</h1>
      
      <div className="space-y-6">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="border rounded-md p-4 shadow hover:shadow-md transition duration-300 bg-white"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{notice.title}</h2>
                <p className="text-gray-600 mt-1">{notice.description}</p>
              </div>
              <div className="mt-2 md:mt-0 flex flex-col items-end">
                <span className="text-sm text-gray-500 mb-1">
                  📅 {new Date(notice.date).toLocaleDateString()}
                </span>
                <a
                  href={notice.link}
                  className="text-sm text-blue-600 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View / Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticePage;

