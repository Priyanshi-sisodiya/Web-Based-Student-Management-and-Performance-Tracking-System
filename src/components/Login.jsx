import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center px-3 bg-primary bg-gradient">

      {/* Logo */}
      <div
        className="d-flex align-items-center gap-3 mb-4 px-4 py-3 rounded-4"
        style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-3"
          style={{
            width: "55px",
            height: "55px",
            background: "#facc15",
            fontSize: "24px",
          }}
        >
          🎓
        </div>

        <div>
          <h1 className="text-white fw-bold fs-2 mb-0">EduTrack</h1>
          <p className="text-white-50 mb-0 small">
            Student Management System
          </p>
        </div>
      </div>

      {/* Card */}
      <div
        className="bg-white shadow-lg rounded-4 p-4 p-md-5 w-100"
        style={{
          maxWidth: "560px",
        }}
      >
        <h2 className="fw-bold mb-1">Welcome Back</h2>
        <p className="text-muted mb-4">Sign in to your account</p>

        {/* Role Buttons */}
        <div className="row g-3 mb-4">
          <div className="col-6">
            <button
              onClick={() => setRole("admin")}
              className={`btn w-100 fw-semibold ${
                role === "admin"
                  ? "btn-primary"
                  : "btn-light border"
              }`}
            >
              Admin
            </button>
          </div>

          <div className="col-6">
            <button
              onClick={() => setRole("teacher")}
              className={`btn w-100 fw-semibold ${
                role === "teacher"
                  ? "btn-primary"
                  : "btn-light border"
              }`}
            >
              Teacher
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-medium">
            Email Address
          </label>

          <div className="input-group">
            <span className="input-group-text bg-white">
              <Mail size={18} className="text-muted" />
            </span>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@school.edu"
              className="form-control"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label fw-medium">
            Password
          </label>

          <div className="input-group">
            <span className="input-group-text bg-white">
              <Lock size={18} className="text-muted" />
            </span>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="form-control"
            />
          </div>
        </div>

        {/* Options */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div className="form-check m-0">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />
            <label
              className="form-check-label"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>

          <span className="text-primary small cursor-pointer">
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="btn btn-primary w-100 py-2 fw-semibold"
        >
          Sign In
        </button>

        {/* Demo */}
        <div className="alert alert-warning mt-4 mb-0 small">
          <strong>Demo:</strong> Use any email and password to login
        </div>
      </div>

      {/* Footer */}
      <p className="text-white small mt-4 mb-0">
        © 2026 EduTrack. All rights reserved.
      </p>
    </div>
  );
};

export default Login;