import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Grade 10-A", value: 88 },
  { name: "Grade 10-B", value: 75 },
  { name: "Grade 11-A", value: 81 },
  { name: "Grade 11-B", value: 72 },
];

const ClassBarChart = () => {
  return (
    <div className="w-100 h-100">

      {/* Title */}
      <h3
        className="fw-semibold mb-4"
        style={{
          fontSize: "24px",
          color: "#1e2b4f",
        }}
      >
        Class-wise Average Performance
      </h3>

      {/* Chart */}
      <div
        style={{
          width: "100%",
          height: "320px",
          minHeight: "320px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 10,
            }}
            barCategoryGap="18%"
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#dbe3f0"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "#5d6c87",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{
                fill: "#5d6c87",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                fill: "rgba(33,86,244,0.06)",
              }}
            />

            <Bar
              dataKey="value"
              fill="#2f63df"
              radius={[10, 10, 0, 0]}
              maxBarSize={70}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default ClassBarChart;