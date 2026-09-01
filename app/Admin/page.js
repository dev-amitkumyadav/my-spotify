"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [song, setSong] = useState({ title: "", artist: "", category: "Ghazipur Vibes", src: "" });

  // AUTO LOGIN - jaise hi password sahi hoga, automatic login
  useEffect(() => {
    if (password === "1234") {
      setIsLogin(true);
    }
  }, [password]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "1234") setIsLogin(true);
    else alert("Galat password hai Amit bhai!");
  };

  // LOGIN SCREEN - Profile ke saath
  if (!isLogin) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f2f5", fontFamily: "sans-serif", padding: "20px" }}>
        <div style={{ background: "white", padding: "35px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.1)", width: "100%", maxWidth: "380px", textAlign: "center" }}>

          {/* PROFILE PIC */}
          <img
            src="/amit.jpg"
            alt="Amit"
            onError={(e) => { e.target.style.display='none'; document.getElementById('fallbackA').style.display='flex'; }}
            style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", border: "4px solid #1DB954", margin: "0 auto" }}
          />
          <div id="fallbackA" style={{ width: "110px", height: "110px", borderRadius: "50%", background: "linear-gradient(135deg, #1DB954, #191414)", display: "none", alignItems: "center", justifyContent: "center", color: "white", fontSize: "45px", fontWeight: "bold", margin: "0 auto", border: "4px solid #1DB954" }}>A</div>

          {/* PROFILE NAME */}
          <h2 style={{ margin: "18px 0 4px 0", fontSize: "22px" }}>Amit Kumar Yadav</h2>
          <p style={{ margin: 0, color: "#1DB954", fontWeight: "600", fontSize: "14px" }}>Age 23 • Full Stack Web Developer</p>
          <p style={{ margin: "6px 0 0 0", color: "#888", fontSize: "12px" }}>Founder - My Spotify | Ballia, UP 📍</p>

          <div style={{ margin: "20px 0", height: "1px", background: "#eee" }}></div>

          <form onSubmit={handleLogin} style={{ textAlign: "left" }}>
            <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#333", fontWeight: "500" }}>Admin Password</p>
            <input
              type="password"
              autoFocus
              placeholder="Password dalo, auto login ho jayega"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #ddd", fontSize: "15px", outline: "none", boxSizing: "border-box" }}
            />
            <button type="submit" style={{ width: "100%", marginTop: "12px", padding: "14px", background: "black", color: "white", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold", fontSize: "15px" }}>Login</button>
            <p style={{ textAlign: "center", fontSize: "11px", color: "#aaa", marginTop: "10px" }}>Hint: 1234 dalte hi auto open hoga</p>
          </form>
        </div>
      </div>
    );
  }

  // AFTER LOGIN DASHBOARD
  return (
    <div style={{ background: "#f5f5f7", minHeight: "100vh", padding: "20px", fontFamily: "sans-serif", color: "#111" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", borderRadius: "20px", padding: "25px", display: "flex", gap: "20px", alignItems: "center" }}>
        <img src="/amit.jpg" alt="Amit" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", border: "3px solid #1DB954" }} />
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: "22px" }}>Amit Kumar Yadav - 23 Years</h1>
          <p style={{ margin: "4px 0", color: "#666" }}>Full Stack Web Developer | Ballia, UP 📍</p>
        </div>
        <button onClick={()=>{setIsLogin(false); setPassword("");}} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #ddd", background: "white", cursor: "pointer" }}>Logout</button>
      </div>

      <div style={{ maxWidth: "900px", margin: "20px auto", background: "white", borderRadius: "20px", padding: "25px" }}>
        <h2 style={{ margin: "0 0 20px 0" }}>Naya Gana Add Karo 🎵</h2>
        <div style={{ display: "grid", gap: "15px", maxWidth: "500px" }}>
          <input placeholder="Gane ka naam" value={song.title} onChange={e=>setSong({...song, title: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd" }} />
          <input placeholder="Artist ka naam" value={song.artist} onChange={e=>setSong({...song, artist: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd" }} />
          <select value={song.category} onChange={e=>setSong({...song, category: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd" }}>
            <option>Ghazipur Vibes</option><option>Lucknow Dreams</option><option>Coding Nights</option><option>Bhojpuri Beats</option><option>Delhi Party</option><option>Home</option>
          </select>
          <input placeholder="MP3 ka link ya /Songs/xyz.mp3" value={song.src} onChange={e=>setSong({...song, src: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd" }} />
          <button onClick={()=>{ alert("Code: " + JSON.stringify(song, null, 2)) }} style={{ padding: "14px", background: "#1DB954", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" }}>+ Add Song</button>
        </div>
      </div>
    </div>
  );
}