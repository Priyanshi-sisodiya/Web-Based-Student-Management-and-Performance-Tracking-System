import { Search, Plus } from "lucide-react";

const SubjectSearch = () => {
  return (
    <div
      className="bg-white shadow-sm d-flex align-items-end gap-3"
      style={{
        borderRadius: "24px",
        padding: "28px 30px",
      }}
    >
      {/* Search Area */}
      <div className="flex-grow-1">
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "600",
            color: "#1e2b4f",
            marginBottom: "12px",
          }}
        >
          Search Subjects
        </label>

        <div
          className="d-flex align-items-center"
          style={{
            height: "58px",
            border: "1px solid #d6deeb",
            borderRadius: "16px",
            padding: "0 18px",
            background: "#ffffff",
          }}
        >
          <Search size={22} className="text-secondary me-3" />

          <input
            type="text"
            placeholder="Search by name, code, or teacher..."
            className="border-0 w-100 bg-transparent"
            style={{
              outline: "none",
              fontSize: "17px",
              color: "#1e2b4f",
            }}
          />
        </div>
      </div>

      {/* Button */}
      <button
        className="btn text-white d-flex align-items-center justify-content-center gap-2"
        style={{
          background: "#2156f4",
          height: "58px",
          minWidth: "210px",
          borderRadius: "16px",
          fontSize: "18px",
          fontWeight: "600",
          border: "none",
          boxShadow: "0 8px 18px rgba(33,86,244,0.18)",
          whiteSpace: "nowrap",
        }}
      >
        <Plus size={22} />
        Add Subject
      </button>
    </div>
  );
};

export default SubjectSearch;