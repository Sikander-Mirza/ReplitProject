import React, { useState } from 'react';
import { Lock, User, LogIn } from 'lucide-react';
import './AdminLogin.css'; // import external CSS file

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card card border-0 shadow-lg">
        <div className="card-body p-4 p-md-5">
          {/* Lock Icon */}
          <div className="text-center mb-4">
            <div className="login-icon-circle">
              <Lock size={40} color="white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="login-title text-center fw-bold mb-2">
            Administrator Login
          </h2>
          <p className="login-subtitle text-center mb-4">
            Acces securizat pentru administratorii sistemului
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <label className="form-label mb-2 login-label">
                Utilizator
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <User size={20} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Introduceți numele de utilizator"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="form-label mb-2 login-label">
                Parolă
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <Lock size={20} />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Introduceți parola"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="login-btn btn w-100 d-flex align-items-center justify-content-center gap-2 py-3 fw-semibold">
              <LogIn size={20} />
              Autentificare
            </button>
          </form>

          {/* Footer */}
          <p className="login-footer text-center mt-4 mb-0">
            Sistem de management transport și plăți
          </p>
        </div>
      </div>
    </div>
  );
}
