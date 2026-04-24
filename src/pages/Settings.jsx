import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { User, Bell, Lock, Palette, Database } from "lucide-react";

import Profile from "../components/settings/Profile";
import Notifications from "../components/settings/Notifications";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const menu = [
    { key: "profile", label: "Profile", icon: <User size={18} /> },
    { key: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { key: "security", label: "Security", icon: <Lock size={18} /> },
    { key: "appearance", label: "Appearance", icon: <Palette size={18} /> },
    { key: "system", label: "System", icon: <Database size={18} /> },
  ];

  return (
    <div className="h-screen w-full flex bg-[#f5f7fb] overflow-hidden">

      {/* Sidebar */}
      <aside className="w-[280px] min-w-[280px] h-full shrink-0 border-r border-gray-200 bg-white overflow-y-auto hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 h-full overflow-hidden">

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 py-6 lg:py-8">

          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#1e2b4f] leading-tight">
              Settings
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#5f6f89] mt-2 lg:mt-3">
              Manage your account and application preferences
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)] gap-6 lg:gap-8">

            {/* Left Menu */}
            <div className="bg-white rounded-3xl shadow-md p-4 sm:p-5 h-fit space-y-2 sm:space-y-3">

              {menu.map((item) => {
                const isActive = activeTab === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`w-full flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl text-left text-[15px] sm:text-[17px] font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#2156f4] text-white shadow-md"
                        : "text-[#1e2b4f] hover:bg-[#f5f7fb]"
                    }`}
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}

            </div>

            {/* Right Content */}
            <div className="min-w-0 w-full">

              {activeTab === "profile" && <Profile />}

              {activeTab === "notifications" && <Notifications />}

              {activeTab === "security" && (
                <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#1e2b4f]">
                    Security Settings
                  </h2>
                  <p className="text-[#5f6f89] mt-3">
                    Coming soon...
                  </p>
                </div>
              )}

              {activeTab === "appearance" && (
                <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#1e2b4f]">
                    Appearance Settings
                  </h2>
                  <p className="text-[#5f6f89] mt-3">
                    Coming soon...
                  </p>
                </div>
              )}

              {activeTab === "system" && (
                <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#1e2b4f]">
                    System Settings
                  </h2>
                  <p className="text-[#5f6f89] mt-3">
                    Coming soon...
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default Settings;