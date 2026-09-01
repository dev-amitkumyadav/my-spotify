"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [activeTab, setActiveTab] = useState("songs");
  const [songs, setSongs] = useState([
    { id: 1, title: "Lover", artist: "Diljit", category: "Home", src: "/Songs/lover.mp3" },
    { id: 2, title: "Bhojpuri Hit", artist: "Khesari", category: "Bhojpuri Beats", src: "/Songs/bhojpuri.mp3" },
  ]);
  const [newSong, setNewSong] = useState({ title: "", artist: "", category: "Home", src: "" });

  useEffect(() => { if (password === "1234") setIsLogin(true); }, [password]);

  if (!isLogin) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f2f5", fontFamily: "sans-serif", padding: "15px" }}>
        <div style={{ background: "white", padding: "25px", borderRadius: "20px", width: "100%", maxWidth: "360px", textAlign: "center", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
          {!imgError? <img src="/amit.jpg" onError={()=>setImgError(true)} alt="Amit" style={{ width: "100%", height: "280px", borderRadius: "14px", objectFit: "cover" }} /> : <div style={{ width: "100%", height: "280px", borderRadius: "14px", background: "linear-gradient(135deg, #1DB954, #191414)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "80px", fontWeight: "bold" }}>A</div>}
          <h2 style={{ margin: "16px 0 4px 0", color: "red" }}>Amit Kumar Yadav</h2>
          <p style={{ margin: 0, color: "#007bff", fontWeight: "700", fontSize: "13px" }}>Age 23 • Full Stack Web Developer</p>
          <p style={{ margin: "5px 0 15px 0", color: "#2ecc71", fontSize: "12px", fontWeight: "600" }}>Founder - My Spotify | Ballia, UP</p>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "900", margin: "0 0 6px 0", fontSize: "14px" }}>Admin Password</p>
            <input type="password" autoFocus placeholder="Password dalo" value={password} onChange={e=>setPassword(e.target.value)} style={{ width: "100%", padding: "13px", borderRadius: "10px", border: "1px solid #ddd", boxSizing: "border-box" }} />
            <button onClick={()=>setIsLogin(true)} style={{ width: "100%", marginTop: "12px", padding: "13px", background: "black", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold" }}>Login</button>
          </div>
        </div>
      </div>
    );
  }

  const addSong = () => {
    if(!newSong.title ||!newSong.src) return alert("Title aur Src bharo!");
    setSongs([...songs, { id: Date.now(),...newSong }]);
    setNewSong({ title: "", artist: "", category: "Home", src: "" });
    alert("Song Add Ho Gaya! Ab iska code neeche Generate Code se copy karke page.tsx me dalna hoga.");
  };

  return (
    <div style={{ background: "#f5f5f7", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* HEADER */}
      <div style={{ background: "white", padding: "15px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10, borderBottom: "1px solid #eee" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!imgError? <img src="/amit.jpg" onError={()=>setImgError(true)} style={{ width: "45px", height: "45px", borderRadius: "10px", objectFit: "cover" }} /> : <div style={{ width: "45px", height: "45px", borderRadius: "10px", background: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>A</div>}
          <div><b style={{ color: "red" }}>Amit Kumar Yadav</b><br/><span style={{ fontSize: "11px", color: "#007bff" }}>Admin Panel • Live</span></div>
        </div>
        <button onClick={()=>{setIsLogin(false); setPassword("");}} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #ddd", background: "white", cursor: "pointer" }}>Logout</button>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px", display: "grid", gridTemplateColumns: "220px 1fr", gap: "20px" }}>
        {/* SIDEBAR */}
        <div style={{ background: "white", borderRadius: "14px", padding: "10px", height: "fit-content" }}>
          {[
            { id: "songs", label: "🎵 All Songs", count: songs.length },
            { id: "add", label: "➕ Add New Song" },
            { id: "category", label: "📁 Categories", count: 6 },
            { id: "stats", label: "📊 Website Stats" },
            { id: "code", label: "💻 Generate Code" },
          ].map(tab=>(
            <div key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{ padding: "12px", borderRadius: "10px", cursor: "pointer", background: activeTab===tab.id? "black" : "transparent", color: activeTab===tab.id? "white" : "black", marginBottom: "6px", display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: "500" }}>
              <span>{tab.label}</span>{tab.count && <span style={{ background: activeTab===tab.id? "#333" : "#eee", padding: "2px 8px", borderRadius: "10px", fontSize: "11px" }}>{tab.count}</span>}
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", minHeight: "500px" }}>

          {activeTab==="songs" && (
            <div>
              <h2 style={{ margin: "0 0 15px 0" }}>All Songs ({songs.length}) - Edit / Delete Karo</h2>
              <div style={{ display: "grid", gap: "10px" }}>
                {songs.map(s=>(
                  <div key={s.id} style={{ border: "1px solid #eee", borderRadius: "10px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div><b>{s.title}</b> - {s.artist} <br/><span style={{ fontSize: "11px", background: "#e8f5e9", padding: "2px 6px", borderRadius: "6px" }}>{s.category}</span></div>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <button onClick={()=>setSongs(songs.filter(x=>x.id!==s.id))} style={{ background: "#ffebee", border: "none", padding: "6px 10px", borderRadius: "6px", color: "red", cursor: "pointer" }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab==="add" && (
            <div style={{ maxWidth: "450px" }}>
              <h2>Naya Gana Add Karo</h2>
              <div style={{ display: "grid", gap: "12px", marginTop: "15px" }}>
                <input placeholder="Gane ka naam - jaise Lover" value={newSong.title} onChange={e=>setNewSong({...newSong, title: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} />
                <input placeholder="Artist - jaise Diljit" value={newSong.artist} onChange={e=>setNewSong({...newSong, artist: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} />
                <select value={newSong.category} onChange={e=>setNewSong({...newSong, category: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }}>
                  <option>Home</option><option>Ghazipur Vibes</option><option>Bhojpuri Beats</option><option>Lucknow Dreams</option><option>Coding Nights</option><option>Delhi Party</option>
                </select>
                <input placeholder="MP3 Link - /Songs/xyz.mp3" value={newSong.src} onChange={e=>setNewSong({...newSong, src: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} />
                <button onClick={addSong} style={{ padding: "12px", background: "#1DB954", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>+ Add Song</button>
              </div>
            </div>
          )}

          {activeTab==="category" && (
            <div><h2>Categories</h2><p>Aapke app me 6 categories hain. Aap yaha se naam badal sakte ho (future feature).</p><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "15px" }}>{["Home","Ghazipur Vibes","Bhojpuri Beats","Lucknow Dreams","Coding Nights","Delhi Party"].map(c=><div key={c} style={{ padding: "15px", border: "1px solid #eee", borderRadius: "10px", background: "#fafafa" }}>{c}</div>)}</div></div>
          )}

          {activeTab==="stats" && (
            <div><h2>Website Stats</h2><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "15px", marginTop: "15px" }}><div style={{ background: "#e8f5e9", padding: "20px", borderRadius: "12px" }}><h3 style={{margin:0}}>{songs.length}</h3><p style={{margin:0, fontSize: "13px"}}>Total Songs</p></div><div style={{ background: "#e3f2fd", padding: "20px", borderRadius: "12px" }}><h3 style={{margin:0}}>1.2k</h3><p style={{margin:0, fontSize: "13px"}}>Total Plays (Dummy)</p></div><div style={{ background: "black", color: "white", padding: "20px", borderRadius: "12px" }}><h3 style={{margin:0}}>Live</h3><p style={{margin:0, fontSize: "13px"}}>Vercel Status</p></div></div></div>
          )}

          {activeTab==="code" && (
            <div><h2>💻 Final Code Generate Karo</h2><p style={{ color: "#666", fontSize: "13px" }}>Add kiye hue gano ko app me live karne ke liye ye code copy karo aur `app/page.tsx` me paste karo.</p><pre style={{ background: "#111", color: "#0f0", padding: "15px", borderRadius: "10px", overflowX: "auto", fontSize: "11px", marginTop: "15px" }}>{JSON.stringify(songs, null, 2)}</pre><button onClick={()=>{navigator.clipboard.writeText(JSON.stringify(songs, null, 2)); alert("Code Copy Ho Gaya!");}} style={{ marginTop: "10px", padding: "10px 18px", background: "black", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>Copy Code</button></div>
          )}

        </div>
      </div>
    </div>
  );
}