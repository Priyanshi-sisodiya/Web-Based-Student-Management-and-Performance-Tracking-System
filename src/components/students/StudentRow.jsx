import { UserCircle2, Pencil, Trash2 } from "lucide-react";

const StudentRow = ({ student }) => {
  return (
    <tr
      className="border-top"
      style={{
        transition: "0.2s ease",
      }}
    >
      {/* Roll No */}
      <td
        className="px-4 py-4"
        style={{
          fontSize: "20px",
          color: "#1e2b4f",
          fontWeight: "500",
        }}
      >
        {student.roll}
      </td>

      {/* Name */}
      <td className="px-4 py-4">
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "54px",
              height: "54px",
              background: "#dbe8ff",
              flexShrink: 0,
            }}
          >
            <UserCircle2 size={32} color="#2156f4" />
          </div>

          <span
            style={{
              fontSize: "20px",
              color: "#1e2b4f",
              fontWeight: "500",
            }}
          >
            {student.name}
          </span>
        </div>
      </td>

      {/* Class */}
      <td
        className="px-4 py-4"
        style={{
          fontSize: "20px",
          color: "#1e2b4f",
        }}
      >
        {student.className}
      </td>

      {/* Email */}
      <td
        className="px-4 py-4"
        style={{
          fontSize: "19px",
          color: "#51607a",
        }}
      >
        {student.email}
      </td>

      {/* Phone */}
      <td
        className="px-4 py-4"
        style={{
          fontSize: "19px",
          color: "#51607a",
        }}
      >
        {student.phone}
      </td>

      {/* Gender */}
      <td
        className="px-4 py-4"
        style={{
          fontSize: "19px",
          color: "#51607a",
        }}
      >
        {student.gender}
      </td>

      {/* Actions */}
      <td className="px-4 py-4 text-end">
        <div className="d-flex justify-content-end gap-3">
          <button
            className="btn p-0 border-0 bg-transparent"
            type="button"
          >
            <Pencil size={24} color="#2156f4" />
          </button>

          <button
            className="btn p-0 border-0 bg-transparent"
            type="button"
          >
            <Trash2 size={24} color="#ef4444" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;