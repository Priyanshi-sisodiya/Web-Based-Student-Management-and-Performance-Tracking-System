import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A (90-100%)", value: 31 },
  { name: "B (80-89%)", value: 44 },
  { name: "C (70-79%)", value: 19 },
  { name: "D (60-69%)", value: 6 },
  { name: "F (<60%)", value: 0 },
];

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#F97316",
  "#EF4444",
];

const GradePieChart = () => {
  return (
    <div className="w-100 h-100">

      {/* Header */}
      <h3
        className="fw-semibold mb-4"
        style={{
          fontSize: "24px",
          color: "#1e2b4f",
        }}
      >
        Grade Distribution
      </h3>

      {/* Layout */}
      <div className="row align-items-center g-3">

        {/* Left Labels */}
        <div className="col-xl-3 col-12 order-2 order-xl-1">
          <div className="d-flex flex-column gap-3 text-center text-xl-start">

            <div
              className="fw-medium"
              style={{ color: "#3B82F6", fontSize: "15px" }}
            >
              B (80-89%) : 44%
            </div>

            <div
              className="fw-medium"
              style={{ color: "#10B981", fontSize: "15px" }}
            >
              A (90-100%) : 31%
            </div>

          </div>
        </div>

        {/* Chart */}
        <div className="col-xl-6 col-12 order-1 order-xl-2">
          <div
            className="mx-auto"
            style={{
              width: "100%",
              height: "300px",
              minHeight: "300px",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={105}
                  innerRadius={55}
                  paddingAngle={2}
                  stroke="#ffffff"
                  strokeWidth={2}
                >
                  {data.map((item, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Labels */}
        <div className="col-xl-3 col-12 order-3">
          <div className="d-flex flex-column gap-3 text-center text-xl-start">

            <div
              className="fw-medium"
              style={{ color: "#F59E0B", fontSize: "15px" }}
            >
              C (70-79%) : 19%
            </div>

            <div
              className="fw-medium"
              style={{ color: "#F97316", fontSize: "15px" }}
            >
              D (60-69%) : 6%
            </div>

            <div
              className="fw-medium"
              style={{ color: "#EF4444", fontSize: "15px" }}
            >
              F (&lt;60%) : 0%
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GradePieChart;