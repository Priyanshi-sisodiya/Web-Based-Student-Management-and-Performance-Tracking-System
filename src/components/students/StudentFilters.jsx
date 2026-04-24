import { Search, Plus } from "lucide-react";

const StudentFilters = () => {
  return (
    <div className="bg-white rounded-4 shadow-sm border p-4">

      <div className="row g-4 align-items-end">

        {/* Search */}
        <div className="col-lg-7 col-md-12">
          <label
            className="form-label fw-semibold mb-3"
            style={{
              fontSize: "24px",
              color: "#20304d",
            }}
          >
            Search Students
          </label>

          <div className="position-relative">
            <Search
              size={24}
              color="#94a3b8"
              style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            <input
              type="text"
              placeholder="Search by name, roll no, or email..."
              className="form-control rounded-4 border"
              style={{
                height: "64px",
                paddingLeft: "52px",
                fontSize: "22px",
                borderColor: "#c9d3e4",
              }}
            />
          </div>
        </div>

        {/* Class Filter */}
        <div className="col-lg-3 col-md-6">
          <label
            className="form-label fw-semibold mb-3"
            style={{
              fontSize: "24px",
              color: "#20304d",
            }}
          >
            Filter by Class
          </label>

          <select
            className="form-select rounded-4 border"
            style={{
              height: "64px",
              fontSize: "22px",
              borderColor: "#c9d3e4",
            }}
          >
            <option>All Classes</option>
            <option>Grade 10-A</option>
            <option>Grade 10-B</option>
            <option>Grade 11-A</option>
            <option>Grade 11-B</option>
          </select>
        </div>

        {/* Button */}
        <div className="col-lg-2 col-md-6">
          <button
            className="btn w-100 text-white fw-semibold rounded-4 d-flex align-items-center justify-content-center gap-2"
            style={{
              height: "64px",
              background: "#2156f4",
              fontSize: "22px",
            }}
          >
            <Plus size={22} />
            Add Student
          </button>
        </div>

      </div>
    </div>
  );
};

export default StudentFilters;