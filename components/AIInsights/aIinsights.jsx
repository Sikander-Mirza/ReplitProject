import React from 'react';
import {
  Target,
  Building2,
  Lightbulb,
  Calendar,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import './alinsights.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alinsights() {
  return (
    <>
    <div className="container-fluid py-4 dashboard-container">
      <div className="container dashboard-wrapper">
        {/* Header Section */}
        <div className="dashboard-header text-center text-md-start mb-4">
  <div className="d-flex align-items-start justify-content-center justify-content-md-start gap-2 flex-wrap">
    {/* Left Icon Section */}
    <div className="d-flex flex-column align-items-center align-items-md-start">
      <Target className="header-icon" size={28} />
      <h2 className="mb-0"></h2>
    </div>

    {/* Right Text Section */}
    <div className="text-center text-md-start">
      <h1 className="dashboard-title1 mb-1 text-break">
        Analiză Inteligentă AI - Insights Strategice
      </h1>
      <p className="dashboard-subtitle mb-0 text-muted">
        Analize avansate bazate pe datele tale de business
      </p>
    </div>
  </div>
</div>



        {/* Growth Analysis */}
        <div className="insight-card p-3 mb-4 shadow-sm rounded bg-dark text-light">
          <div className="card-header-section d-flex align-items-center gap-2 mb-3">
            <TrendingUp className="section-icon text-success" size={20} />
            <h2 className="section-title h5 mb-0" style={{color:"#d4b4fe"}}>Analiza Creșterii</h2>
          </div>
          <div className="card-content">
            <p className="mb-2 small">
              <span className="fw-semibold ">Trend pozitiv:</span> În{' '}
              <span className="highlight-year">2025</span> ai procesat deja 9 luni
              cu o medie de{' '}
              <span className="highlight-green">€199.058,82</span> pe lună,
              comparativ cu media de €204.104,075 din 2024 (
              <span className="highlight-red">-2.5%</span> scădere).
            </p>
            <p className="mb-0 small">
              <span className="fw-semibold text-bold">Volum de business:</span> Cu
              un total facturat de{' '}
              <span className="highlight-cyan">€4.036.674,2</span> și o rată de
              colectare de <span className="highlight-green">95.7%</span>,
              performanța financiară este excelentă.
            </p>
          </div>
        </div>

        {/* Portfolio Analysis */}
        <div className="portfolio-analysis p-3 mb-4 shadow-sm rounded bg-dark text-light">
          <div className="card-header-section d-flex align-items-center gap-2 mb-3">
            <Building2 className="section-icon text-warning" size={20} />
            <h2 className="section-title h5 mb-0" style={{color:"#93c2ef"}}>
              Analiza Portfolio Companii
            </h2>
          </div>
          <div className="card-content">
            <p className="mb-2 small">
              <span className="fw-semibold ">Concentrarea riscului:</span>{' '}
              Top 3 companii (Fast Express, Stef Trans S.R.L., DE Cargo Speed)
              reprezintă <span className="highlight-white">86.3%</span> din total.
              Concentrare ridicată - consideră diversificarea.
            </p>
            <p className="mb-0 small">
              <span className="fw-semibold ">Top performer:</span> Fast
              Express generează{' '}
              <span className="highlight-green">€2.285.041,11</span> (56.6% din
              total).
            </p>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="strategic-recommendation p-3 mb-4 shadow-sm rounded bg-dark text-light">
          <div className="card-header-section d-flex align-items-center gap-2 mb-3">
            <Lightbulb className="section-icon text-warning" size={20} />
            <h2 className="section-title h5 mb-0" style={{color:"#86efac"}}>Recomandări Strategice</h2>
          </div>
          <div className="card-content">
            <div className="recommendation-item mb-2 small d-flex align-items-start">
              <span className="recommendation-icon red me-2">🔴</span>
              <span>
                <span className="fw-semibold">Prioritate înaltă:</span> Există{' '}
                <span className="highlight-red">€174,915.54</span> restanțe care
                afectează cash flow-ul. Implementează un sistem de urmărire
                agresiv.
              </span>
            </div>

            <div className="recommendation-item mb-2 small d-flex align-items-start">
              <span className="recommendation-icon blue me-2">📅</span>
              <span>
                <span className="fw-semibold">Momentum pozitiv:</span> 6 luni din
                2025 depășesc performanța din 2024.
              </span>
            </div>

            <div className="recommendation-item small d-flex align-items-start">
              <span className="recommendation-icon purple me-2">🎯</span>
              <span>
                <span className="fw-semibold">Obiectiv recomandat:</span> Țintește
                o medie lunară de{' '}
                <span className="highlight-purple">€234.719,686</span> (+15% față
                de 2024).
              </span>
            </div>
          </div>
        </div>

        {/* Seasonal Patterns */}
        <div className=" p-3 shadow-sm rounded bg-dark text-light seasonal-pattern">
          <div className="card-header-section d-flex align-items-center gap-2 mb-3">
            <Calendar className="section-icon text-info" size={20} />
            <h2 className="section-title h5 mb-0" style={{color:"#ee9e5a"}}>Patterns Sezoniere</h2>
          </div>
          <p className="small mb-0">
            <span className="fw-semibold">Variabilitate săptămânală:</span>{' '}
            Între <span className="highlight-green">€18.691,07</span> și{' '}
            <span className="highlight-cyan">€81.025,531</span>. Variabilitate mare –
            optimizează planificarea.
          </p>
        </div>
      </div>
      
    </div>
    <div className="container-fluid py-4">
      <div
        className="p-4 rounded"
        style={{
          maxWidth:"1400px",
          margin: "0 auto",
          backgroundColor: '#150c0c',
          border: '1px solid #ff6e6e',
          color: '#ff9999',
        }}
      >
        <div className="d-flex align-items-center gap-2 mb-3">
          <Calendar size={22} color="#ff6e6e" />
          <h2
            className="h5 mb-0 fw-semibold"
            style={{ color: '#ff6e6e' }}
          >
            Patterns Sezoniere
          </h2>
        </div>

        <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
          Există 1 companii cu restanțe în valoare totală de{' '}
          
          între{' '}
          <span style={{ color: '#ff6e6e', fontWeight: '600' }}>
            €108084.93
          </span>{' '}
          și{' '}
          Consideră urmărirea acestor plăți pentru o mai bună cash flow.
        </p>
      </div>
    </div>
</>
  );
}
