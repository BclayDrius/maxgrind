import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pendingUser, setPendingUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Generate random 6-digit verification code
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Check for existing user session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("maxgrind_user");
    const savedPendingUser = localStorage.getItem("maxgrind_pending_user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("maxgrind_user");
      }
    }

    if (savedPendingUser) {
      try {
        setPendingUser(JSON.parse(savedPendingUser));
      } catch (error) {
        console.error("Error parsing saved pending user:", error);
        localStorage.removeItem("maxgrind_pending_user");
      }
    }

    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - replace with actual API call
      const userData = {
        id: Date.now(),
        username: credentials.username,
        email: credentials.email || null,
        name: credentials.username,
        avatar: null,
        joinDate: new Date().toISOString(),
        preferences: {
          theme: "dark",
          notifications: true,
        },
      };

      setUser(userData);
      localStorage.setItem("maxgrind_user", JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Login failed" };
    }
  };

  const register = async (userData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Generate verification code
      const verificationCode = generateVerificationCode();

      // Create pending user data - replace with actual API call
      const pendingUserData = {
        id: Date.now(),
        username: userData.username,
        email: userData.email,
        name: userData.username,
        avatar: null,
        joinDate: new Date().toISOString(),
        preferences: {
          theme: "dark",
          notifications: true,
        },
        verificationCode,
        createdAt: new Date().toISOString(),
      };

      setPendingUser(pendingUserData);
      localStorage.setItem(
        "maxgrind_pending_user",
        JSON.stringify(pendingUserData)
      );

      // In a real app, you would send the verification code via email/SMS here
      console.log(
        `Verification code for ${userData.email}: ${verificationCode}`
      );

      return {
        success: true,
        pendingUser: pendingUserData,
        verificationCode, // For development purposes only
      };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: "Registration failed" };
    }
  };

  const verifyCode = async (code) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!pendingUser) {
        return { success: false, error: "No pending verification found" };
      }

      if (pendingUser.verificationCode === code) {
        // Verification successful - activate user
        const { verificationCode, createdAt, ...userData } = pendingUser;
        setUser(userData);
        setPendingUser(null);
        localStorage.setItem("maxgrind_user", JSON.stringify(userData));
        localStorage.removeItem("maxgrind_pending_user");
        return { success: true, user: userData };
      } else {
        return { success: false, error: "Invalid verification code" };
      }
    } catch (error) {
      console.error("Verification error:", error);
      return { success: false, error: "Verification failed" };
    }
  };

  const resendVerificationCode = async () => {
    try {
      if (!pendingUser) {
        return { success: false, error: "No pending verification found" };
      }

      // Generate new verification code
      const newVerificationCode = generateVerificationCode();

      // Update pending user with new code
      const updatedPendingUser = {
        ...pendingUser,
        verificationCode: newVerificationCode,
      };

      setPendingUser(updatedPendingUser);
      localStorage.setItem(
        "maxgrind_pending_user",
        JSON.stringify(updatedPendingUser)
      );

      // In a real app, you would send the new verification code via email/SMS here
      console.log(
        `New verification code for ${pendingUser.email}: ${newVerificationCode}`
      );

      return {
        success: true,
        verificationCode: newVerificationCode, // For development purposes only
      };
    } catch (error) {
      console.error("Resend verification error:", error);
      return { success: false, error: "Failed to resend verification code" };
    }
  };

  const logout = () => {
    setUser(null);
    setPendingUser(null);
    localStorage.removeItem("maxgrind_user");
    localStorage.removeItem("maxgrind_pending_user");
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("maxgrind_user", JSON.stringify(updatedUser));
  };

  const value = {
    user,
    pendingUser,
    loading,
    login,
    register,
    verifyCode,
    resendVerificationCode,
    logout,
    updateUser,
    isAuthenticated: !!user,
    isPendingVerification: !!pendingUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
