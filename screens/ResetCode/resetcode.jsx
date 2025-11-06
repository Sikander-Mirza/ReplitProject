import React, { useState, useEffect } from "react";
import "./resetcode.css";
import { code } from "../../services/authservices/authservices";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetCode() {
  const navigate = useNavigate();
  const location = useLocation();

  // 📩 Email from Forget Password screen
  const [email, setEmail] = useState("");

  const [resetCode, setResetCode] = useState("");
  const [loading, setLoading] = useState(false);

  // Retrieve email passed via navigate()
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      // If no email provided, redirect back
      toast.warn("No email found. Please request password reset again.");
      navigate("/forget-password");
    }
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Verifying reset code for:", email, "Code:", resetCode);
      const res = await code({ email, code: resetCode });
      toast.success("✅ Code verified successfully!");
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 1000);
    } catch (error) {
      toast.error("❌ Invalid code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate("/forget-password");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center min-vh-100 px-3 pt-5 pb-5">
      <div
        className="login-card text-center p-4 p-md-5 shadow rounded-4 text-light"
        style={{ width: "100%", maxWidth: "480px" }}
      >
        {/* Top Icon */}
        <div
          className="login-icon mb-3 mx-auto d-flex align-items-center justify-content-center bg-primary rounded-circle"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="bi bi-shield-lock fs-3 text-white"></i>
        </div>

        <h3 className="login-title mb-2">Enter Reset Code</h3>
        <p className="text-secondary mb-4" style={{ fontSize: "0.9rem" }}>
          We’ve sent a reset code to your email address:
          <br />
          <span className="text-info fw-semibold">{email}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="text-start mb-4">
            <label className="form-label">Reset Code *</label>
            <input
              type="text"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              className="form-control bg-black text-light border-secondary custom-input"
              placeholder="Enter the code from your email"
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
                <span className="spinner-border spinner-border-sm"></span> Verifying...
              </>
            ) : (
              <>
                <i className="bi bi-check2-circle"></i> Verify Code
              </>
            )}
          </button>
        </form>

        <button
          type="button"
          onClick={goBack}
          className="btn btn-outline-primary w-100 bg-black d-flex align-items-center justify-content-center gap-2 py-2"
        >
          <i className="bi bi-arrow-left"></i> Back
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default ResetCode;
