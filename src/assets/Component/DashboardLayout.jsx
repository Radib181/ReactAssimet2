import React from "react";
import { Outlet } from "react-router-dom";
import Dasbord from "./Dasbord";

function DashboardLayout() {
  return (
    <div className="flex">
      {/* Sidebar/Dasbord */}
      <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Dasbord />
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
