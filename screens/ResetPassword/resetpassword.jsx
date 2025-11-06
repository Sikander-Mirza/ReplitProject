import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPassword } from "../../services/authservices/authservices";
import "./resetpassword.css"; 

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";
  const code = location.state?.code || "";

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ front-end validation
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email,
        code,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      };

      console.log("Submitting reset request:", payload);

      const res = await resetPassword(payload);

      toast.success("✅ Password reset successfully!");
      setTimeout(() => navigate("/"), 1200);
    } catch (error) {
      console.error("Reset error:", error);
      const apiError = error.response?.data?.message || "Password reset failed.";
      toast.error(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center min-vh-100 px-3 pt-5 pb-5">
      <div
        className="login-card text-center p-4 p-md-5 shadow rounded-4 text-light"
        style={{ width: "100%", maxWidth: "480px" }}
      >
        {/* Icon */}
        <div
          className="login-icon mb-3 mx-auto d-flex align-items-center justify-content-center bg-primary rounded-circle"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="bi bi-lock-fill fs-3 text-white"></i>
        </div>

        <h3 className="login-title mb-2">Reset Your Password</h3>
        <p className="text-secondary mb-4" style={{ fontSize: "0.9rem" }}>
          Enter and confirm your new password for <strong>{email}</strong>
        </p>

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit}>
          <div className="text-start mb-3">
            <label className="form-label">New Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control bg-black text-light border-secondary custom-input"
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="text-start mb-4">
            <label className="form-label">Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control bg-black text-light border-secondary custom-input"
              placeholder="Confirm new password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 mb-4 py-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm"></span>
                Resetting...
              </>
            ) : (
              <>
                <i className="bi bi-check-circle"></i> Reset Password
              </>
            )}
          </button>
        </form>

        <hr className="border-secondary opacity-25" />

        <button
          className="btn btn-outline-primary w-100 bg-black d-flex align-items-center justify-content-center gap-2 py-2"
          onClick={() => navigate("/")}
        >
          <i className="bi bi-arrow-left"></i> Back to Login
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default ResetPassword;
