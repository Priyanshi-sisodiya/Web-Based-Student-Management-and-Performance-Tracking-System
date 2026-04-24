import { BookOpen, Pencil, Trash2, Users } from "lucide-react";

const SubjectCard = ({ subject }) => {
  return (
    <div
      className="bg-white overflow-hidden"
      style={{
        borderRadius: "24px",
        boxShadow: "0 8px 22px rgba(15,23,42,0.08)",
        transition: "0.3s ease",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6, #2156f4)",
          padding: "28px",
          position: "relative",
          minHeight: "210px",
          color: "white",
        }}
      >
        {/* Icon */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "66px",
            height: "66px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.14)",
            marginBottom: "34px",
          }}
        >
          <BookOpen size={30} />
        </div>

        {/* Credits */}
        <span
          style={{
            position: "absolute",
            top: "28px",
            right: "28px",
            background: "#ffcc00",
            color: "#1e2b4f",
            fontSize: "16px",
            fontWeight: "600",
            padding: "8px 18px",
            borderRadius: "999px",
          }}
        >
          {subject.credits} Credits
        </span>

        {/* Title */}
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "8px",
            lineHeight: "1.2",
          }}
        >
          {subject.name}
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.85)",
            margin: "0",
          }}
        >
          {subject.code}
        </p>
      </div>

      {/* Bottom */}
      <div style={{ padding: "28px" }}>
        <p
          style={{
            fontSize: "20px",
            color: "#64748b",
            marginBottom: "8px",
          }}
        >
          Teacher
        </p>

        <p
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#1e2b4f",
            marginBottom: "24px",
            lineHeight: "1.3",
          }}
        >
          {subject.teacher}
        </p>

        {/* Buttons */}
        <div className="d-flex align-items-center gap-3">
          {/* Assign */}
          <button
            className="flex-grow-1 d-flex align-items-center justify-content-center gap-2"
            style={{
              height: "56px",
              border: "none",
              borderRadius: "16px",
              background: "#f7efb0",
              color: "#9a6700",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            <Users size={22} />
            Assign
          </button>

          {/* Edit */}
          <button
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "56px",
              height: "56px",
              border: "none",
              borderRadius: "16px",
              background: "#dbe8ff",
            }}
          >
            <Pencil size={22} color="#2156f4" />
          </button>

          {/* Delete */}
          <button
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "56px",
              height: "56px",
              border: "none",
              borderRadius: "16px",
              background: "#ffe2e2",
            }}
          >
            <Trash2 size={22} color="#ef4444" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;