const data = [
  {
    name: "Alex Johnson",
    class: "10-A",
    math: 82,
    english: 88,
    science: 80,
    total: 83,
  },
  {
    name: "Emma Williams",
    class: "10-A",
    math: 90,
    english: 85,
    science: 87,
    total: 87,
  },
];

const PerformanceTable = () => {
  return (
    <div
      className="bg-white overflow-hidden"
      style={{
        borderRadius: "24px",
        boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
      }}
    >
      <div className="table-responsive">
        <table className="table align-middle mb-0">

          {/* Header */}
          <thead
            style={{
              background: "#f8fafc",
            }}
          >
            <tr>
              <th
                style={{
                  padding: "22px 26px",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#1e2b4f",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Student Name
              </th>

              <th style={headStyle}>Class</th>
              <th style={headStyle}>Math</th>
              <th style={headStyle}>English</th>
              <th style={headStyle}>Science</th>
              <th style={headStyle}>Total %</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td style={cellStyle}>{item.name}</td>
                <td style={cellStyle}>{item.class}</td>
                <td style={cellStyle}>{item.math}</td>
                <td style={cellStyle}>{item.english}</td>
                <td style={cellStyle}>{item.science}</td>

                <td
                  style={{
                    padding: "22px 26px",
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#2156f4",
                    borderBottom: "1px solid #eef2f7",
                  }}
                >
                  {item.total}%
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

const headStyle = {
  padding: "22px 26px",
  fontSize: "18px",
  fontWeight: "700",
  color: "#1e2b4f",
  borderBottom: "1px solid #e5e7eb",
};

const cellStyle = {
  padding: "22px 26px",
  fontSize: "17px",
  color: "#334155",
  borderBottom: "1px solid #eef2f7",
};

export default PerformanceTable;