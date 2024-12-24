import { Link } from "react-router-dom";

function Dasbord() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 -mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {/* Welcome Message */}
        <div>
          <h4 className="text-gray-500 text-sm">Welcome back</h4>
          <h1 className="text-4xl font-extrabold text-gray-700 mt-2">Dashboard</h1>
        </div>

        {/* Search Input */}
        <div className="md:col-span-2 relative">
          <input
            type="text"
            placeholder="Search incidents..."
            className="w-full h-[50px] pl-12 pr-4 py-2 bg-white shadow-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Dropdown & Button */}
        <div className="flex flex-col md:flex-row md:justify-end gap-4 items-center">
          <select
            className="w-full md:w-auto px-4 py-2 bg-white shadow-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Sort By</option>
            <option value="date">Date Modified</option>
            <option value="name">Name</option>
          </select>

          {/* New Incident Button */}
          <Link to="/new-incident">
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center justify-center gap-2 hover:bg-orange-600 transform hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New Incident
            </button>
          </Link>
        </div>


   
      </div>
    </section>
  );
}

export default Dasbord;
