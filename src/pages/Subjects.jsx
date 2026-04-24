import Sidebar from "../components/Sidebar";
import SubjectSearch from "../components/subjects/SubjectSearch";
import SubjectCard from "../components/subjects/SubjectCard";

const subjects = [
  {
    name: "Mathematics",
    code: "MATH101",
    teacher: "Dr. Sarah Thompson",
    credits: 4,
  },
  {
    name: "English Literature",
    code: "ENG101",
    teacher: "Prof. John Miller",
    credits: 3,
  },
  {
    name: "Physics",
    code: "PHY101",
    teacher: "Dr. Robert Chen",
    credits: 4,
  },
  {
    name: "Chemistry",
    code: "CHEM101",
    teacher: "Dr. Emily Rodriguez",
    credits: 4,
  },
  {
    name: "Biology",
    code: "BIO101",
    teacher: "Prof. Lisa Wang",
    credits: 3,
  },
  {
    name: "History",
    code: "HIST101",
    teacher: "Mr. David Parker",
    credits: 4,
  },
  {
    name: "Computer Science",
    code: "CS101",
    teacher: "Ms. Jennifer Lee",
    credits: 3,
  },
];

const Subjects = () => {
  return (
    <div className="d-flex vh-100 overflow-hidden bg-light">

      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          minWidth: "280px",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "0",
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
            Subject Management
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#6b7280",
              marginBottom: "30px",
            }}
          >
            Manage subjects and assign them to students
          </p>

          {/* Search */}
          <SubjectSearch />

          {/* Cards */}
          <div className="row g-4 mt-2 pb-4">
            {subjects.map((sub, index) => (
              <div key={index} className="col-12 col-md-6 col-xl-4">
                <SubjectCard subject={sub} />
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Subjects;