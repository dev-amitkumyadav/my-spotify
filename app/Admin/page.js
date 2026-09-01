"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (password === "1234") setIsLogin(true);
  }, [password]);

  if (!isLogin) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f2f5", fontFamily: "sans-serif", padding: "15px" }}>
        <div style={{ background: "white", padding: "25px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", width: "100%", maxWidth: "360px", textAlign: "center" }}>

          {/* PHOTO NORMAL - NO CIRCLE */}
          {!imgError? (
            <img src="/amit.jpg" alt="Amit" onError={()=>setImgError(true)} style={{ width: "100%", height: "280px", borderRadius: "14px", objectFit: "cover", display: "block", border: "2px solid #e5e7eb" }} />
          ) : (
            <div style={{ width: "100%", height: "280px", borderRadius: "14px", background: "linear-gradient(135deg, #1DB954, #191414)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "80px", fontWeight: "bold" }}>A</div>
          )}

          <h2 style={{ margin: "16px 0 4px 0", fontSize: "23px", color: "#ff0000", fontWeight: "bold" }}>Amit Kumar Yadav</h2>
          <p style={{ margin: 0, color: "#007bff", fontWeight: "700", fontSize: "13px" }}>Age 23 • Full Stack Web Developer</p>
          <p style={{ margin: "5px 0 0 0", color: "#2ecc71", fontSize: "12px", fontWeight: "600" }}>Founder - My Spotify | Ballia, UP 📍</p>

          <div style={{ margin: "18px 0", height: "1px", background: "#eee" }}></div>

          <div style={{ textAlign: "left" }}>
            <p style={{ margin: "0 0 6px 0", fontSize: "14px", fontWeight: "900", color: "#000" }}>Admin Password</p>
            <input type="password" autoFocus placeholder="Password dalo" value={password} onChange={e=>setPassword(e.target.value)} style={{ width: "100%", padding: "13px", borderRadius: "10px", border: "1px solid #ddd", boxSizing: "border-box" }} />
            <button onClick={()=>{ if(password==="1234") setIsLogin(true); else alert("Galat password"); }} style={{ width: "100%", marginTop: "12px", padding: "13px", background: "black", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" }}>Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f7", fontFamily: "sans-serif" }}>
      <div style={{ background: "white", padding: "25px", borderRadius: "16px", textAlign: "center" }}>
        <h2 style={{ color: "red" }}>Welcome Amit!</h2>
        <p style={{ color: "#007bff" }}>Login Successful ✅</p>
        <button onClick={()=>{setIsLogin(false); setPassword(""); setImgError(false);}} style={{ marginTop: "10px", padding: "8px 16px", borderRadius: "8px", border: "1px solid #ddd", background: "white" }}>Logout</button>
      </div>
    </div>
  );
}