import React, { useState } from "react";
import "./forgetpassword.css";
import { forget } from "../../services/authservices/authservices";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        console.log(email)
    const res = await forget({email})
      // API call example — replace with your forget password endpoint
      console.log(res)
      console.log("Password reset requested for:", email);
      toast.success("✅ Password reset code sent to your email!");
      setTimeout(() => {
      navigate("/reset-code", { state: { email } }); // ✅ pass email to next screen
    }, 1000);
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const goBackToLogin = () => {
    navigate("/");
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
          <i className="bi bi-envelope fs-3 text-white"></i>
        </div>

        <h3 className="login-title mb-2">Forgot Password</h3>
        <p className="text-secondary mb-4" style={{ fontSize: "0.9rem" }}>
          Enter your registered email address to reset your password
        </p>

        <form onSubmit={handleSubmit}>
          <div className="text-start mb-4">
            <label className="form-label">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control bg-black text-light border-secondary custom-input"
              placeholder="Enter your email"
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
                <span className="spinner-border spinner-border-sm"></span> Sending...
              </>
            ) : (
              <>
                <i className="bi bi-send"></i> Send Reset Code
              </>
            )}
          </button>
        </form>

        <button
          type="button"
          onClick={goBackToLogin}
          className="btn btn-outline-primary w-100 bg-black d-flex align-items-center justify-content-center gap-2 py-2"
        >
          <i className="bi bi-arrow-left"></i> Back to Login
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default ForgetPassword;
