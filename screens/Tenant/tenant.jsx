import React, { useState } from 'react';
import './Tenant.css'; 
import { X, Building, Mail, Phone, Calendar, Activity, User } from 'lucide-react';

const Tenant = () => {
   
    const [showNewTenantForm, setShowNewTenantForm] = useState(true);
    
   
    const existingTenants = [
        {
            id: 'tmw',
            status: 'Activ',
            adminUsername: 'tbw',
            phone: '2343242',
            expiryDate: '29.09.2025',
            email: '', 
        },
        {
            id: 'tmw2',
            status: 'Activ',
            adminUsername: 'tbw',
            phone: '32442343',
            expiryDate: '30.09.2025',
            email: '',
        },
    ];
   
    const handleCancel = () => { console.log('Cancel clicked.'); setShowNewTenantForm(false); };
    
    return (
        // Assuming bg-dark-blue is defined in Tenant.css for the main background
        <div className=" bg-dark-blue" style={{ minHeight: '100vh',width:"100%" }}>

            <div className="container-lg text-white">

                {/* --- Header Section --- */}
                <div className="mb-4">
                    <h1 className="fw-bold mb-1 pt-5">Administrare <span className='custom-title-color'>Tenant-uri</span></h1>
                    <p className="lead text-white-50">Gestionează abonamentele și tenant-urile Transport Pro</p>
                </div>

                {/* "Creează Tenant Nou" Button */}
                <div className="mb-4">
                    <button
                        className="btn btn-pro-blue d-flex align-items-center gap-2 rounded-3 px-4 py-2"
                        onClick={() => setShowNewTenantForm(!showNewTenantForm)}
                    >
                        <i className="bi bi-plus-lg"></i>
                        <span>Creează Tenant Nou</span>
                    </button>
                </div>

                {/* --- New Tenant Form Section (Collapsible) --- */}
                <div className={`mb-5 collapse ${showNewTenantForm ? 'show' : ''}`}>
                    <div className="card card-custom-dark border-0 rounded-4 p-4">
                        <h4 className="fw-bold mb-4">Creează Tenant Nou</h4>

                        <form >
                            <div className="row g-4 mb-4">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="companyName" className="form-label  small mb-1">Numele Companiei</label>
                                    <input type="text" className="form-control form-control-custom" id="companyName" name="companyName" placeholder='Ex: Fast Express S.R.L.'   required />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="firstName" className="form-label  small mb-1">Prenume</label>
                                    <input type="text" className="form-control form-control-custom" id="firstName" name="firstName" placeholder='lon'  required />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="lastName" className="form-label small mb-1">Nume</label>
                                    <input type="text" className="form-control form-control-custom" id="lastName" name="lastName" placeholder=' Popscs'  required />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="email" className="form-label  small mb-1">Email</label>
                                    <input type="email" className="form-control form-control-custom" id="email" name="email" placeholder='ion@fastexpress.ro'  required />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="phone" className="form-label small mb-1">Telefon</label>
                                    <input type="tel" className="form-control form-control-custom" id="phone" name="phone" placeholder='0740123456'  required />
                                </div>
                            </div>

                            <div className="d-flex gap-3 mt-4">
                                <button type="submit" className="btn btn-green-submit rounded-3 px-4 py-2 fw-bold">
                                    Creează Tenant
                                </button>
                                <button type="button" className="btn btn-dark-cancel rounded-3 px-4 py-2 fw-bold" onClick={handleCancel}>
                                    Anulează
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* --- Existing Tenants Section --- */}
                <div className="card card-custom-dark border-0 rounded-4 p-4 bg-gradient-tenant-list">
                    <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                        <Building size={36} className="me-3 title-icon"  style={{color:"white"}}/> 
                        <span>Tenant-uri Existente ({existingTenants.length})</span>
                    </h4>

                    <div className="d-flex flex-column gap-3">
      {existingTenants.map((tenant) => (
        <div
          key={tenant.id}
          className="tenant-card-item rounded-3 p-3 d-flex flex-column flex-lg-row align-items-lg-start justify-content-between gap-3"
        >
          {/* LEFT BLOCK */}
          <div
            className="d-flex flex-column align-items-start"
            style={{ minWidth: '200px' }}
          >
            <div className="d-flex align-items-center gap-2 mb-3">
              <h5 className="mb-0 fw-bold text-white">{tenant.id}</h5>
              <span
                className="badge badge-active text-uppercase p-2 rounded-5 fw-normal d-flex align-items-center gap-1"
                style={{
                  color: '#83eba9',
                  backgroundColor: '#14532d',
                  fontSize: '0.8rem',
                }}
              >
                <i
                  className="bi bi-check-lg"
                  style={{ fontSize: '0.8rem', color: '#83eba9' }}
                ></i>
                {tenant.status}
              </span>
            </div>

            <div className="d-flex flex-column align-items-start text-white-50 small">
              <div className="mb-1">
                <User size={16} className="me-3 title-icon" style={{ color: 'white' }} />
              </div>
              <div className="d-flex align-items-center gap-1 flex-wrap">
                <span style={{ color: '#81ace6' }}>Username admin:</span>
                <span className="username-highlight px-2 rounded-3">{tenant.adminUsername}</span>
              </div>
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="right-block d-flex flex-wrap flex-grow-1 justify-content-start align-items-center gap-4 text-white-50 mt-2 mt-lg-n4 ms-lg-auto">
            <div className="tenant-detail d-flex align-items-center">
              <Mail size={16} className="me-3 title-icon" style={{ color: 'white' }} />
              <span className="text-white">{tenant.email}</span>
            </div>

            <div className="tenant-detail d-flex align-items-center">
              <Phone size={16} className="me-3 title-icon" style={{ color: 'white' }} />
              <span className="text-white">{tenant.phone}</span>
            </div>

            <div className="tenant-detail d-flex align-items-center">
              <Calendar size={16} className="me-3 title-icon" style={{ color: 'white' }} />
              <span className="text-white">{tenant.expiryDate}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
                </div>
            </div>
        </div>
    );
};

export default Tenant;