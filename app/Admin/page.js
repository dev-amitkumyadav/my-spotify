"use client"
import { useState } from "react"

export default function Admin() {
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(false)
  const [song, setSong] = useState({ title: "", artist: "", category: "Ghazipur Vibes", src: "" })

  if (!isLogin) {
    return (
      <div style={{ padding: "50px", background: "black", color: "white", minHeight: "100vh" }}>
        <h1>Spotify Gold Admin Login</h1>
        <input 
          type="password" 
          placeholder="Password likho: 1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", color: "black" }}
        />
        <button onClick={() => { if(password==="1234") setIsLogin(true); else alert("Galat password") }} style={{ padding: "10px", marginLeft: "10px", background: "gold" }}>
          Login
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: "30px", background: "black", color: "white", minHeight: "100vh" }}>
      <h1>Admin Panel - Naya Gana Add Karo</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
        <input placeholder="Gane ka naam" value={song.title} onChange={e=>setSong({...song, title: e.target.value})} style={{ padding: "10px", color: "black" }} />
        <input placeholder="Artist ka naam" value={song.artist} onChange={e=>setSong({...song, artist: e.target.value})} style={{ padding: "10px", color: "black" }} />
        <select value={song.category} onChange={e=>setSong({...song, category: e.target.value})} style={{ padding: "10px", color: "black" }}>
          <option>Ghazipur Vibes</option>
          <option>Lucknow Dreams</option>
          <option>Coding Nights</option>
          <option>Bhojpuri Beats</option>
          <option>Delhi Party</option>
          <option>Home</option>
        </select>
        <input placeholder="MP3 ka link ya /songs/xyz.mp3" value={song.src} onChange={e=>setSong({...song, src: e.target.value})} style={{ padding: "10px", color: "black" }} />
        <button onClick={() => { console.log(song); alert("Gana copy ho gaya! Ab data.js me paste karo: \n" + JSON.stringify(song)); }} style={{ padding: "12px", background: "gold", color: "black", fontWeight: "bold" }}>
          Add Song
        </button>
      </div>
      <p style={{ marginTop: "20px", color: "gray" }}>Password: 1234 hai. Baad me change kar dena.</p>
    </div>
  )
}