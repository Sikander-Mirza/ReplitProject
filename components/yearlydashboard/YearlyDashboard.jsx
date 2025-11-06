import React from "react";
import "./YearlyDashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const YearlyDashboard = () => {
  const barData = [
    { name: "Fast Express", an2024: 2400000, an2025: 2200000 },
    { name: "DE Cargo Speed", an2024: 650000, an2025: 620000 },
    { name: "Toma SRL", an2024: 300000, an2025: 280000 },
    { name: "DE Cargo Speed", an2024: 650000, an2025: 620000 },
    { name: "DE Cargo Speed", an2024: 650000, an2025: 620000 },
  ];

  const pieData = [
    { name: "Fast Express", value: 58, color: "#3b82f6" },
    { name: "Stef Trans ", value: 18, color: "#10b981" },
    { name: "DE Cargo ", value: 13, color: "#f59e0b" },
    { name: "Daniel ", value: 8, color: "#ef4444" },
    { name: "Toma SRL", value: 4, color: "#8b5cf6" },
  ];

  return (
    <div className="container-fluid py-4 yearly-dashboard">
      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="summary-card1 border-primary p-4 rounded d-flex flex-column text-center">
            <h6 className="text-primary mb-2">
              📊 ANUL <span className="fw-bold">2024</span>
            </h6>
            <h4 className="fw-bold text-light">11 luni active</h4>
            <h3 className="fw-bold text-primary">€2.245.144,82</h3>
            <p className="text-muted mb-0">Media: €204.104,07/lună</p>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="summary-card2 border-success p-4 rounded d-flex flex-column text-center">
            <h6 className="text-success mb-2">
              🚀 ANUL <span className="fw-bold">2025</span>
            </h6>
            <h4 className="fw-bold text-light">9 luni active</h4>
            <h3 className="fw-bold text-success">€1.791.529,38</h3>
            <p className="text-muted mb-0">Media: €199.058,82/lună</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row">
        {/* Bar Chart */}
        <div className="col-lg-6 mb-4">
          <div className="chart-card p-3 rounded">
            <h5 className="text-white mb-3">Performanța Companiilor (Top 5)</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="an2024" fill="#3b82f6" name="2024" />
                <Bar dataKey="an2025" fill="#10b981" name="2025" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart with Scroll on Mobile */}
        <div className="col-lg-6 mb-4">
          <div className="chart-card p-3 rounded pie-scroll-container">
            <h5 className="text-white mb-3">Distribuția Facturării</h5>

            <div className="pie-chart-scroll">
              <div style={{ minWidth: 400 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
  data={pieData}
  cx="50%"
  cy="50%"
  labelLine={false}
  label={({ name, value }) => `${name} ${value}%`}
  outerRadius={110}
  fontSize={12.5}
  fill="#8884d8"
  dataKey="value"
  isAnimationActive={false}
>
  {pieData.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={entry.color} />
  ))}
</Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyDashboard;
