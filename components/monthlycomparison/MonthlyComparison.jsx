import React from "react";
import "./MonthlyComparison.css";
import { Calendar } from "lucide-react";
const data = [
  {
    month: "Ianuarie",
    year2024: 0,
    year2025: 200489.02,
    difference: "€200.489,02",
    percent: null,
    better: "2025",
  },
  {
    month: "Februarie",
    year2024: 97158.06,
    year2025: 152165.47,
    difference: "€55.007,41",
    percent: "+56.6%",
    better: "2025",
  },
  {
    month: "Martie",
    year2024: 194546.41,
    year2025: 229794.22,
    difference: "€35.247,81",
    percent: "+18.1%",
    better: "2025",
  },
  {
    month: "Aprilie",
    year2024: 159082.66,
    year2025: 108465.47,
    difference: "€50.617,19",
    percent: "-31.8%",
    better: "2024",
  },
];

const MonthlyComparison = () => {
  return (
    <div className="container-fluid py-4">
      <div className="comparison-box p-4 rounded">
        <h4 className="mb-1 fw-bold text-white">
          <Calendar/> Comparație Lunară - 2024 vs 2025
        </h4>
        <p className="text-muted mb-4">
          Analiză side-by-side a performanței pentru fiecare lună din an
        </p>

        {data.map((item, index) => (
          <div key={index} className="month-section mb-4 p-3 rounded bg-dark-2">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="text-white mb-0">
                {item.month}{" "}
                <span
                  className={`badge ${
                    item.better === "2025"
                      ? "text-success"
                      : "text-primary"
                  } ms-2`}
                >
                  {item.better === "2025"
                    ? "↗️2025 câștigă"
                    : "⬇️2024 mai bun"}
                </span>
              </h5>
              {item.percent && (
                <span
                  className={`fw-semibold ${
                    item.percent.startsWith("+")
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {item.percent}
                </span>
              )}
            </div>

            {/* 2024 Bar */}

{/* 2024 Row */}
<div className="progress-row">
  <span className="year-label">2024</span>
  <div className="progress flex-grow-1 mx-2 progress-custom">
    <div
      className="progress-bar bg-primary"
      style={{
        width:
          item.year2024 > 0
            ? `${
                (item.year2024 / Math.max(item.year2024, item.year2025)) * 100
              }%`
            : "0%",
      }}
    ></div>
  </div>
  <span className="year-value">
    {item.year2024 > 0 ? `€${item.year2024.toLocaleString()}` : "Fără date"}
  </span>
</div>


            <div className="progress-row mb-2 mt-3">
  <span className="year-label">2025</span>
  <div className="progress flex-grow-1 mx-2 progress-custom">
    <div
      className="progress-bar bg-success"
      style={{
        width: `${
          (item.year2025 / Math.max(item.year2024, item.year2025)) * 100
        }%`,
      }}
    ></div>
  </div>
  <span className="year-value">€{item.year2025.toLocaleString()}</span>
</div>



            {/* Difference */}
            <p className="mt-2 text-muted small mb-0 d-flex justify-content-center">
              Diferența: <span className="text-white">{item.difference}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyComparison;
