import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ---------------- DATA ----------------
const projectsData = [
  { month: "Jan", projects: 5 },
  { month: "Feb", projects: 8 },
  { month: "Mar", projects: 12 },
  { month: "Apr", projects: 10 },
  { month: "May", projects: 15 },
  { month: "Jun", projects: 16 },
  { month: "Jul", projects: 19 },
];

const skillsData = [
  { name: "Frontend", value: 45, color: "#8B5CF6" },
  { name: "Backend", value: 25, color: "#3B82F6" },
  { name: "Database", value: 15, color: "#10B981" },
  { name: "Tools", value: 15, color: "#F59E0B" },
];

// ---------------- COMPONENT ----------------
const ChartsSection = () => {
  const total = skillsData.reduce((sum, item) => sum + item.value, 0);  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* Projects Overview - Area Chart */}
      <div className="lg:col-span-2 bg-[#1a1f2e] rounded-xl p-6 border border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-semibold text-lg">Projects Overview</h3>
          <select className="bg-[#252b3d] text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700">
            <option>This Year</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={projectsData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#2d3348" vertical={false} />
            <XAxis dataKey="month" stroke="#6b7280" tickLine={false} axisLine={false} />
            <YAxis stroke="#6b7280" tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1a1f2e", border: "1px solid #2d3348", borderRadius: "8px" }}
              labelStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="projects"
              stroke="#8B5CF6"
              strokeWidth={2}
              fill="url(#colorProjects)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Skills Breakdown - Donut Chart */}
      <div className="bg-[#1a1f2e] rounded-xl p-6 border border-gray-800">
        <h3 className="text-white font-semibold text-lg mb-4">Skills Breakdown</h3>

        <div className="flex items-center mr-3 gap-6 content-center justify-center">
          <div className="relative w-40 h-40 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillsData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={2}
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-white text-2xl font-bold">{total}</span>
              <span className="text-gray-400 text-xs">Total</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {skillsData.map((item, index) => (
              <div key={index} className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="text-gray-300 text-sm">{item.name}</span>
                </div>
                <span className="text-white text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;