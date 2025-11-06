import React, { useState,useEffect } from 'react';
import { Eye, FileText, Edit, X } from 'lucide-react';
import { getDashboardMetrics,getAdminUsers } from '../../services/adminservices/adminservices';
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('subscribers');
  const [showModal, setShowModal] = useState(false);
   const [subscribers, setSubscribers] = useState([]);

  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    trialingUsers: 0,
    activeSubscribers: 0,
    totalSubscriptions: 0,
    revenue: "0.00",
  });

  useEffect(() => {
    async function fetchMetrics() {
      const data = await getDashboardMetrics();
      if (data) {
        setMetrics({
          totalUsers: data.counts?.total_non_admin_users || 0,
          trialingUsers: data.counts?.trialing_users || 0,
          activeSubscribers: data.counts?.active_subscribers || 0,
          totalSubscriptions: data.counts?.total_subscriptions || 0,
          revenue: data.revenue?.gross || "0.00",
        });
      }
    }

    fetchMetrics();
  }, []);


 useEffect(() => {
    async function fetchUsers() {
      const result = await getAdminUsers();

      if (result?.data) {
        const formattedUsers = result.data.map(user => ({
          id: user.id,
          user: user.username,
          email: user.email,
          company: user.tenant?.company_name || "N/A",
          status: user.tenant?.subscription_status === "active" ? "Activ" : "Inactiv",
          lastConnection: user.lastConnection || "Niciodată",
        }));

        setSubscribers(formattedUsers);
      }
    }
    fetchUsers();
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    company: '',
    role: 'Abonat',
    status: 'Activ'
  });
  
  // const [subscribers] = useState([
  //   {
  //     id: 1,
  //     user: 'tmw2',
  //     email: '',
  //     company: 'tmw2',
  //     status: 'Inactiv',
  //     lastConnection: 'Niciodată'
  //   },
  //   {
  //     id: 2,
  //     user: 'tmw',
  //     email: 'tmw@gmail.com',
  //     company: 'tmw',
  //     status: 'Inactiv',
  //     lastConnection: 'Niciodată'
  //   },
  //   {
  //     id: 3,
  //     user: 'Petrisor',
  //     email: 'admin@transportabc.ro',
  //     company: 'SC Transport ABC SRL',
  //     status: 'Inactiv',
  //     lastConnection: 'Niciodată'
  //   }
  // ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({
      username: '',
      email: '',
      company: '',
      role: 'Abonat',
      status: 'Activ'
    });
  };

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #142249 0%, #2f2f81 100%)' }}>
      {/* Header */}
      <div className="container-fluid px-4 py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div>
            <h1 className="text-white mb-2 fw-bold">Dashboard Administrator</h1>
            <p className="text-white-50 mb-0">Gestionează abonațiilor și monitorizează sistemul Transport Pro</p>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0">
            <button className="btn btn-success d-flex align-items-center gap-2 px-4">
              <FileText size={20} />
              <span>Gestionează Tenant-uri</span>
            </button>
            <button 
              className="btn btn-primary d-flex align-items-center gap-2 px-4"
              onClick={() => setShowModal(true)}
            >
              <span style={{ fontSize: '20px' }}>+</span>
              <span>Adaugă abonat</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-white-50 mb-2">Total abonațiilor</div>
                  <h2 className="text-white fw-bold mb-0">{metrics.totalUsers}</h2>
                </div>
                <div className="rounded-circle p-3" style={{ background: 'rgba(96, 165, 250, 0.2)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-white-50 mb-2">Abonătăți active</div>
                  <h2 className="text-white fw-bold mb-0">{metrics.trialingUsers}</h2>
                </div>
                <div className="rounded-circle p-3" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-white-50 mb-2">Venit lunar</div>
                  <h2 className="text-white fw-bold mb-0">{metrics.revenue}</h2>
                </div>
                <div className="rounded-circle p-3" style={{ background: 'rgba(234, 179, 8, 0.2)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-white-50 mb-2">Perioada probă</div>
                  <h2 className="text-white fw-bold mb-0">{metrics.totalSubscriptions}</h2>
                </div>
                <div className="rounded-circle p-3" style={{ background: 'rgba(168, 85, 247, 0.2)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4">
          <ul className="nav nav-pills gap-2" style={{width:"300px",backgroundColor:"#2d4072ff", padding: '4px', borderRadius: '6px'}}>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'subscribers' ? 'active' : 'text-white'}`}
                style={{ 
                  background: activeTab === 'subscribers' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: 'none'
                }}
                onClick={() => setActiveTab('subscribers')}
              >
                Abonațiilor
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'analyze' ? 'active' : 'text-white'}`}
                style={{ 
                  background: activeTab === 'analyze' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: 'none'
                }}
                onClick={() => setActiveTab('analyze')}
              >
                Analize
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'settings' ? 'active' : 'text-white'}`}
                style={{ 
                  background: activeTab === 'settings' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: 'none'
                }}
                onClick={() => setActiveTab('settings')}
              >
                Setări
              </button>
            </li>
          </ul>
        </div>

        {/* Search and Filter Section */}
        <div className="card border-0 mb-4" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-12 col-lg-8" style={{backgroundColor:"#2d4072ff",borderRadius:"5px"}}>
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    className="form-control bg-transparent border-0 text-white" 
                    placeholder="Caută după nume, email sau companie..."
                    style={{ boxShadow: 'none' }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="d-flex gap-2 justify-content-end" style={{color:"#2d4072ff"}}>
                  <select className="form-select text-white border-0" style={{ maxWidth: '180px',backgroundColor:"#2d4072ff", borderWidth:"1rem" ,borderColor:"#ffff" }}>
                    <option>Toate statusurile</option>
                    <option>Activ</option>
                    <option>Inactiv</option>
                  </select>
                  <button className="btn btn-dark d-flex align-items-center gap-2 px-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribers Table */}
        <div className="card border-0" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <div className="card-body">
            <h5 className="text-white mb-4">Lista abonațiilor (3)</h5>
            <div className="table-responsive">
              <table className="table mb-0" style={{background: 'transparent','--bs-table-bg': 'transparent','--bs-table-hover-bg': 'rgba(255, 255, 255, 0.05)'}}>
                <thead>
                  <tr>
                    <th className="text-white-50  py-3" >Utilizator</th>
                    <th className="text-white-50 py-3" >Companie</th>
                    <th className="text-white-50 py-3" >Status</th>
                    <th className="text-white-50 py-3" >Ultima conectare</th>
                    <th className="text-white-50 py-3" >Acțiuni</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <tr key={subscriber.id}>
                      <td className=" py-3" style={{borderBottom: index < subscribers.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'}}>
                        <div className="text-white fw-semibold">{subscriber.user}</div>
                        {subscriber.email && (
                          <div className="text-white-50 small">{subscriber.email}</div>
                        )}
                      </td>
                      <td className="text-white  py-3" style={{borderBottom: index < subscribers.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'}}>{subscriber.company}</td>
                      <td className=" py-3" style={{borderBottom: index < subscribers.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'}}>
                        <span className="badge px-3 py-2" style={{borderRadius:"5rem",backgroundColor:"#435391",color:"#cdd2d9"}}>{subscriber.status}</span>
                      </td>
                      <td className="text-white-50  py-3" style={{borderBottom: index < subscribers.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'}}>{subscriber.lastConnection}</td>
                      <td className=" py-3" style={{borderBottom: index < subscribers.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'}}>
                        <div className="d-flex gap-2">
                          <button className="btn btn-dark btn-sm">
                            <Eye size={16} />
                          </button>
                          <button className="btn btn-dark btn-sm">
                            <FileText size={16} />
                          </button>
                          <button className="btn btn-dark btn-sm">
                            <Edit size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            zIndex: 1050,
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            className="card p-4 text-white"
            style={{
              width: "100%",
              maxWidth: "450px",
              backgroundColor: "#111827",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="fw-bold mb-1">Adaugă utilizator nou</h5>
                <small className="text-white-50">
                  Creează un nou cont de utilizator
                </small>
              </div>
              <button
                className="btn btn-sm btn-dark rounded-circle"
                onClick={() => setShowModal(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form>
              <div className="mb-3">
                <label className="form-label text-white">Nume utilizator</label>
                <input
                  type="text"
                  className="form-control text-white border-0" 
                  style={{backgroundColor:"#1f2937"}}
                  placeholder="Introdu nume"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Email</label>
                <input
                  type="email"
                  className="form-control text-white border-0"
                  style={{backgroundColor:"#1f2937"}}
                  placeholder="exemplu@email.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Companie</label>
                <input
                  type="text"
                  className="form-control text-white border-0"
                  style={{backgroundColor:"#1f2937"}}
                  placeholder="Introdu compania"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Rol</label>
                <select className="form-select text-white border-0" style={{backgroundColor:"#1f2937"}}>
                  <option>Abonat</option>
                  <option>Administrator</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label text-white">
                  Status abonament
                </label>
                <select className="form-select text-white border-0" style={{backgroundColor:"#1f2937"}}>
                  <option>Activ</option>
                  <option>Inactiv</option>
                </select>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-dark px-4"
                  onClick={() => setShowModal(false)}
                >
                  Anulează
                </button>
                <button type="submit" className="btn btn-success px-4">
                  Creează
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}