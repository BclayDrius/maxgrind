import { useState } from "react";
import "./Login-Register.scss";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function LoginRegister() {
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, register } = useUser();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Email validation (only for register)
    if (!isLogin) {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation (only for register)
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Simulación de verificación de código (reemplaza por tu API real)
  const fakeVerifyCode = async (code) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (code === "123456") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      let result;

      if (isLogin) {
        result = await login({
          username: formData.username,
          password: formData.password,
        });
      } else {
        result = await register(formData);
      }

      if (result.success) {
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        if (!isLogin) {
          setShowVerification(true);
          setIsSubmitting(false);
          return;
        }

        navigate("/dashboard");
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ general: "An unexpected error occurred" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerification = async () => {
    setVerificationError("");
    // Aquí deberías llamar a tu API real
    const res = await fakeVerifyCode(verificationCode);
    if (res.success) {
      setShowVerification(false);
      navigate("/dashboard");
    } else {
      setVerificationError("Código incorrecto. Intenta de nuevo.");
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Header />
      <div className="overlay" />
      <main className="login-register">
        <section className="login-register-hero">
          <h1>Welcome to MaXGrind</h1>
          <p>Join our community and start your fitness journey today!</p>
        </section>

        <section className="login-register-form">
          <div className="form-container">
            <div className="form-header">
              <button
                className={`mode-toggle ${isLogin ? "active" : ""}`}
                onClick={() => !isLogin && toggleMode()}
              >
                Login
              </button>
              <button
                className={`mode-toggle ${!isLogin ? "active" : ""}`}
                onClick={() => isLogin && toggleMode()}
              >
                Register
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`form ${isLogin ? "login-mode" : "register-mode"}`}
            >
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={errors.username ? "error" : ""}
                  required
                />
                {errors.username && (
                  <span className="error-message">{errors.username}</span>
                )}
              </div>

              <div
                className={`form-group email-group ${!isLogin ? "show" : ""}`}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                  required={!isLogin}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? "error" : ""}
                  required
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <div
                className={`form-group confirm-password-group ${
                  !isLogin ? "show" : ""
                }`}
              >
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={errors.confirmPassword ? "error" : ""}
                  required={!isLogin}
                />
                {errors.confirmPassword && (
                  <span className="error-message">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>

              {errors.general && (
                <div className="error-message general-error">
                  {errors.general}
                </div>
              )}
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading">
                    <span className="spinner"></span>
                    {isLogin ? "Logging in..." : "Creating account..."}
                  </span>
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Register"
                )}
              </button>
            </form>
          </div>
        </section>
        {showVerification && (
          <div className="verification-modal">
            <h2>Verifica tu correo</h2>
            <p>Ingresa el código de 6 dígitos que enviamos a tu correo.</p>
            <input
              type="text"
              maxLength={6}
              value={verificationCode}
              onChange={(e) =>
                setVerificationCode(e.target.value.replace(/\D/g, ""))
              }
              className={verificationError ? "error" : ""}
              autoFocus
            />
            {verificationError && (
              <span className="error-message">{verificationError}</span>
            )}
            <button
              onClick={handleVerification}
              disabled={verificationCode.length !== 6}
              className="submit-btn"
            >
              Verificar
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default LoginRegister;
