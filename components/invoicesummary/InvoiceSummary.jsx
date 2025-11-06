import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './InvoiceSummary.css';

export default function InvoiceSummary() {
  const invoiceData = [
    {
      id: 1,
      period: '28 sept. - 4 oct.',
      badge: 'Cea mai recentă',
      amount: '€43.120,47',
      trend: -22.2,
      trendLabel: 'Scădere detectată!',
      icon: '↘️'
    },
    {
      id: 2,
      period: '21 sept. 2025 - 27 sept. 2025',
      amount: '€55.460,24',
      trend: -6.4,
      trendLabel: 'Scădere detectată!',
      icon: '↘️'
    },
    {
      id: 3,
      period: '14 sept. 2025 - 20 sept. 2025',
      amount: '€59.283,98',
      trend: 0.1,
      trendLabel: null,
      icon: '↗️'
    },
    {
      id: 4,
      period: '7 sept. 2025 - 13 sept. 2025',
      amount: '€59.230,61',
      trend: 21.4,
      trendLabel: null,
      icon: '↗️'
    },
    {
      id: 5,
      period: '31 aug. 2025 - 6 sept. 2025',
      amount: '€48.794,99',
      trend: 21.8,
      trendLabel: null,
      icon: '↗️'
    },
    {
      id: 6,
      period: '24 aug. 2025 - 30 aug. 2025',
      amount: '€40.057,57',
      trend: -12.2,
      trendLabel: 'Scădere detectată!',
      icon: '↘️'
    },
    {
      id: 7,
      period: '17 aug. 2025 - 23 aug. 2025',
      amount: '€45.624,22',
      trend: -7.5,
      trendLabel: 'Scădere detectată!',
      icon: '↘️'
    },
    {
      id: 8,
      period: '10 aug. 2025 - 16 aug. 2025',
      amount: '€49.347,81',
      trend: 2.8,
      trendLabel: null,
      icon: '↗️'
    }
  ];

  return (
    <div className="invoice-summary-container">
      <div className="invoice-summary-card">
        {/* Header */}
        <div className="invoice-header">
          <div className="invoice-title-wrapper">
            <TrendingUp size={28} className="invoice-icon" />
            <div>
              <h2 className="invoice-title">Sume Facturate pe Săptămână</h2>
              <p className="invoice-subtitle">
                Urmărește tendințele facturării săptămânale pentru a identifica scăderi
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="invoice-table-wrapper">
          <table className="invoice-table">
            <thead>
              <tr>
                <th className="col-period">Săptămână</th>
                <th className="col-amount">Sumă Facturată</th>
                <th className="col-trend">Tendință</th>
                <th className="col-change">Schimbare</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((invoice) => (
                <tr key={invoice.id} className="invoice-row">
                  <td className="col-period">
                    <div className="period-wrapper">
                      <span className="period-text">{invoice.period}</span>
                      {invoice.badge && (
                        <span className="period-badge">{invoice.badge}</span>
                      )}
                    </div>
                  </td>
                  <td className="col-amount">
                    <span className="amount-text">{invoice.amount}</span>
                  </td>
                  <td className="col-trend">
                    <div className="trend-icon-wrapper">
                      <span className="trend-emoji">{invoice.icon}</span>
                    </div>
                  </td>
                  <td className="col-change">
                    <div className="change-wrapper">
                      <span className={`change-percentage ${invoice.trend < 0 ? 'negative' : 'positive'}`}>
                        {invoice.trend > 0 ? '+' : ''}{invoice.trend}%
                      </span>
                      {invoice.trendLabel && (
                        <span className="change-label">{invoice.trendLabel}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Stats */}
        <div className="invoice-footer">
          <div className="footer-stat">
            <span className="footer-label">Media Săptămânală</span>
            <span className="footer-value footer-value-blue">€46.398,55</span>
          </div>
          <div className="footer-stat">
            <span className="footer-label">Cea mai mare săptămână</span>
            <span className="footer-value footer-value-green">€81.025,53</span>
          </div>
          <div className="footer-stat">
            <span className="footer-label">Cea mai mică săptămână</span>
            <span className="footer-value footer-value-orange">€18.691,07</span>
          </div>
        </div>
      </div>
    </div>
  );
}