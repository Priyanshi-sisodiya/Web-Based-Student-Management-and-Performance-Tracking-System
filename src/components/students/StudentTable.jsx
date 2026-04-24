import StudentRow from "./StudentRow";

const students = [
  {
    roll: "10A001",
    name: "Alex Johnson",
    className: "Grade 10-A",
    email: "alex.johnson@school.edu",
    phone: "(555) 123-4567",
    gender: "Male",
  },
  {
    roll: "10A002",
    name: "Emma Williams",
    className: "Grade 10-A",
    email: "emma.williams@school.edu",
    phone: "(555) 234-5678",
    gender: "Female",
  },
  {
    roll: "10B001",
    name: "Michael Brown",
    className: "Grade 10-B",
    email: "michael.brown@school.edu",
    phone: "(555) 345-6789",
    gender: "Male",
  },
  {
    roll: "10A003",
    name: "Sophia Davis",
    className: "Grade 10-A",
    email: "sophia.davis@school.edu",
    phone: "(555) 456-7890",
    gender: "Female",
  },
  {
    roll: "11A001",
    name: "James Wilson",
    className: "Grade 11-A",
    email: "james.wilson@school.edu",
    phone: "(555) 567-8901",
    gender: "Male",
  },
  {
    roll: "11A002",
    name: "Olivia Martinez",
    className: "Grade 11-A",
    email: "olivia.martinez@school.edu",
    phone: "(555) 678-9012",
    gender: "Female",
  },
  {
    roll: "10B002",
    name: "William Anderson",
    className: "Grade 10-B",
    email: "william.anderson@school.edu",
    phone: "(555) 789-0123",
    gender: "Male",
  },
  {
    roll: "11B001",
    name: "Isabella Taylor",
    className: "Grade 11-B",
    email: "isabella.taylor@school.edu",
    phone: "(555) 890-1234",
    gender: "Female",
  },
];

const StudentTable = () => {
  return (
    <div className="bg-white rounded-4 shadow-sm border overflow-hidden">

      {/* Table Scroll */}
      <div className="table-responsive">

        <table className="table align-middle mb-0">

          {/* Header */}
          <thead
            style={{
              background: "#f8fafc",
            }}
          >
            <tr>
              <th className="px-4 py-4 fs-5 fw-semibold text-dark">Roll No</th>
              <th className="px-4 py-4 fs-5 fw-semibold text-dark">Name</th>
              <th className="px-4 py-4 fs-5 fw-semibold text-dark">Class</th>
              <th className="px-4 py-4 fs-5 fw-semibold text-dark">Email</th>
              <th className="px-4 py-4 fs-5 fw-semibold text-dark">Phone</th>
              <th className="px-4 py-4 fs-5 fw-semibold text-dark">Gender</th>
              <th className="px-4 py-4 fs-5 fw-semibold text-end text-dark">
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {students.map((student, index) => (
              <StudentRow key={index} student={student} />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default StudentTable;