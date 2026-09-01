"use client";
import { useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [song, setSong] = useState({ title: "", artist: "", category: "Ghazipur Vibes", src: "" });

  if (!isLogin) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f7", fontFamily: "sans-serif" }}>
        <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: "350px" }}>
          <h2 style={{ margin: 0 }}>Admin Login</h2>
          <p style={{ color: "#666", fontSize: "14px" }}>Amit Kumar Yadav - Owner Access</p>
          <input type="password" placeholder="Password dalo" value={password} onChange={e=>setPassword(e.target.value)} style={{ width: "100%", padding: "12px", marginTop: "15px", borderRadius: "8px", border: "1px solid #ddd" }} />
          <button onClick={()=>{ if(password==="1234") setIsLogin(true); else alert("Galat password"); }} style={{ width: "100%", marginTop: "10px", padding: "12px", background: "black", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f5f5f7", minHeight: "100vh", padding: "20px", fontFamily: "sans-serif", color: "#111" }}>
      {/* Profile Header */}
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", borderRadius: "20px", padding: "25px", display: "flex", gap: "20px", alignItems: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #1DB954, #191414)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "30px", fontWeight: "bold" }}>A</div>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: "22px" }}>Amit Kumar Yadav</h1>
          <p style={{ margin: "4px 0", color: "#666" }}>Founder - My Spotify | Ghazipur, UP 📍</p>
          <div style={{ display: "flex", gap: "15px", marginTop: "10px", fontSize: "13px" }}>
            <span style={{ background: "#e8f5e9", padding: "4px 10px", borderRadius: "20px" }}>🟢 Live: my-spotify-mu-six.vercel.app</span>
            <span style={{ background: "#f3e5f5", padding: "4px 10px", borderRadius: "20px" }}>GitHub: dev-amitkumyadav</span>
          </div>
        </div>
        <button onClick={()=>setIsLogin(false)} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #ddd", background: "white", cursor: "pointer" }}>Logout</button>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: "900px", margin: "20px auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "15px" }}>
        <div style={{ background: "white", padding: "18px", borderRadius: "14px" }}><h3 style={{margin:0}}>6</h3><p style={{margin:0,color:"#666",fontSize:"13px"}}>Total Categories</p></div>
        <div style={{ background: "white", padding: "18px", borderRadius: "14px" }}><h3 style={{margin:0}}>∞</h3><p style={{margin:0,color:"#666",fontSize:"13px"}}>Songs Storage</p></div>
        <div style={{ background: "black", color:"white", padding: "18px", borderRadius: "14px" }}><h3 style={{margin:0}}>Admin</h3><p style={{margin:0,color:"#aaa",fontSize:"13px"}}>Full Access</p></div>
      </div>

      {/* Add Song Form */}
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", borderRadius: "20px", padding: "25px" }}>
        <h2 style={{ margin: "0 0 20px 0" }}>Naya Gana Add Karo 🎵</h2>
        <div style={{ display: "grid", gap: "15px", maxWidth: "500px" }}>
          <input placeholder="Gane ka naam" value={song.title} onChange={e=>setSong({...song, title: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd", background: "white", color: "black" }} />
          <input placeholder="Artist ka naam" value={song.artist} onChange={e=>setSong({...song, artist: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd", background: "white", color: "black" }} />
          <select value={song.category} onChange={e=>setSong({...song, category: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd", background: "white", color: "black" }}>
            <option>Ghazipur Vibes</option><option>Lucknow Dreams</option><option>Coding Nights</option><option>Bhojpuri Beats</option><option>Delhi Party</option><option>Home</option>
          </select>
          <input placeholder="MP3 ka link ya /Songs/xyz.mp3" value={song.src} onChange={e=>setSong({...song, src: e.target.value})} style={{ padding: "14px", borderRadius: "10px", border: "1px solid #ddd", background: "white", color: "black" }} />
          <button onClick={()=>{ console.log(song); alert("Gana copy ho gaya! Ab data.js me paste karo:\n\n" + JSON.stringify(song, null, 2)); }} style={{ padding: "14px", background: "#1DB954", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }}>+ Add Song & Generate Code</button>
        </div>
        <p style={{ fontSize: "12px", color: "#999", marginTop: "15px" }}>Note: Abhi ye local copy banayega. Baad me isko database se connect kar denge.</p>
      </div>
    </div>
  );
}