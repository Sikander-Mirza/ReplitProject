import React from "react";
import { BarChart3,DollarSign,CircleCheckBig,TriangleAlert,Users,Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,Cell,CartesianGrid } from "recharts";
import "./analytics.css";
import MonthlyComparison from "../../components/monthlycomparison/MonthlyComparison";
import YearlyDashboard from "../../components/YearlyDashboard/YearlyDashboard";
import RecentPayments from "../../components/recentpayment/RecentPayments";
import InvoiceSummary from "../../components/invoicesummary/InvoiceSummary";
import Alinsights from "../../components/AIInsights/aIinsights";
import MonthlyStats from "../../components/monthlystats/MonthlyStats";

const data = [
  { name: "februarie 2024", value: 85000, color: "#ff4d4d" },
  { name: "martie 2024", value: 190000 },
  { name: "aprilie 2024", value: 160000 },
  { name: "mai 2024", value: 158000 },
  { name: "iunie 2024", value: 240000 },
  { name: "iulie 2024", value: 180000 },
  { name: "august 2024", value: 185000 },
  { name: "septembrie 2024", value: 230000 },
  { name: "octombrie 2024", value: 210000 },
  { name: "noiembrie 2024", value: 250000 },
  { name: "decembrie 2024", value: 320000, color: "#00c875" },
  { name: "ianuarie 2025", value: 180000 },
  { name: "februarie 2025", value: 130000 },
  { name: "martie 2025", value: 190000 },
  { name: "aprilie 2025", value: 100000 },
  { name: "mai 2025", value: 160000 },
  { name: "iunie 2025", value: 250000 },
  { name: "iulie 2025", value: 220000 },
  { name: "august 2025", value: 210000 },
  { name: "septembrie 2025", value: 200000 },
];

const AnalyticsDashboard = () => {
  return (
    <>
    <div className="container-fluid analytics-dashboard py-4 px-3">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-start mb-4 dashboard-header">
  <div className="dashboard-title-section mb-3 mb-md-0">
    <div className="d-flex align-items-center mb-2">
      <BarChart3 size={36} className="me-2 text-primary" />
      <h2 className="dashboard-title mb-0">Analytics Dashboard</h2>
      
    </div>
    <p className="dashboard-subtitle mb-0" style={{marginLeft:"2px"}}>
      Analiză comprehensivă a performanței financiare și operaționale
    </p>
  </div>

  <div className="d-flex align-items-center search-btn">
    <select className="form-select me-3 period-select">
      <option>Ultimele 7 zile</option>
      <option>Ultima lună</option>
      <option>Ultimul an</option>
    </select>
    <button className="btn btn-success export-btn">
      <i className="bi bi-download me-2"></i> Export Date
    </button>
  </div>
</div>


      {/* Stats Row */}
      <div className="row g-3 mb-4">
       <div className="col-md-3 col-sm-6">
  <div className="card stat-card p-3">
    <div className="d-flex justify-content-between align-items-center mb-2">
      <p className="card-title mb-0">Total Facturat</p>
      <DollarSign size={22} className="" />
    </div>
    <h4 className="text-primary mb-1">€40,366,674.20</h4>
    <small className="">+12% față de luna trecută</small>
  </div>
</div>
        <div className="col-md-3 col-sm-6">
  <div className="card stat-card p-3">
    <div className="d-flex justify-content-between align-items-center mb-2">
      <p className="card-title mb-0">Total Plătit</p>
      <CircleCheckBig size={22} className="text-success" />
    </div>
    <h4 className="text-success mb-1">€3861758.66</h4>
    <small className="">95.7% din total</small>
  </div>
</div>
        <div className="col-md-3 col-sm-6">
  <div className="card stat-card p-3">
    <div className="d-flex justify-content-between align-items-center mb-2">
      <p className="card-title mb-0">Restanțe</p>
      <TriangleAlert size={22} className="text-danger" />
    </div>
    <h4 className="text-danger mb-1">€174915.54</h4>
    <small className="">4 companii cu restanțe</small>
  </div>
</div>
        <div className="col-md-3 col-sm-6">
  <div className="card stat-card p-3">
    <div className="d-flex justify-content-between align-items-center mb-2">
      <p className="card-title mb-0">Companii Active</p>
      <Users size={22} className="" />
    </div>
    <h4 className=" mb-1">6</h4>
    <small className="">Plată medie: €8639.28</small>
  </div>
</div>
      </div>
    
      {/* Chart Section */}
      <div className="card chart-card">
        <div className="card-body">
          <h5 className="chart-title">
           <Target size={22} className=" text-success" />
           <span style={{marginLeft:"7px"}}>
            Analiză Lunara – Care sunt Lunile cele mai Bune?
            </span>
          </h5>
          <p className="chart-subtitle">
            Identifică lunile cu cele mai mari facturi pentru planificare strategică
          </p>
<div style={{ width: "100%", overflowX: "auto" }}>
  <div style={{ minWidth: 500 }}> {/* You can tweak minWidth if needed */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#b8b8b8ff"/>
              <XAxis dataKey="name" tick={{ fill: "#fff", fontSize: 11 }} angle={-35} textAnchor="end" interval={0} height={70} />
              <YAxis tick={{ fill: "#ccc", fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }} labelStyle={{ color: "#fff" }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#3b82f6">
  {data.map((entry, index) => (
    <Cell
      key={`cell-${index}`}
      fill={
        entry.name.includes("decembrie")
          ? "#00c875" // ✅ Green for December
          : entry.name.includes("ianuarie 2024")
          ? "#ff4d4d" // ✅ Red for January
          : entry.color || "#3b82f6" // Default Blue
      }
    />
  ))}
</Bar>

            </BarChart>
            
          </ResponsiveContainer>
           </div>
</div>
        </div>
      </div>
    </div>
     <MonthlyStats/>
    <MonthlyComparison/>
    <YearlyDashboard/>
    <RecentPayments/>
    <InvoiceSummary/>
    <Alinsights/>

    </>
  );
};

export default AnalyticsDashboard;
