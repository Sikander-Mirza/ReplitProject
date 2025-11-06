import React, { useState } from 'react';
import { X, Building2, Edit, Trash2, Plus, Activity, Users,ChevronDown } from 'lucide-react';
import './TenantManagement.css';

export default function TenantManagement() {
  const [showModal, setShowModal] = useState(false);
  const [editingTenant, setEditingTenant] = useState(null);
  const [tenants, setTenants] = useState([
    {
      id: 4,
      name: 'tmw',
      description: 'Fără descriere',
      company: 'tmw',
      email: 'contact@tmw.com',
      phone: '+40 123 456 789',
      status: 'active',
      plan: 'Professional',
      createdDate: '29.09.2025'
    },
    {
      id: 5,
      name: 'tmw2',
      description: 'Fără descriere',
      company: 'tmw2',
      email: 'info@tmw2.com',
      phone: '+40 987 654 321',
      status: 'active',
      plan: 'Professional',
      createdDate: '30.09.2025'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    company: '',
    email: '',
    phone: '',
    status: 'Activ',
    plan: 'Professional'
  });

  const activeTenants = tenants.filter(t => t.status === 'active').length;
  const inactiveTenants = tenants.filter(t => t.status === 'inactive').length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => {
    setEditingTenant(null);
    setFormData({
      name: '',
      description: '',
      company: '',
      email: '',
      phone: '',
      status: 'Activ',
      plan: 'Professional'
    });
    setShowModal(true);
  };

  const handleEditTenant = (tenant) => {
    setEditingTenant(tenant);
    setFormData({
      name: tenant.name,
      description: tenant.description,
      company: tenant.company,
      email: tenant.email,
      phone: tenant.phone,
      status: tenant.status === 'active' ? 'Activ' : 'Inactiv',
      plan: tenant.plan
    });
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (formData.name) {
      if (editingTenant) {
        // Update existing tenant
        setTenants(tenants.map(t => 
          t.id === editingTenant.id 
            ? {
                ...t,
                name: formData.name,
                description: formData.description || 'Fără descriere',
                company: formData.company,
                email: formData.email,
                phone: formData.phone,
                status: formData.status.toLowerCase() === 'activ' ? 'active' : 'inactive',
                plan: formData.plan
              }
            : t
        ));
      } else {
        // Create new tenant
        const newTenant = {
          id: tenants.length + 1,
          name: formData.name,
          description: formData.description || 'Fără descriere',
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          status: formData.status.toLowerCase() === 'activ' ? 'active' : 'inactive',
          plan: formData.plan,
          createdDate: new Date().toLocaleDateString('ro-RO')
        };
        setTenants([...tenants, newTenant]);
      }
      
      setFormData({
        name: '',
        description: '',
        company: '',
        email: '',
        phone: '',
        status: 'Activ',
        plan: 'Professional'
      });
      setEditingTenant(null);
      setShowModal(false);
    }
  };

  const handleDelete = (id) => {
    setTenants(tenants.filter(t => t.id !== id));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTenant(null);
    setFormData({
      name: '',
      description: '',
      company: '',
      email: '',
      phone: '',
      status: 'Activ',
      plan: 'Professional'
    });
  };

  return (
    <div className="tenant-management-wrapper">
      <div className="container-fluid tenant-container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 header-section">
          <div>
            <h1 className="page-title">
              <Building2 size={36} className="me-3 title-icon" />
              Gestionare Tenanți
            </h1>
            <p className="page-subtitle">
              Administrează și monitorizează toți tenanții din sistem
            </p>
          </div>
          <button
            onClick={handleOpenModal}
            className="btn btn-primary d-flex align-items-center btn-add-tenant"
          >
            <Plus size={20} className="me-2" />
            Tenant Nou
          </button>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <div className="stat-card stat-card-blue">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="stat-label">Total Tenanți</p>
                  <h2 className="stat-value">{tenants.length}</h2>
                </div>
                <Building2 size={28} className="stat-icon" />
              </div>
              <div className="stat-decoration"></div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="stat-card stat-card-green">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="stat-label">Tenanți Activi</p>
                  <h2 className="stat-value">{activeTenants}</h2>
                </div>
                <Activity size={28} className="stat-icon" />
              </div>
              <div className="stat-decoration"></div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="stat-card stat-card-orange">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="stat-label">Tenanți Inactivi</p>
                  <h2 className="stat-value">{inactiveTenants}</h2>
                </div>
                <Users size={28} className="stat-icon" />
              </div>
              <div className="stat-decoration"></div>
            </div>
          </div>
        </div>

        {/* Tenant List */}
        <div className="tenant-list-container">
          <div className="d-flex align-items-center mb-4">
            <Building2 size={24} className="text-white me-3" />
            <h3 className="tenant-list-title">Lista Tenanți</h3>
            <span className="tenant-count-badge">{tenants.length} total</span>
          </div>

          <div className="row g-3">
            {tenants.map((tenant) => (
              <div key={tenant.id} className="col-12">
                <div className="tenant-card">
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center mb-2 flex-wrap">
                        <h4 className="tenant-name">
                          #{tenant.id} {tenant.name}
                        </h4>
                        <span className="status-badge status-active">
                          {tenant.status}
                        </span>
                      </div>
                      <p className="tenant-description">{tenant.description}</p>
                      <div className="tenant-company">
                        <Building2 size={14} className="me-2" />
                        {tenant.company}
                      </div>
                      <p className="tenant-date">Creat: {tenant.createdDate}</p>
                    </div>
                    <div className="d-flex gap-2 mt-2 mt-md-0">
                      <button 
                        onClick={() => handleEditTenant(tenant)}
                        className="btn btn-sm action-btn btn-edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(tenant.id)}
                        className="btn btn-sm action-btn btn-delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {editingTenant ? (
                  <>
                    <Edit size={24} className="me-2 modal-icon" />
                    Editează Tenant
                  </>
                ) : (
                  <>
                    <Plus size={24} className="me-2 modal-icon" />
                    Tenant Nou
                  </>
                )}
              </h3>
              <button onClick={handleCloseModal} className="modal-close-btn">
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">
                  Nume Tenant <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descriere</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="form-input form-textarea"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nume Companie</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Contact</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="form-input form-select"
                >
                  <option value="Activ">Activ</option>
                  <option value="Inactiv">Inactiv</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Plan Abonament</label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="form-input form-select"
                  
                >
                  <option value="Professional">Professional</option>
                  <option value="Basic">Basic</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
                
              </div>

              <div className="d-flex gap-2">
                <button onClick={handleSubmit} className="btn-submit">
                  {editingTenant ? '✓ Actualizează' : '✓ Creează'}
                </button>
                <button onClick={handleCloseModal} className="btn-cancel">
                  Anulează
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}