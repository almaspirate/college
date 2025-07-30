import React, { useState } from "react";

const mockResults = [
  {
    roll: "1001",
    name: "Rahat Almas",
    class: "Class 10",
    exam: "Final",
    gpa: "5.00",
    status: "Passed",
  },
  {
    roll: "1002",
    name: "Anika Sultana",
    class: "Class 10",
    exam: "Final",
    gpa: "4.80",
    status: "Passed",
  },
  {
    roll: "1003",
    name: "Hasan Kabir",
    class: "Class 10",
    exam: "Final",
    gpa: "3.20",
    status: "Passed",
  },
];

const ResultPage = () => {
  const [roll, setRoll] = useState("");
  const [filteredResults, setFilteredResults] = useState(mockResults);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = mockResults.filter((r) =>
      r.roll.includes(roll.trim())
    );
    setFilteredResults(results.length > 0 ? results : []);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Result Page
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Result Table */}
      <div className="overflow-x-auto">
        {filteredResults.length > 0 ? (
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border">Roll</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Exam</th>
                <th className="px-4 py-2 border">GPA</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((result, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{result.roll}</td>
                  <td className="px-4 py-2 border">{result.name}</td>
                  <td className="px-4 py-2 border">{result.class}</td>
                  <td className="px-4 py-2 border">{result.exam}</td>
                  <td className="px-4 py-2 border">{result.gpa}</td>
                  <td
                    className={`px-4 py-2 border ${
                      result.status === "Passed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {result.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-red-600 font-semibold">
            No result found for Roll: {roll}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
