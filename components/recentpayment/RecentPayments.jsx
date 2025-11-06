import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./RecentPayments.css";

const data = [
  { date: "29 sept.", amount: 30000 },
  { date: "30 sept.", amount: 7000 },
  { date: "10 oct.", amount: 6000 },
  { date: "10 oct.", amount: 8200 },
  { date: "10 oct.", amount: 100 },
  { date: "10 oct.", amount: 32000 },
];

export default function RecentPayments() {
  return (
    <div className="card recent-payments-card bg-transparent text-light border-0 p-4">
      <h3 className="fw-bold mb-4">Tendința Plăților Recente</h3>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2b6ff2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2b6ff2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="date" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e1e",
                border: "none",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#2b6ff2"
              fillOpacity={1}
              fill="url(#colorAmount)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
