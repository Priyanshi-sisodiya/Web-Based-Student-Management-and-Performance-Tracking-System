import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ActionCard from "../components/ActionCard";

import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  UserPlus,
  Clipboard,
  CalendarCheck,
  FileText,
  Edit,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div
      className="container-fluid p-0 bg-light overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="row g-0 min-vh-100">

        {/* Sidebar */}
        <div
          className="col-auto d-none d-lg-block"
          style={{
            width: "280px",
            minWidth: "280px",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1000,
            overflowY: "auto",
            background: "#fff",
            borderRight: "1px solid #e9ecef",
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          className="col overflow-auto"
          style={{
            marginLeft: "280px",
            minWidth: 0,
            width: "calc(100% - 280px)",
            minHeight: "100vh",
          }}
        >
          <div className="p-3 p-sm-4 p-lg-5">

            {/* Header */}
            <h1 className="fw-bold display-6 mb-2 text-dark">
              Dashboard
            </h1>

            <p className="text-muted fs-6 fs-lg-5 mb-4 mb-lg-5">
              Welcome back! Here's what's happening with your school today.
            </p>

            {/* Stats Cards */}
            <div className="row g-3 g-lg-4 mb-4 mb-lg-5">

              <div className="col-12 col-md-6 col-xl-3">
                <StatCard
                  title="Total Students"
                  value="8"
                  extra="↑ 12% from last month"
                  icon={<Users size={24} />}
                  color="bg-primary-subtle text-primary"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-3">
                <StatCard
                  title="Total Teachers"
                  value="7"
                  extra="↑ 3 new this month"
                  icon={<GraduationCap size={24} />}
                  color="bg-warning-subtle text-warning"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-3">
                <StatCard
                  title="Total Subjects"
                  value="7"
                  extra="All active"
                  icon={<BookOpen size={24} />}
                  color="bg-success-subtle text-success"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-3">
                <StatCard
                  title="Average Performance"
                  value="85%"
                  extra="↑ 5% improvement"
                  icon={<TrendingUp size={24} />}
                  color="bg-info-subtle text-info"
                />
              </div>

            </div>

            {/* Quick Actions */}
            <h2 className="fw-bold mb-3 mb-lg-4 text-dark">
              Quick Actions
            </h2>

            {/* Action Cards */}
            <div className="row g-3 g-lg-4 pb-3 pb-lg-4">

              <div className="col-12 col-md-6 col-xl-4">
                <ActionCard
                  title="Add Student"
                  desc="Enroll new student"
                  icon={<UserPlus size={22} />}
                  gradient="from-blue-500 to-cyan-500"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-4">
                <ActionCard
                  title="Add Subject"
                  desc="Create new subject"
                  icon={<Clipboard size={22} />}
                  gradient="from-yellow-500 to-orange-500"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-4">
                <ActionCard
                  title="Take Attendance"
                  desc="Mark today's attendance"
                  icon={<CalendarCheck size={22} />}
                  gradient="from-green-500 to-emerald-600"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-4">
                <ActionCard
                  title="Assign Subjects"
                  desc="Assign subjects to students"
                  icon={<Clipboard size={22} />}
                  gradient="from-purple-500 to-violet-600"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-4">
                <ActionCard
                  title="Enter Marks"
                  desc="Record student marks"
                  icon={<Edit size={22} />}
                  gradient="from-pink-500 to-rose-500"
                />
              </div>

              <div className="col-12 col-md-6 col-xl-4">
                <ActionCard
                  title="Generate Reports"
                  desc="Create performance reports"
                  icon={<FileText size={22} />}
                  gradient="from-indigo-500 to-blue-600"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;