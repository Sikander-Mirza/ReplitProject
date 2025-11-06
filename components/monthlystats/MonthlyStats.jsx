import React from 'react';
import { Trophy, BarChart3, TrendingDown, TrendingUp } from 'lucide-react';
import './MonthlyStats.css';

export default function MonthlyStats() {
  const topMonths = [
    {
      position: 1,
      icon: '🥇',
      month: 'decembrie 2024',
      amount: '€316.215,68',
      rating: 'EXCELENT',
      ratingClass: 'rating-excellent'
    },
    {
      position: 2,
      icon: '🥈',
      month: 'noiembrie 2024',
      amount: '€265.232,92',
      rating: 'FOARTE BUN',
      ratingClass: 'rating-very-good'
    },
    {
      position: 3,
      icon: '🥉',
      month: 'septembrie 2024',
      amount: '€254.564,94',
      rating: 'BUN',
      ratingClass: 'rating-good'
    },
    {
      position: 4,
      icon: '4️⃣',
      month: 'iunie 2025',
      amount: '€248.836,86',
      rating: 'OK',
      ratingClass: 'rating-ok'
    },
    {
      position: 5,
      icon: '5️⃣',
      month: 'iunie 2024',
      amount: '€232.082,57',
      rating: 'OK',
      ratingClass: 'rating-ok'
    }
  ];

  return (
    <div className="stats-dashboard">
      <div className="container-fluid px-3 px-md-4 py-4">
        {/* Top Stats Cards */}
        <div className="row g-3 g-md-4 mb-4 d-flex flex-row justify-content-center align-item-center">
          {/* Best Month Card */}
          <div className="col-12 col-lg-4">
            <div className="stat-card stat-card-green d-flex flex-column justify-content-center align-item-center text-center">
              <div className="stat-header d-flex align-items-center justify-content-center">

                <span className="stat-title text-success">🏆 LUNA CEA MAI BUNĂ</span>
              </div>
              <div className="stat-month">decembrie 2024</div>
              <div className="stat-amount stat-amount-green">€316.215,68</div>
            </div>
          </div>

          {/* Average Month Card */}
          <div className="col-12 col-lg-4">
            <div className="stat-card stat-card-blue d-flex flex-column justify-content-center align-item-center text-center">
              <div className="stat-header d-flex align-items-center justify-content-center">

                <span className="stat-title text-primary">📊 MEDIA LUNARĂ</span>
              </div>
              <div className="stat-month">Pe 20 luni</div>
              <div className="stat-amount stat-amount-blue">€201.833,71</div>
            </div>
          </div>

          {/* Worst Month Card */}
          <div className="col-12 col-lg-4">
            <div className="stat-card stat-card-red d-flex flex-column justify-content-center align-item-center text-center">
              <div className="stat-header d-flex align-items-center justify-content-center">
                
                <span className="stat-title text-danger">📉 LUNA CEA MAI SLABĂ</span>
              </div>
              <div className="stat-month">februarie 2024</div>
              <div className="stat-amount stat-amount-red">€97.158,06</div>
            </div>
          </div>
        </div>

        {/* Top 5 Months Table */}
        <div className="table-section">
          <div className="table-header">
            <TrendingUp size={22} className="table-header-icon" />
            <h2 className="table-title">Top 5 Luni cu Cele Mai Mari Facturi</h2>
          </div>

          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th className="col-position">Poziție</th>
                  <th className="col-month">Luna</th>
                  <th className="col-amount">Sumă Facturată</th>
                  <th className="col-rating">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topMonths.map((item) => (
                  <tr key={item.position} className="table-row">
                    <td className="cell-position">
                      <span className="position-icon">{item.icon}</span>
                    </td>
                    <td className="cell-month">{item.month}</td>
                    <td className="cell-amount">{item.amount}</td>
                    <td className="cell-rating">
                      <span className={`rating-badge ${item.ratingClass}`}>
                        {item.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}