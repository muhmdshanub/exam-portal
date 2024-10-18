"use client";

import { useState } from "react";
import { LayoutDashboard, Menu, Search, Inbox, BarChart, Settings } from "lucide-react";
import EltLogo from "./ELTLogo";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar for large screens */}
      <nav className="hidden md:block w-64 h-screen bg-gray-50 shadow-md p-4">
        <div className="flex items-center mb-6 justify-between mt-5">
          <div className="flex justify-start">
            <EltLogo width={20} height={20} color="#F97316" className="mr-2" />
            <h1 className="text-xl font-bold">ELT Global</h1>
          </div>
          <Menu className="mr-2" />
        </div>

        <p className="text-gray-400 mb-4 mt-7">General</p>

        <ul className="mt-3">
          <li
            className={`flex items-center mb-4 cursor-pointer ${
              pathname === "/assessment/exam"
                ? "bg-orange-500 text-white rounded-md p-2"
                : "text-orange-500"
            }`}
            // onClick={() => router.push("/dashboard")}
          >
            <LayoutDashboard className="mr-2" />
            Dashboard
          </li>
          <li className="flex items-center mb-4 cursor-pointer text-black-500">
            <Search className="mr-2 text-orange-500" />
            Find
          </li>
          <li className="flex items-center mb-4 cursor-pointer text-black-500">
            <Inbox className="mr-2 text-orange-500" />
            Inbox
          </li>
          <li className="flex items-center mb-4 cursor-pointer text-black-500">
            <BarChart className="mr-2 text-orange-500" />
            Analytics
          </li>
          <li className="flex items-center mb-4 cursor-pointer text-black-500">
            <Settings className="mr-2 text-orange-500" />
            Settings
          </li>
        </ul>
      </nav>

      {/* Sidebar for mobile screens */}
      <nav className="md:hidden w-full bg-gray-50 p-4 shadow-md fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <EltLogo width={20} height={20} color="#F97316" className="mr-2" />
            <h1 className="text-xl font-bold">ELT Global</h1>
          </div>
          <Menu className="cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Mobile sidebar menu */}
        {isSidebarOpen && (
          <div className="mt-5">
            <p className="text-gray-400 mb-4">General</p>
            <ul>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  pathname === "/dashboard"
                    ? "bg-orange-500 text-white rounded-md p-2"
                    : "text-orange-500"
                }`}
                onClick={() => router.push("/dashboard")}
              >
                <LayoutDashboard className="mr-2" />
                Dashboard
              </li>
              <li className="flex items-center mb-4 cursor-pointer text-black-500">
                <Search className="mr-2 text-orange-500" />
                Find
              </li>
              <li className="flex items-center mb-4 cursor-pointer text-black-500">
                <Inbox className="mr-2 text-orange-500" />
                Inbox
              </li>
              <li className="flex items-center mb-4 cursor-pointer text-black-500">
                <BarChart className="mr-2 text-orange-500" />
                Analytics
              </li>
              <li className="flex items-center mb-4 cursor-pointer text-black-500">
                <Settings className="mr-2 text-orange-500" />
                Settings
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
