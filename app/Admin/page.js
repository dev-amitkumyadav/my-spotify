"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [song, setSong] = useState({ title: "", artist: "", category: "Ghazipur Vibes", src: "" });

  useEffect(() => {
    if (password === "1234") setIsLogin(true);
  }, [password]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "1234") setIsLogin(true);
    else alert("Galat password!");
  };

  if (!isLogin) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f2f5", fontFamily: "sans-serif", padding: "20px" }}>
        <div style={{ background: "white", padding: "35px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.1)", width: "100%", maxWidth: "380px", textAlign: "center" }}>

          <img src="/amit.jpg" alt="Amit" style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", border: "4px solid #1DB954", margin: "0 auto", display: "block" }} />

          {/* Name RED */}
          <h2 style={{ margin: "18px 0 4px 0", fontSize: "24px", color: "#ff0000", fontWeight: "bold" }}>Amit Kumar Yadav</h2>

          {/* Age BLUE */}
          <p style={{ margin: 0, color: "#007bff", fontWeight: "700", fontSize: "14px" }}>Age 23 • Full Stack Web Developer</p>

          {/* Founder LIGHT GREEN */}
          <p style={{ margin: "6px 0 0 0", color: "#2ecc71", fontSize: "13px", fontWeight: "500" }}>Founder - My Spotify | Ballia, UP 📍</p>

          <div style={{ margin: "20px 0", height: "1px", background: "#eee" }}></div>

          <form onSubmit={handleLogin} style={{ textAlign: "left" }}>
            {/* Admin Password BOLD */}
            <p style={{ margin: "0 0 8px 0", fontSize: "15px", color: "#000", fontWeight: "900" }}>Admin Password</p>
            <input
              type="password"
              autoFocus
              placeholder="Password dalo"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #ddd", fontSize: "15px", outline: "none", boxSizing: "border-box" }}
            />
            <button type="submit" style={{ width: "100%", marginTop: "12px", padding: "14px", background: "black", color: "white", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold", fontSize: "15px" }}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f5f5f7", minHeight: "100vh", padding: "20px", fontFamily: "sans-serif", color: "#111" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", borderRadius: "20px", padding: "25px", display: "flex", gap: "20px", alignItems: "center" }}>
        <img src="/amit.jpg" alt="Amit" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", border: "3px solid #1DB954" }} />
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: "22px", color: "red" }}>Amit Kumar Yadav - 23 Years</h1>
          <p style={{ margin: "4px 0", color: "#007bff", fontWeight: "bold" }}>Full Stack Web Developer</p>
          <p style={{ margin: "4px 0", color: "#2ecc71" }}>Founder - My Spotify | Ballia, UP 📍</p>
        </div>
        <button onClick={()=>{setIsLogin(false); setPassword("");}} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #ddd", background: "white", cursor: "pointer" }}>Logout</button>
      </div>
    </div>
  );
}