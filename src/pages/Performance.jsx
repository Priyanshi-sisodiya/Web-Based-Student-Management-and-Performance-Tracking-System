import Sidebar from "../components/Sidebar";
import PerformanceFilters from "../components/performance/PerformanceFilters";
import PerformanceCharts from "../components/performance/PerformanceCharts";
import PerformanceTable from "../components/performance/PerformanceTable";

const Performance = () => {
  return (
    <div className="d-flex vh-100 overflow-hidden bg-light">

      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          minWidth: "280px",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1000",
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <main
        className="flex-grow-1 overflow-auto"
        style={{
          marginLeft: "280px",
          height: "100vh",
          background: "#f5f7fb",
        }}
      >
        <div className="container-fluid px-4 py-4">

          {/* Header */}
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "700",
              color: "#1e2b4f",
              marginBottom: "10px",
            }}
          >
            Marks & Performance
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#6b7280",
              marginBottom: "30px",
            }}
          >
            Enter and manage student marks and performance
          </p>

          {/* Filters */}
          <PerformanceFilters />

          {/* Cards / Charts */}
          <div className="mt-4">   
            <PerformanceCharts />
          </div>

          {/* Table */}
          <div className="mt-4 pb-4"> 
            <PerformanceTable />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Performance;