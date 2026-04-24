import { Search, SlidersHorizontal } from "lucide-react";

const ReportFilters = () => {
  return (
    <div
      className="bg-white shadow-sm w-100"
      style={{
        borderRadius: "22px",
        padding: "24px",
        overflow: "hidden",
      }}
    >

      {/* Title */}
      <div className="d-flex align-items-center gap-3 mb-4">

        <SlidersHorizontal
          size={20}
          style={{ color: "#4c5d7a", flexShrink: 0 }}
        />

        <h3
          className="mb-0 fw-semibold"
          style={{
            fontSize: "28px",
            color: "#1e2b4f",
            lineHeight: "1",
          }}
        >
          Filters
        </h3>

      </div>

      {/* Filters Row */}
      <div className="row g-3">

        {/* Search */}
        <div className="col-xl-4 col-md-6 col-12">

          <label
            className="form-label fw-semibold mb-2"
            style={{
              fontSize: "15px",
              color: "#1e2b4f",
            }}
          >
            Search Student
          </label>

          <div className="position-relative">

            <Search
              size={18}
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9aa7bd",
              }}
            />

            <input
              type="text"
              placeholder="Search by name or roll no..."
              className="form-control"
              style={{
                height: "52px",
                borderRadius: "14px",
                paddingLeft: "42px",
                fontSize: "15px",
                border: "1px solid #d7dfeb",
              }}
            />

          </div>
        </div>

        {/* Class Filter */}
        <div className="col-xl-4 col-md-6 col-12">

          <label
            className="form-label fw-semibold mb-2"
            style={{
              fontSize: "15px",
              color: "#1e2b4f",
            }}
          >
            Filter by Class
          </label>

          <select
            className="form-select"
            style={{
              height: "52px",
              borderRadius: "14px",
              fontSize: "15px",
              border: "1px solid #d7dfeb",
            }}
          >
            <option>All Classes</option>
            <option>Grade 10-A</option>
            <option>Grade 10-B</option>
            <option>Grade 11-A</option>
            <option>Grade 11-B</option>
          </select>

        </div>

        {/* Subject Filter */}
        <div className="col-xl-4 col-md-6 col-12">

          <label
            className="form-label fw-semibold mb-2"
            style={{
              fontSize: "15px",
              color: "#1e2b4f",
            }}
          >
            Filter by Subject
          </label>

          <select
            className="form-select"
            style={{
              height: "52px",
              borderRadius: "14px",
              fontSize: "15px",
              border: "1px solid #d7dfeb",
            }}
          >
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Physics</option>
            <option>Chemistry</option>
          </select>

        </div>

      </div>
    </div>
  );
};

export default ReportFilters;