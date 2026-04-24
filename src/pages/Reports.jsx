import Sidebar from "../components/Sidebar";
import ReportFilters from "../components/reports/ReportFilters";
import GradePieChart from "../components/reports/GradePieChart";
import ClassBarChart from "../components/reports/ClassBarChart";
import SubjectBarChart from "../components/reports/SubjectBarChart";
import ReportTable from "../components/reports/ReportTable";
import { Download } from "lucide-react";

const Reports = () => {
  return (
    <div className="container-fluid p-0 vh-100 d-flex overflow-hidden bg-light">

      {/* Sidebar */}
      <aside
        className="border-end bg-white"
        style={{
          width: "280px",
          minWidth: "280px",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main
        className="flex-grow-1 overflow-auto"
        style={{
          height: "100vh",
          background: "#f5f7fb",
        }}
      >

        <div className="container-fluid px-4 py-4">

          {/* Header */}
          <div className="row align-items-start justify-content-between g-3 mb-4">

            <div className="col-lg-8">
              <h1
                className="fw-semibold mb-2"
                style={{
                  fontSize: "38px",
                  color: "#1e2b4f",
                }}
              >
                Reports & Analytics
              </h1>

              <p
                className="mb-0"
                style={{
                  fontSize: "16px",
                  color: "#5f6f89",
                }}
              >
                View comprehensive student performance reports
              </p>
            </div>

            <div className="col-lg-auto">
              <button
                className="btn text-white d-flex align-items-center gap-2 px-4"
                style={{
                  background: "#2156f4",
                  height: "52px",
                  borderRadius: "14px",
                  fontWeight: "600",
                }}
              >
                <Download size={18} />
                Download Report
              </button>
            </div>

          </div>

          {/* Filters */}
          <div className="mb-4">
            <ReportFilters />
          </div>

          {/* Top Charts */}
          <div className="row g-4">

            <div className="col-xl-6 col-12">
              <div
                className="bg-white shadow-sm h-100"
                style={{
                  borderRadius: "22px",
                  padding: "24px",
                  minHeight: "420px",
                }}
              >
                <GradePieChart />
              </div>
            </div>

            <div className="col-xl-6 col-12">
              <div
                className="bg-white shadow-sm h-100"
                style={{
                  borderRadius: "22px",
                  padding: "24px",
                  minHeight: "420px",
                }}
              >
                <ClassBarChart />
              </div>
            </div>

          </div>

          {/* Subject Chart */}
          <div className="mt-4">
            <div
              className="bg-white shadow-sm"
              style={{
                borderRadius: "22px",
                padding: "24px",
                minHeight: "460px",
              }}
            >
              <SubjectBarChart />
            </div>
          </div>

          {/* Table */}
          <div className="mt-4 mb-4">
            <div
              className="bg-white shadow-sm overflow-auto"
              style={{
                borderRadius: "22px",
                padding: "24px",
              }}
            >
              <ReportTable />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Reports;