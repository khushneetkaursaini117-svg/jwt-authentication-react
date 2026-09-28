import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      const simulatedToken = btoa(
        JSON.stringify({
          userId: 101,
          role: "admin"
        })
      );

      localStorage.setItem("token", simulatedToken);
      localStorage.setItem("role", "admin");

      setToken(simulatedToken);
      setRole("admin");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setToken(null);
    setRole(null);
  };

  if (!token) {
    return (
      <div>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Login successful!</p>
      <p>Role: {role}</p>

      <h3>Protected Dashboard</h3>
      <p>Only logged-in users can see this page.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;