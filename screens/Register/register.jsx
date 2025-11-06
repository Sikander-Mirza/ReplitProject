import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { registerTenant } from "../../services/authservices/authservices";

export default function TenantRegister() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    tenant: {
      tenant_name: "",
      company_name: "",
      email_contact: "",
      phone_contact: "",
      description: "",
    },
  });
 const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // 🧠 Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.tenant) {
      setFormData({
        ...formData,
        tenant: { ...formData.tenant, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 🚀 Handle Submit
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  

  try {
    const res = await registerTenant(formData);

    toast.success("Tenant registered successfully!");
    console.log("✅ API Response:", res);

setTimeout(() => navigate("/"), 1000);
    // Reset form after success
    setFormData({
      username: "",
      email: "",
      password: "",
      tenant: {
        tenant_name: "",
        company_name: "",
        email_contact: "",
        phone_contact: "",
        description: "",
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);

    // Extract detailed error messages
    const apiError = error.response?.data;
    let fullMessage = apiError?.message || "Something went wrong!";

    if (apiError?.errors) {
      const fieldErrors = Object.entries(apiError.errors)
        .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
        .join(" | ");
      fullMessage += ` — ${fieldErrors}`;
    }

    toast.error(fullMessage);
    
  } finally {
    setLoading(false);
  }
};


  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(180deg, #0d1117, #13214a)",
        fontFamily: "Inter, sans-serif",
        color: "#fff",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="card text-white mt-4"
        style={{
          backgroundColor: "#141a29",
          borderRadius: "16px",
          width: "680px",
          boxShadow: "0 0 25px rgba(0,0,0,0.3)",
        }}
      >
        <div className="card-body p-4">
          <div className="text-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6875f5, #7b61ff)",
              }}
            >
              <i className="bi bi-person-plus fs-3"></i>
            </div>
            <h5 className="fw-bold" style={{ color: "#818cf8" }}>
              Înregistrare Tenant Nou
            </h5>
            <small style={{ color: "#9ca3af" }}>
              Creează-ți propriul tenant și primul utilizator admin
            </small>
          </div>

          {/* Tenant Info */}
          <div className="p-3 mb-3 rounded" style={{ backgroundColor: "#15213d" }}>
            <h6 className="mb-3 text-info fw-bold" style={{ color: "#93c5fd" }}>
              <i className="bi bi-info-circle me-2 fw-bold"></i>
              Informații Tenant
            </h6>
            <div className="row g-2">
              <div className="col-md-6">
                <label className="form-label text-light small">Nume Tenant *</label>
                <input
                  type="text"
                  name="tenant_name"
                  value={formData.tenant.tenant_name}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="ex: Transport Express SRL"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-light small">Nume Companie</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.tenant.company_name}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="ex: SC Transport Express SRL"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-light small">Email Contact</label>
                <input
                  type="email"
                  name="email_contact"
                  value={formData.tenant.email_contact}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="contact@transport.ro"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-light small">Telefon Contact</label>
                <input
                  type="text"
                  name="phone_contact"
                  value={formData.tenant.phone_contact}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="+40123456789"
                />
              </div>
              <div className="col-12">
                <label className="form-label text-light small">Descriere (opțională)</label>
                <textarea
                  rows="2"
                  name="description"
                  value={formData.tenant.description}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="Descrierea activității companiei..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Admin Info */}
          <div className="p-3 mb-3 rounded" style={{ backgroundColor: "#14272d" }}>
            <h6 className="mb-3 text-success fw-bold">
              <i className="bi bi-person-gear me-2"></i> Primul Utilizator Admin
            </h6>
            <div className="row g-2">
              <div className="col-md-6">
                <label className="form-label text-light small">Username Admin *</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="admin sau numele dvs."
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-light small">Parolă Admin *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="Parolă sigură..."
                />
              </div>
              <div className="col-12">
                <label className="form-label text-light small">Email Admin</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control custom-input"
                  placeholder="admin@transport.ro"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-100 mb-3"
            style={{
              background: "linear-gradient(90deg, #3d7bf4, #4e47e5)",
              color: "#fff",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? (
              <span>
                <i className="bi bi-hourglass-split me-2"></i> Processing...
              </span>
            ) : (
              <>
                <i className="bi bi-person-plus me-2"></i>
                Creează Tenant & Admin →
              </>
            )}
          </button>
        </div>
      </form>


      {/* Toast Container */}
     <ToastContainer position="top-right" autoClose={4000} hideProgressBar />

      {/* Custom CSS inside component */}
      <style>
        {`
          .custom-input {
            background-color: #000 !important;
            color: #fff !important;
            border: 1px solid #333 !important;
          }
          .custom-input:focus {
            background-color: #000 !important;
            color: #fff !important;
            box-shadow: 0 0 5px #3d7bf4 !important;
            border-color: #3d7bf4 !important;
          }
          .custom-input::placeholder {
            color: #bbb !important;
          }
        `}
      </style>
    </div>
  );
}
