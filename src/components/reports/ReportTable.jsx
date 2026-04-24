const data = [
  {
    roll: "10A001",
    name: "Alex Johnson",
    class: "Grade 10-A",
    subjects: 4,
    marks: 343,
    avg: 86,
    status: "Good",
  },
  {
    roll: "10A002",
    name: "Emma Williams",
    class: "Grade 10-A",
    subjects: 4,
    marks: 368,
    avg: 92,
    status: "Excellent",
  },
  {
    roll: "10B001",
    name: "Michael Brown",
    class: "Grade 10-B",
    subjects: 4,
    marks: 300,
    avg: 75,
    status: "Average",
  },
  {
    roll: "10A003",
    name: "Sophia Davis",
    class: "Grade 10-A",
    subjects: 4,
    marks: 364,
    avg: 91,
    status: "Excellent",
  },
];

const ReportTable = () => {
  const badgeStyle = (status) => {
    if (status === "Excellent")
      return {
        background: "#dcfce7",
        color: "#15803d",
      };

    if (status === "Good")
      return {
        background: "#dbeafe",
        color: "#1d4ed8",
      };

    return {
      background: "#fef3c7",
      color: "#b45309",
    };
  };

  return (
    <div className="w-100">

      {/* Title */}
      <h3
        className="fw-semibold mb-4"
        style={{
          fontSize: "24px",
          color: "#1e2b4f",
        }}
      >
        Student Performance Report
      </h3>

      {/* Table Wrapper */}
      <div
        className="table-responsive"
        style={{
          border: "1px solid #e8edf5",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <table className="table align-middle mb-0">

          {/* Header */}
          <thead
            style={{
              background: "#f8fafe",
            }}
          >
            <tr>
              {[
                "Roll No",
                "Name",
                "Class",
                "Subjects",
                "Total Marks",
                "Average %",
                "Performance",
              ].map((head, i) => (
                <th
                  key={i}
                  className="fw-semibold border-0"
                  style={{
                    padding: "16px 18px",
                    fontSize: "15px",
                    color: "#1e2b4f",
                    whiteSpace: "nowrap",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>

                <td
                  style={{
                    padding: "16px 18px",
                    fontSize: "15px",
                    color: "#1e2b4f",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.roll}
                </td>

                <td
                  style={{
                    padding: "16px 18px",
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#1e2b4f",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </td>

                <td
                  style={{
                    padding: "16px 18px",
                    fontSize: "15px",
                    color: "#51607a",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.class}
                </td>

                <td
                  style={{
                    padding: "16px 18px",
                    fontSize: "15px",
                    color: "#51607a",
                  }}
                >
                  {item.subjects}
                </td>

                <td
                  style={{
                    padding: "16px 18px",
                    fontSize: "15px",
                    color: "#51607a",
                  }}
                >
                  {item.marks}
                </td>

                <td
                  style={{
                    padding: "16px 18px",
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#2156f4",
                  }}
                >
                  {item.avg}%
                </td>

                <td style={{ padding: "16px 18px" }}>
                  <span
                    style={{
                      ...badgeStyle(item.status),
                      padding: "7px 14px",
                      borderRadius: "30px",
                      fontSize: "13px",
                      fontWeight: "600",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ReportTable;