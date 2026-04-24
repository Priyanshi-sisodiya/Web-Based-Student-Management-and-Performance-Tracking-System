import { Search, Plus } from "lucide-react";

const PerformanceFilters = () => {
  return (
    <div
      className="bg-white"
      style={{
        borderRadius: "24px",
        padding: "28px 30px",
        boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
      }}
    >
      <div className="row g-3 align-items-end">

        {/* Search */}
        <div className="col-12 col-lg-4">
          <label
            style={{
              display: "block",
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e2b4f",
              marginBottom: "12px",
            }}
          >
            Search
          </label>

          <div
            className="d-flex align-items-center"
            style={{
              height: "58px",
              border: "1px solid #d6deeb",
              borderRadius: "16px",
              padding: "0 18px",
            }}
          >
            <Search size={22} className="text-secondary me-3" />

            <input
              type="text"
              placeholder="Search..."
              className="border-0 w-100 bg-transparent"
              style={{
                outline: "none",
                fontSize: "17px",
              }}
            />
          </div>
        </div>

        {/* Class */}
        <div className="col-12 col-lg-3">
          <label
            style={{
              display: "block",
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e2b4f",
              marginBottom: "12px",
            }}
          >
            Filter by Class
          </label>

          <select
            className="form-select"
            style={{
              height: "58px",
              borderRadius: "16px",
              fontSize: "17px",
              border: "1px solid #d6deeb",
            }}
          >
            <option>All Classes</option>
            <option>Grade 10-A</option>
            <option>Grade 10-B</option>
            <option>Grade 11-A</option>
            <option>Grade 11-B</option>
          </select>
        </div>

        {/* Subject */}
        <div className="col-12 col-lg-3">
          <label
            style={{
              display: "block",
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e2b4f",
              marginBottom: "12px",
            }}
          >
            Filter by Subject
          </label>

          <select
            className="form-select"
            style={{
              height: "58px",
              borderRadius: "16px",
              fontSize: "17px",
              border: "1px solid #d6deeb",
            }}
          >
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Physics</option>
            <option>Chemistry</option>
          </select>
        </div>

        {/* Button */}
        <div className="col-12 col-lg-2">
          <button
            className="btn w-100 text-white d-flex align-items-center justify-content-center gap-2"
            style={{
              height: "58px",
              borderRadius: "16px",
              background: "#2156f4",
              border: "none",
              fontSize: "18px",
              fontWeight: "600",
              boxShadow: "0 8px 18px rgba(33,86,244,0.18)",
            }}
          >
            <Plus size={22} />
            Enter Marks
          </button>
        </div>

      </div>
    </div>
  );
};

export default PerformanceFilters;