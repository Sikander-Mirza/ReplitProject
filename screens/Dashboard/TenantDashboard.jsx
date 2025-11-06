import React, { useState,useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Calendar,
  Upload,
  Bell,
  LogOut,
  BarChart3,
  FileText,
  DollarSign,
  TrendingUp,
  Truck,
  Settings,
  Clock,
  UserCheck,
  Lock,
  Plus,
  Edit,
  Check,
  Building,
  XCircle
} from 'lucide-react';
import { logout } from '../../services/authservices/authservices';
import { cancelSubscription } from '../../services/tenantservices/tenantservices';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import './TenantDashboard.css';

export default function TenantDashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 9, 29)); // October 29, 2025
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9, 1));
const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const alerts = [
    {
      id: 1,
      title: 'în saptamana Aug 17 - Aug 23 Geanta a facut curse cu camionul meu pentru 3 zile',
      description: 'în saptamana Aug 17 - Aug 23 Geanta a facut curse cu camionul meu pentru 3 zile  trebuie sa ii platesc diurna si salariu pentru 3 zile 3x87 euro plus salariu pe tara trebuie scazuta 2589 euro de la Toma'
    },
    {
      id: 2,
      title: 'atentie sumele din Jun 30 - Jul 6 2024 sunt facute de Batasus cu camionul meu',
      description: '320.16 2519.65   euro\nsumele din Jun 30 - Jul 6 sunt facute de Batasus cu camionul meu, trebuie platita diurna de mine'
    },
    {
      id: 3,
      title: 'atentie sumele din Jun 30 - Jul 6 2024 sunt facute de Batasus cu camionul meu',
      description: '320.16 2519.65   euro\nsumele din Jun 30 - Jul 6 sunt facute de Batasus cu camionul meu, trebuie platita diurna de mine'
    }
  ];




  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };


 const navigate = useNavigate();

  const handleLogout = async () => {
  if (isLoggingOut) return; // 🚫 prevent multiple clicks
  setIsLoggingOut(true);

  try {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("⚠️ No active session found.");
      navigate("/");
      return;
    }

    const res = await logout(token);
    console.log(res);

    toast.success("✅ Logged out successfully!");

    // Clear user data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
        localStorage.removeItem("intro_eligible");
        localStorage.removeItem("subscription");

    // Redirect after short delay
    setTimeout(() => {
      navigate("/");
      setIsLoggingOut(false);
    }, 800);
  } catch (error) {
    console.error("Logout failed:", error);
    toast.error("❌ Logout failed. Please try again.");
    setIsLoggingOut(false);
  }
};


 const handleCancel = async () => {
  // Show confirmation popup
  const result = await Swal.fire({
    title: "Cancel Subscription?",
    text: "Are you sure you want to cancel your subscription? You’ll still have access until the end of the billing period.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Cancel",
    cancelButtonText: "No, Keep Subscription",
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#3d3d3d",
    reverseButtons: true,
    background: "#1f1f22",
    color: "#fff",
  });

  if (!result.isConfirmed) return; // User pressed Cancel

  try {
    setIsCancelling(true);

    const response = await cancelSubscription(false);
    console.log("📡 Cancel Subscription Response:", response);

    if (response?.message) {
      toast.success(`✅ ${response.message}`);
    } else if (response?.success) {
      toast.success("✅ Subscription canceled successfully!");
      navigate("/");
    } else {
      toast.error("❌ Failed to cancel subscription!");
    }
  } catch (err) {
    const errorMessage =
      err.response?.data?.message ||
      err.message ||
      "Error canceling subscription!";
    console.error("❌ Cancel subscription failed:", err);
    toast.error(`⚠️ ${errorMessage}`);
  } finally {
    setIsCancelling(false);
  }
};



  const generateCalendarDays = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0);
    const prevMonthDays = prevMonth.getDate();
    
    // Previous month days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, prevMonthDays - i)
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i)
      });
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleConfirmSelection = () => {
    setShowCalendar(false);
  };

  const isDateSelected = (date) => {
    return selectedDate && 
           date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const monthNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 
                     'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

  return (
    <div className="dashboard-container">
      {/* Header */}
<header className="dashboard-header">
      <div className="header-left">
        <div className="logo-container">
          <div className="logo-icon">
            <Truck size={24} />
          </div>
          <div>
            <h1 className="logo-title">Tenant #4 Dashboard</h1>
            <p className="logo-subtitle">Multi-Tenant Environment</p>
          </div>
        </div>
      </div>

      <div className="header-right">
        <button className="header-btn">
          <BarChart3 size={18} />
          <span>Limba</span>
        </button>

        <div className="theme-toggle">
          <span>🌙</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="toggle-slider"></span>
          </label>
          <span>☀️</span>
        </div>

        <button className="header-btn header-btn-primary">
          <BarChart3 size={18} />
          <span>Analytics</span>
        </button>

        <button className="header-btn header-btn-success">
          <Upload size={18} />
          <span>Backup</span>
        </button>

        <button className="header-btn">
          <Building size={18} />
          <span>Tenant #4</span>
        </button>

        {/* ✅ Cancel Subscription Button */}
<button className="header-btn header-btn-warning" onClick={handleCancel}>
  <XCircle size={18} />
  <span>{isCancelling ? "Cancelling..." : "Cancel Subscription"}</span>
</button>



        <button className="header-btn">
          <LogOut size={18} />
          <span>Ieșire din tenant</span>
        </button>

        <button className="header-btn">
          <UserCheck size={18} />
        </button>

        <button className="header-btn notification-btn">
          <Bell size={18} />
          <span className="notification-badge">1</span>
        </button>

        <button
          className="header-btn"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          <LogOut size={18} />
          <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
        </button>
      </div>
    </header>
 {/* 🔵 Confirmation Modal */}
{showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>Cancel Subscription</h2>
      <p>
        Are you sure you want to cancel your subscription? You’ll still
        have access until the end of the billing period.
      </p>

      <div className="modal-buttons">
        <button
          className="btn btn-secondary"
          onClick={() => setShowModal(false)}
          disabled={isCancelling}
        >
          No, Keep Subscription
        </button>
        <button
          className="btn btn-danger"
          onClick={handleCancelSubscription}
          disabled={isCancelling}
        >
          {isCancelling ? "Cancelling..." : "Yes, Cancel"}
        </button>
      </div>
    </div>
  </div>
)}



      <div className="dashboard-content">
        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stat-card">
              <div className="stat-content">
                <div>
                  <div className="stat-label">Restanțe</div>
                  <div className="stat-value text-danger">€179333.44</div>
                  <div className="stat-subtitle">16 companii cu restanțe</div>
                </div>
                <div className="stat-icon stat-icon-danger">
                  <AlertTriangle size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stat-card">
              <div className="stat-content">
                <div>
                  <div className="stat-label">Total Plăți</div>
                  <div className="stat-value text-success">447</div>
                  <div className="stat-subtitle">Plăți înregistrate</div>
                </div>
                <div className="stat-icon stat-icon-success">
                  <CheckCircle size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stat-card">
              <div className="stat-content">
                <div>
                  <div className="stat-label">Companii Active</div>
                  <div className="stat-value">412</div>
                  <div className="stat-subtitle">În sistem</div>
                </div>
                <div className="stat-icon stat-icon-primary">
                  <Users size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stat-card">
              <div className="stat-content">
                <div>
                  <div className="stat-label">Săptămâna Curentă</div>
                  <div className="stat-value">Nu este selectată</div>
                  <div className="stat-subtitle">Date procesate</div>
                </div>
                <div className="stat-icon stat-icon-purple">
                  <Calendar size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-section mb-4">
          <div className="nav-primary">
            <button className="nav-btn nav-btn-active">
              <Upload size={16} />
              <span>Încărcare</span>
            </button>
            <button className="nav-btn">
              <FileText size={16} />
              <span>Calcule și Totale</span>
            </button>
            <button className="nav-btn">
              <DollarSign size={16} />
              <span>Evidența Plăților</span>
            </button>
            <button className="nav-btn">
              <BarChart3 size={16} />
              <span>Evidență Plăți</span>
            </button>
            <button className="nav-btn">
              <TrendingUp size={16} />
              <span>Sumar Companii</span>
            </button>
            <button className="nav-btn">
              <BarChart3 size={16} />
              <span>Rapoarte</span>
            </button>
          </div>

          <div className="nav-secondary">
            <button className="nav-btn">
              <Truck size={16} />
              <span>Comenzi Transport</span>
            </button>
            <button className="nav-btn">
              <Settings size={16} />
              <span>Gestionare</span>
            </button>
            <button className="nav-btn">
              <Calendar size={16} />
              <span>Calendar</span>
            </button>
            <button className="nav-btn">
              <Clock size={16} />
              <span>Istoric Plăți</span>
            </button>
            <button className="nav-btn">
              <UserCheck size={16} />
              <span>Analiză Șoferi</span>
            </button>
            <button className="nav-btn">
              <Lock size={16} />
              <span>Închidere Anuală</span>
            </button>
          </div>

          <div className="nav-tertiary">
            <button className="nav-btn nav-btn-analytics">
              <BarChart3 size={16} />
              <span>Analytics</span>
            </button>
            <button className="nav-btn nav-btn-backup">
              <Upload size={16} />
              <span>Backup</span>
            </button>
            <button className="nav-btn nav-btn-alert">
              <AlertTriangle size={16} />
              <span>Alerte Sume Mici (2)</span>
            </button>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="alerts-section mb-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="alert-card">
              <div className="alert-content">
                <div className="alert-icon">
                  <AlertTriangle size={20} />
                </div>
                <div className="alert-text">
                  <div className="alert-title">{alert.title}</div>
                  <div className="alert-description">{alert.description}</div>
                </div>
              </div>
              <div className="alert-actions">
                <button className="btn-edit">
                  <Edit size={16} />
                  <span>Editează</span>
                </button>
                <button className="btn-resolve">
                  <Check size={16} />
                  <span>Rezolvat</span>
                </button>
              </div>
            </div>
          ))}

          <button className="btn-add-note">
            <Plus size={16} />
            <span>Adaugă notă nouă (3 active)</span>
          </button>
        </div>

        {/* File Upload Section */}
        <div className="files-section">
          <div className="files-header">
            <h2 className="files-title">Încărcați Fișierele</h2>
            <div className="files-controls">
              <span className="files-label">Săptămâna procesată:</span>
              <select className="form-select-tenant files-select">
                <option>Selectează săptămâna</option>
              </select>
              <button className="btn-calendar" onClick={() => setShowCalendar(true)}>
                <Calendar size={16} />
                <span>Calendar</span>
              </button>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="upload-card">
                <div className="upload-icon upload-icon-purple">
                  <FileText size={32} />
                </div>
                <h3 className="upload-title">Fișier TRIP</h3>
                <p className="upload-subtitle">Încarcă fișierul CSV cu datele de transport</p>
                <div className="upload-area">
                  <Upload size={32} className="upload-cloud" />
                  <p className="upload-text">Drag & drop sau click pentru upload</p>
                  <p className="upload-formats">csv files</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="upload-card">
                <div className="upload-icon upload-icon-green">
                  <FileText size={32} />
                </div>
                <h3 className="upload-title">Facturi 7 Zile</h3>
                <p className="upload-subtitle">Încarcă facturile cu plată la 7 zile</p>
                <div className="upload-area">
                  <Upload size={32} className="upload-cloud" />
                  <p className="upload-text">Drag & drop sau click pentru upload</p>
                  <p className="upload-formats">.xlsx, .xls, csv files</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="upload-card">
                <div className="upload-icon upload-icon-orange">
                  <FileText size={32} />
                </div>
                <h3 className="upload-title">Facturi 30 Zile</h3>
                <p className="upload-subtitle">Încarcă facturi cu plată la 30 zile</p>
                <div className="upload-area">
                  <Upload size={32} className="upload-cloud" />
                  <p className="upload-text">Selectează mai multe fișiere deodată (Ctrl+Click)</p>
                  <p className="upload-formats">.xlsx, .xls, csv files</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fab">
        <Upload size={24} />
      </button>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="calendar-overlay" onClick={() => setShowCalendar(false)}>
          <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
            <div className="calendar-header">
              <h3 className="calendar-title">Selectează Săptămâna</h3>
              <button className="calendar-close" onClick={() => setShowCalendar(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="calendar-navigation">
              <button className="calendar-nav-btn" onClick={handlePrevMonth}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <h4 className="calendar-month">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h4>
              <button className="calendar-nav-btn" onClick={handleNextMonth}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="calendar-grid">
              <div className="calendar-weekdays">
                <div className="calendar-weekday">Du</div>
                <div className="calendar-weekday">Lu</div>
                <div className="calendar-weekday">Ma</div>
                <div className="calendar-weekday">Mi</div>
                <div className="calendar-weekday">Jo</div>
                <div className="calendar-weekday">Vi</div>
                <div className="calendar-weekday">Sâ</div>
              </div>

              <div className="calendar-days">
                {generateCalendarDays().map((dayObj, index) => (
                  <button
                    key={index}
                    className={`calendar-day ${!dayObj.isCurrentMonth ? 'calendar-day-other' : ''} ${isDateSelected(dayObj.date) ? 'calendar-day-selected' : ''}`}
                    onClick={() => handleDateSelect(dayObj.date)}
                  >
                    {dayObj.day}
                  </button>
                ))}
              </div>
            </div>

            <button className="calendar-confirm-btn" onClick={handleConfirmSelection}>
              Confirmă Selecția
            </button>

            <p className="calendar-footer-text">
              Poți selecta săptămâni din ultimii 2 ani. Săptămâna începe duminica.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}