import React, { useState } from "react";

// Mock Data
const departments = ["All", "Science", "Arts", "Commerce", "ICT"];
const teachersData = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: `Teacher ${i + 1}`,
  subject: departments[i % departments.length],
  designation: "Lecturer",
  image: "https://static.vecteezy.com/system/resources/previews/042/891/253/non_2x/professional-teacher-avatar-illustration-for-education-concept-vector.jpg",
}));

const principal = {
  name: "Principal",
  designation: "Principal",
  department: "Administration",
  image: "https://static.vecteezy.com/system/resources/previews/042/891/253/non_2x/professional-teacher-avatar-illustration-for-education-concept-vector.jpg",
};

const ITEMS_PER_PAGE = 6;

const AllTeachersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering logic
  const filteredTeachers = teachersData.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || t.subject === selectedDept;
    return matchesSearch && matchesDept;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredTeachers.length / ITEMS_PER_PAGE);
  const paginatedTeachers = filteredTeachers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleDeptChange = (e) => {
    setSelectedDept(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Page Header with Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">All Teachers</h1>
        <div className="flex gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by name"
            className="border px-4 py-2 rounded-md w-full md:w-64"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select
            className="border px-3 py-2 rounded-md"
            value={selectedDept}
            onChange={handleDeptChange}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Teacher List */}
        <div className="md:col-span-2 space-y-4">
          {paginatedTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-48 h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{teacher.name}</h3>
                <p className="text-sm text-gray-600">{teacher.designation}</p>
                <p className="text-sm text-gray-500">{teacher.subject}</p>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Principal Card */}
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <img
            src={principal.image}
            alt={principal.name}
            className="w-32 h-32 mx-auto rounded-full object-cover"
          />
          <h2 className="text-xl font-bold mt-4">{principal.name}</h2>
          <p className="text-sm text-gray-600">{principal.designation}</p>
          <p className="text-sm text-gray-500">{principal.department}</p>
        </div>
      </div>
    </div>
  );
};

export default AllTeachersPage;
