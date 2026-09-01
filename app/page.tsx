"use client";
import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  const songs = [
    { title: "Ghazipur Vibes", category: "Ghazipur Vibes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Lucknow Dreams", category: "Lucknow Dreams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { title: "Coding Nights", category: "Coding Nights", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { title: "Bhojpuri Beats", category: "Bhojpuri Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { title: "Delhi Party", category: "Spotify", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { title: "Home Anthem", category: "Home", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  ];

  const filters = ["All", "Spotify", "Home", "Search", "Your Library", "Ghazipur Vibes", "Lucknow Dreams", "Coding Nights", "Bhojpuri Beats"];

  const filteredSongs = songs.filter(s =>
    (activeFilter==="All" || s.category===activeFilter) &&
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{background:'#000', minHeight:'100vh', color:'white'}}>
      <div style={{padding:'15px', background:'#121212', display:'flex', justifyContent:'space-between'}}>
        <h2 style={{color:'#f5c518', margin:0, fontSize:'16px'}}>SPOTIFY GOLD</h2>
        <span style={{fontSize:'12px', background:'#1DB954', color:'black', padding:'4px 10px', borderRadius:'15px'}}>Live: {activeFilter}</span>
      </div>

      <div style={{display:'flex', gap:'8px', flexWrap:'wrap', padding:'15px', background:'#000'}}>
        {filters.map(f => (
          <button key={f} onClick={()=>setActiveFilter(f)} style={{padding:'6px 14px', borderRadius:'20px', border:'none', background: activeFilter===f?'white':'#2a2a2a', color: activeFilter===f?'black':'white', cursor:'pointer', fontSize:'13px'}}>{f}</button>
        ))}
      </div>

      <div style={{padding:'15px'}}>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={`${activeFilter} me search...`} style={{width:'100%', maxWidth:'300px', padding:'10px', borderRadius:'20px', background:'#2a2a2a', color:'white', border:'none', outline:'none'}} />
        <p style={{fontSize:'12px', color:'#888', marginTop:'10px'}}>{filteredSongs.length} songs in {activeFilter}</p>

        <div style={{marginTop:'15px', display:'flex', gap:'10px', flexWrap:'wrap'}}>
          {filteredSongs.map(s => {
            const idx = songs.findIndex(x=>x.title===s.title);
            return <div key={s.title} onClick={()=>setCurrent(idx)} style={{padding:'10px 18px', borderRadius:'25px', background: current===idx?'#1DB954':'#2a2a2a', color: current===idx?'black':'white', cursor:'pointer'}}>{s.title}</div>
          })}
          {filteredSongs.length===0 && <p>Is filter me koi gaana nahi 😕</p>}
        </div>

        <div style={{marginTop:'30px', background:'#181818', padding:'20px', borderRadius:'10px'}}>
          <h3 style={{margin:0}}>Now Playing: {songs[current].title} ({songs[current].category})</h3>
          <audio key={current} controls autoPlay style={{width:'100%', marginTop:'15px'}} src={songs[current].url}></audio>
        </div>
      </div>
    </div>
  )
}