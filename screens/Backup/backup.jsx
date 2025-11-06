import React from 'react';
import { Clock, Database, HardDrive, CheckCircle, Shield, Download, AlertTriangle } from 'lucide-react';
import "./BackupSecurity.css"
export default function BackupSecurityDashboard() {
  const backups = [
    {
      id: 1,
      filename: 'backup-2025-10-08T14-07-00-681Z.json',
      date: '08 oct 2025, 07:07',
      records: 1464,
      size: '38.24 MB',
      type: 'automatic',
      badge: 'Cel mai recent'
    },
    {
      id: 2,
      filename: 'backup-2025-10-07T15-10-50-237Z.json',
      date: '07 oct 2025, 08:10',
      records: 1464,
      size: '38.24 MB',
      type: 'manual',
      badge: null
    }
  ];

  return (
    <div className="min-vh-100" style={{ background: '#000000' }}>
      <div className="container-fluid px-4 py-4">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <Shield size={24} className="text-primary" />
              <h1 className="text-white mb-0 fw-bold">Backup & Security</h1>
            </div>
            <p className="text-secondary mb-0">Gestionea backup-urilor automate și securitatea datelor</p>
          </div>
          <button className="btn btn-primary d-flex align-items-center gap-2 px-4 mt-3 mt-md-0">
            <Download size={18} />
            <span>Crează Backup Manual</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: '#111111' }}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Clock size={16} className="text-secondary" />
                  <span className="text-secondary small">Ultimul Backup</span>
                </div>
                <h4 className="text-white fw-bold mb-1">Invalid Date</h4>
                <p className="text-secondary small mb-0">38.24 MB</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: '#111111' }}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Database size={16} className="text-secondary" />
                  <span className="text-secondary small">Total Backup-uri</span>
                </div>
                <h4 className="text-white fw-bold mb-1">10</h4>
                <p className="text-secondary small mb-0">Păstrate automat ultimele 10</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: '#111111' }}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <HardDrive size={16} className="text-secondary" />
                  <span className="text-secondary small">Spațiu Utilizat</span>
                </div>
                <h4 className="text-white fw-bold mb-1">379.4 MB</h4>
                <p className="text-secondary small mb-0">Pe toate backup-urile</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: '#111111' }}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle size={16} className="text-success" />
                  <span className="text-secondary small">Status Sistem</span>
                </div>
                <h4 className="text-success fw-bold mb-1">Activ</h4>
                <p className="text-secondary small mb-0">Backup automat zilnic la 02:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Section */}
        <div className="card border-0 mb-4" style={{ background: '#111111' }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-2 mb-4">
              <Shield size={20} className="text-white" />
              <h5 className="text-white mb-0 fw-bold">Configurări Backup Automat</h5>
            </div>
            
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <h6 className="text-white mb-3">Frecvență</h6>
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span className="text-white">Zilnic la 02:00 AM</span>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h6 className="text-white mb-3">Retenție</h6>
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span className="text-white">Ultimele 10 backup-uri</span>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h6 className="text-white mb-3">Include</h6>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2">
                    {/* <CheckCircle size={14} className="text-success" /> */}
                    <span className="text-white small">✓ Date utilizatori</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {/* <CheckCircle size={14} className="text-success" /> */}
                    <span className="text-white small">✓ Companii și șoferi</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {/* <CheckCircle size={14} className="text-success" /> */}
                    <span className="text-white small">✓ Procesări săptămânale</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {/* <CheckCircle size={14} className="text-success" /> */}
                    <span className="text-white small">✓ Istoric plăți</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backup History */}
        <div className="card border-0 mb-4" style={{ background: '#111111' }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-2 mb-4">
              <Database size={20} className="text-white" />
              <h5 className="text-white mb-0 fw-bold">Istoric Backup-uri (10)</h5>
            </div>

             <div className="d-flex flex-column gap-3">
      {backups.map((backup) => (
        <div key={backup.id} className="backup-card">
          {/* Left Section */}
          <div className="flex-grow-1 w-100">
            <div className="d-flex flex-wrap align-items-center gap-2 mb-2" style={{ wordBreak: 'break-word' }}>
              <span className="text-white fw-semibold">{backup.filename}</span>
              {backup.badge && <span className="badge">{backup.badge}</span>}
            </div>

            <div className="d-flex flex-wrap gap-3 text-secondary small">
              <div className="d-flex align-items-center gap-1">
                <Clock size={14} />
                <span>{backup.date}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <Database size={14} />
                <span>{backup.records} înregistrări</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <HardDrive size={14} />
                <span>{backup.size}</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="backup-actions">
            <span className="backup-type">{backup.type}</span>
            <button className="btn btn-sm backup-btn">
              <Download size={14} />
              <span>Descarcă</span>
            </button>
          </div>
        </div>
      ))}
    </div>



          </div>
        </div>

        {/* Security Recommendations */}
        <div 
          className="card border-0"
          style={{ 
            background: '#1a0f00',
            border: '1px solid #4a3000'
          }}
        >
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <AlertTriangle size={20} className="text-warning" />
              <h5 className="text-warning mb-0 fw-bold">Recomandări de Securitate</h5>
            </div>

            <ul className="list-unstyled mb-0">
              <li className="text-warning mb-2">• Backup-urile sunt create automat zilnic pentru siguranță maximă</li>
              <li className="text-warning mb-2">• Se păstrează ultimele 10 backup-uri pentru economisirea spațiului</li>
              <li className="text-warning mb-2">• Pentru securitate suplimentară, consideră exportarea backup-urilor pe drive extern</li>
              <li className="text-warning mb-0">• Verifică periodic că backup-urile sunt create cu succes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}