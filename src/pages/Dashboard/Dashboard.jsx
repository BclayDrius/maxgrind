import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const { user, isAuthenticated, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login-register");
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="welcome-section">
            <h1>Welcome back, {user?.name}!</h1>
            <p>Ready to continue your fitness journey?</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Quick Start</h3>
              <p>Jump into your next workout</p>
              <button className="dashboard-btn primary">Start Workout</button>
            </div>

            <div className="dashboard-card">
              <h3>Progress</h3>
              <p>Track your fitness journey</p>
              <button className="dashboard-btn secondary">View Progress</button>
            </div>

            <div className="dashboard-card">
              <h3>Routines</h3>
              <p>Explore new training programs</p>
              <button className="dashboard-btn secondary">
                Browse Routines
              </button>
            </div>

            <div className="dashboard-card">
              <h3>Profile</h3>
              <p>Manage your account</p>
              <button className="dashboard-btn secondary">Edit Profile</button>
            </div>
          </div>

          <div className="user-stats">
            <h2>Your Stats</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">Workouts Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">Days Active</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">Current Streak</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
