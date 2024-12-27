import { UserButton } from "@clerk/nextjs";
import { Bell, Search } from "lucide-react";
import React from "react";

function DashboardHeader() {
  return (
    <div className="p-5 shadow-md flex justify-between items-center">
      <h2 className="font-bold text-2xl pl-5">Dashboard</h2>
      <div className="flex items-center">
        <div className="flex items-center gap-2 border rounded-md shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none p-2"
          />
          <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            <Search />
          </button>
        </div>
        <div>
          <Bell className="ml-3 gap-5 text-black-400" />
        </div>
      </div>
      <UserButton />
    </div>
  );
}

export default DashboardHeader;
