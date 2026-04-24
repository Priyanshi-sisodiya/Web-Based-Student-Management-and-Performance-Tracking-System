import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const barData = [
  { name: "Math", value: 82 },
  { name: "English", value: 88 },
  { name: "Physics", value: 80 },
  { name: "Chemistry", value: 85 },
  { name: "Biology", value: 90 },
];

const lineData = [
  { month: "Jan", value: 75 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 78 },
  { month: "Apr", value: 85 },
  { month: "May", value: 90 },
];

const PerformanceCharts = () => {
  return (
    <div className="row g-4 mb-4">

      {/* Bar Chart */}
      <div className="col-12 col-xl-6">
        <div
          className="bg-white h-100"
          style={{
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1e2b4f",
              marginBottom: "20px",
            }}
          >
            Performance Overview
          </h3>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip />
              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                fill="#2156f4"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="col-12 col-xl-6">
        <div
          className="bg-white h-100"
          style={{
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1e2b4f",
              marginBottom: "20px",
            }}
          >
            Performance Trend
          </h3>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={4}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default PerformanceCharts;