import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { name: "Mathematics", average: 85, students: 32 },
  { name: "English Literature", average: 88, students: 28 },
  { name: "Physics", average: 80, students: 26 },
  { name: "Chemistry", average: 84, students: 24 },
  { name: "Biology", average: 89, students: 23 },
  { name: "History", average: 90, students: 21 },
  { name: "Computer Science", average: 86, students: 30 },
];

const SubjectBarChart = () => {
  return (
    <div className="w-full">

      {/* Title */}
      <h3 className="text-[22px] font-semibold text-[#1e2b4f] mb-8">
        Subject-wise Performance
      </h3>

      {/* Chart */}
      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={10}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#dbe3f0"
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "#5d6c87", fontSize: 14 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fill: "#5d6c87", fontSize: 14 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Legend
              verticalAlign="bottom"
              height={45}
              iconType="square"
            />

            {/* Blue legend bar */}
            <Bar
              dataKey="average"
              name="Average %"
              fill="#2156f4"
              radius={[8, 8, 0, 0]}
            />

            {/* Yellow bars */}
            <Bar
              dataKey="students"
              name="Students"
              fill="#f4b400"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default SubjectBarChart;