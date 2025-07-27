import { useState } from "react";
import "./Login-Register.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (isLogin) {
        console.log("Login attempt:", {
          username: formData.username,
          password: formData.password,
        });
        // Add your login logic here
      } else {
        console.log("Register attempt:", formData);
        // Add your register logic here
      }

      // Reset form on success
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
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
      </main>
    </>
  );
}

export default LoginRegister;
