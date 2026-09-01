"use client";
import { useState } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const [current, setCurrent] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
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

  // Final Filtering Logic
  const filteredSongs = songs.filter((song) => {
    const matchCategory = activeFilter === "All" || song.category === activeFilter;
    const matchSearch = song.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (!isLoaded) return <div style={{background:'#000', height:'100vh'}}></div>;

  if (!isSignedIn) {
    return (
      <div style={{ background: '#121212', minHeight: '100vh', color: 'white' }}>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
          <h2>Login karke Ghazipur Vibes suno 🎧</h2>
          <SignInButton mode="modal">
            <button style={{background: 'gold', color: 'black', padding: '12px 25px', borderRadius: '25px', marginTop: '20px', fontWeight: 'bold', border: 'none', cursor: 'pointer'}}>Log In / Sign Up</button>
          </SignInButton>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#121212', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '280px', background: '#000', padding: '20px', minHeight: '100vh' }}>
          <h2 style={{color: '#f5c518', letterSpacing: '2px', fontSize: '16px', marginBottom: '20px'}}>SPOTIFY GOLD</h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  background: activeFilter === filter? 'white' : '#2a2a2a',
                  color: activeFilter === filter? 'black' : 'white',
                  fontSize: '13px',
                  fontWeight: activeFilter === filter? 'bold' : 'normal'
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '10px', background: '#181818', padding: '12px', borderRadius: '10px' }}>
             <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`${activeFilter} me search...`} style={{ width: '100%', padding: '10px', borderRadius: '20px', border: 'none', background: '#2a2a2a', color: 'white', outline: 'none' }} />
             <p style={{fontSize: '11px', color: '#1DB954', marginTop: '8px'}}>{filteredSongs.length > 0? filteredSongs.map(s=>s.title).join(", ") : "No songs"}</p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '25px', background: '#121212' }}>
          <p style={{color: '#aaa', fontSize: '13px'}}>Good Evening</p>
          <h2 style={{margin: '8px 0'}}>Tumhara Spotify chal gaya!</h2>
          <p style={{fontSize: '13px', marginBottom: '20px'}}>{filteredSongs.length} songs found in <b>{activeFilter}</b></p>

          {/* Songs List Grid */}
          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px'}}>
            {filteredSongs.map((song) => {
              const originalIndex = songs.findIndex(s => s.title === song.title);
              return (
                <div key={song.title} onClick={() => setCurrent(originalIndex)} style={{background: current === originalIndex? 'white' : '#2a2a2a', color: current === originalIndex? 'black' : 'white', padding: '10px 18px', borderRadius: '25px', cursor: 'pointer', fontSize: '14px', fontWeight: current === originalIndex? 'bold' : 'normal'}}>
                  {song.title}
                </div>
              )
            })}
          </div>

          {filteredSongs.length === 0 && <p style={{color: '#888'}}>Is filter me koi gaana nahi hai 😕</p>}

          <div style={{ marginTop: '20px', background: '#2a2a2a', padding: '20px', borderRadius: '10px' }}>
            <h3>Now Playing: {songs[current].title} ({songs[current].category})</h3>
            <audio key={current} controls autoPlay style={{ width: '100%', marginTop: '15px' }} src={songs[current].url}></audio>
          </div>
        </div>
      </div>
    </div>
  );
}