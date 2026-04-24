import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardList,
  FileText,
  Settings,
  GraduationCap,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <Users size={20} />,
    },
    {
      name: "Subjects",
      path: "/subjects",
      icon: <BookOpen size={20} />,
    },
    {
      name: "Marks & Performance",
      path: "/performance",
      icon: <ClipboardList size={20} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside
      className="
        w-full h-screen
        bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500
        text-white
        d-flex flex-column
        shadow-lg
        overflow-hidden
      "
    >
      {/* Logo */}
      <div className="px-4 py-4 border-bottom border-light border-opacity-10 flex-shrink-0">
        <div className="d-flex align-items-center gap-3">
          <div
            className="
              bg-warning
              rounded-4
              d-flex
              align-items-center
              justify-content-center
              flex-shrink-0
            "
            style={{ width: "54px", height: "54px" }}
          >
            <GraduationCap size={28} className="text-primary" />
          </div>

          <div className="min-w-0">
            <h2 className="fw-bold fs-3 mb-0 text-white">EduTrack</h2>
            <p className="small text-white-50 mb-0">
              Student Management
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-grow-1 overflow-auto px-3 py-4">
        {menu.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`
                w-100 d-flex align-items-center gap-3
                border-0 text-start mb-2
                rounded-4 px-3 py-3
                transition
                ${
                  isActive
                    ? "bg-warning text-dark fw-semibold shadow-sm"
                    : "bg-transparent text-white"
                }
              `}
              style={{
                fontSize: "16px",
              }}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="text-truncate">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-3 border-top border-light border-opacity-10 flex-shrink-0">
        <button
          onClick={handleLogout}
          className="
            w-100
            d-flex
            align-items-center
            gap-3
            border-0
            rounded-4
            px-3
            py-3
            bg-transparent
            text-white
          "
          style={{ fontSize: "16px" }}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;