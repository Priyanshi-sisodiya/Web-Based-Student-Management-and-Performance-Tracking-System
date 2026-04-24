import Sidebar from "../components/Sidebar";
import StudentFilters from "../components/students/StudentFilters";
import StudentTable from "../components/students/StudentTable";

const Students = () => {
  return (
    <div className="container-fluid p-0 vh-100 d-flex overflow-hidden bg-light">

      {/* Sidebar */}
      <aside
         className="col-auto"
          style={{
            width: "280px",
            minHeight: "100vh",
        }}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 overflow-hidden">

        {/* Scroll Area */}
        <div
          className="h-100 overflow-auto"
          style={{
            padding: "42px 40px",
          }}
        >

          {/* Header */}
          <h1
            className="fw-semibold mb-2"
            style={{
              fontSize: "56px",
              color: "#1e2b4f",
              lineHeight: "1.1",
            }}
          >
            Student Management
          </h1>

          <p
            className="mb-5"
            style={{
              fontSize: "22px",
              color: "#51607a",
            }}
          >
            Manage student records and information
          </p>

          {/* Filters */}
          <div className="mb-5">
            <StudentFilters />
          </div>

          {/* Table */}
          <div>
            <StudentTable />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Students;