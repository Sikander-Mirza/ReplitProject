import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authservices/authservices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    login: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle form submit
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await login(credentials); // 🔹 API call from authservice.js
    toast.success("✅ Login successful!");

    // ✅ Check if we received valid data
    if (res?.token) {
      // Store token separately
      localStorage.setItem("token", res.token);

      // Store complete user info
      localStorage.setItem("user", JSON.stringify(res.user));

      // Optionally store subscription & offer details
      localStorage.setItem("subscription", JSON.stringify(res.subscription));
      localStorage.setItem("offer", JSON.stringify(res.offer));

      // Example: store if intro offer is available
      localStorage.setItem("intro_eligible", JSON.stringify(res.intro_eligible));
    }


  // ✅ Check subscription status
    const subscription = res?.subscription;
    const hasActive = subscription?.has_active;
    const onTrial = subscription?.on_trial;

    // ✅ Check user role
    const isAdmin = res?.user?.is_admin;

    // Redirect logic
    if (!hasActive && !onTrial && !isAdmin) {
      // ❌ No active or trial subscription
      toast.info("You don’t have an active subscription. Redirecting to pricing...");
      setTimeout(() => navigate("/pricing"), 1000);
    } else if (isAdmin) {
      // 👑 Admin user
      setTimeout(() => navigate("/admin"), 1000);
    } else {
      // 👤 Regular user (tenant)
      setTimeout(() => navigate("/tenant-dashboard"), 1000);
    }


    // ✅ Redirect to tenant dashboard
    // setTimeout(() => navigate("/tenant-dashboard"), 1000);
  } catch (error) {
    console.error("Login Error:", error);

    const apiError = error.response?.data;
    let message = apiError?.message || "Invalid username or password.";

    if (apiError?.errors) {
      const fieldErrors = Object.entries(apiError.errors)
        .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
        .join(" | ");
      message += ` — ${fieldErrors}`;
    }

    toast.error(message);
  } finally {
    setLoading(false);
  }
};


  const goToRegister = () => {
    navigate("/register");
  };

  const goToForgetPassword = () => {
    navigate("/forget-password");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center min-vh-100 px-3 pt-5 pb-5">
      <div
        className="login-card text-center p-4 p-md-5 shadow rounded-4 text-light"
        style={{ width: "100%", maxWidth: "480px" }}
      >
        <div
          className="login-icon mb-3 mx-auto d-flex align-items-center justify-content-center bg-primary rounded-circle"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="bi bi-building fs-3 text-white"></i>
        </div>

        <h3 className="login-title mb-2">Login Multi-Tenant</h3>
        <p className="text-secondary mb-4" style={{ fontSize: "0.9rem" }}>
          Selectează tenant-ul și conectează-te la sistemul tău
        </p>

        <form onSubmit={handleSubmit}>
          <div className="text-start mb-3">
            <label className="form-label">Username *</label>
            <input
              type="text"
              name="login"
              value={credentials.login}
              onChange={handleChange}
              className="form-control bg-black text-light border-secondary custom-input"
              placeholder="Introduceți username-ul"
              required
            />
          </div>

          <div className="text-start mb-2">
            <label className="form-label">Parola *</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-control bg-black text-white border-secondary custom-input"
              placeholder="Introduceți parola"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-end mb-4">
            <button
              type="button"
              onClick={goToForgetPassword}
              className="btn btn-link text-primary p-0"
              style={{ fontSize: "0.9rem", textDecoration: "none" }}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 mb-4 py-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm"></span> Se
                conectează...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right"></i> Conectează-te
              </>
            )}
          </button>
        </form>

        <hr className="border-secondary opacity-25" />

        <div className="secure-login text-center mt-4">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <i className="bi bi-lock-fill text-warning fs-5"></i>
            <h6 className="m-0 fw-semibold text-light">
              Login securizat multi-tenant
            </h6>
          </div>
          <p className="text-secondary mb-3" style={{ fontSize: "0.9rem" }}>
            Fiecare tenant are acces doar la datele sale private
          </p>

          <button
            type="button"
            onClick={goToRegister}
            className="btn btn-outline-primary w-100 bg-black d-flex align-items-center justify-content-center gap-2 py-2"
          >
            <i className="bi bi-building"></i>
            Nu ai cont? Înregistrează-te ca Tenant
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default Login;
