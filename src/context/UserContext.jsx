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
  const [loading, setLoading] = useState(true);

  // Check for existing user session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("maxgrind_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("maxgrind_user");
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

      // Mock user data - replace with actual API call
      const newUser = {
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
      };

      setUser(newUser);
      localStorage.setItem("maxgrind_user", JSON.stringify(newUser));
      return { success: true, user: newUser };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: "Registration failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("maxgrind_user");
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("maxgrind_user", JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
