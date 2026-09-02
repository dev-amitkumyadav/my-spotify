"use client";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  const [activeFilter, setActiveFilter] = useState("All");
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  const songs = [
    {
      title: "Lollipop Lagelu",
      artist: "Pawan Singh",
      category: "Bhojpuri Beats",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/57/bc/9d/57bc9deb-8421-4f66-82fc-9e1e12f256b7/mzaf_16532813576102212893.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b4/35/9e/b4359e91-98fe-5110-3042-9e1dc422cd95/0784027232391.jpg/300x300bb.jpg"
    },
    {
      title: "Chat Deni Maar Deli",
      artist: "Manoj Tiwari",
      category: "Bhojpuri Beats",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f1/b3/9e/f1b39e72-509d-c9b6-1a1b-5af47f0b4957/mzaf_17941746740410840978.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/f0/82/a0/f082a09d-9189-b3eb-0a46-1df0cab04d01/8903431663658_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Rinkiya Ke Papa",
      artist: "Manoj Tiwari",
      category: "Bhojpuri Beats",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/79/c5/77/79c577f1-845c-c3a4-127b-d9ff879cadd4/mzaf_17046283006246999331.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/34/79/8d/34798dca-c753-2daa-60a6-9302ffb8af89/8903431857873_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Raatan Lambiyan",
      artist: "Jubin Nautiyal",
      category: "Lucknow Dreams",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/99/0c/38/990c381b-0530-8c0d-87a9-18b050b97f0a/mzaf_10418866714500530894.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/65/ae/6165aee9-8bb9-0bd4-02b0-5d0f1e6257a3/886449510238.jpg/300x300bb.jpg"
    },
    {
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      category: "Lucknow Dreams",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/38/de/b9/38deb942-d44a-f2bb-205c-ddf05be84693/mzaf_9747647124859107103.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Chaleya",
      artist: "Arijit Singh",
      category: "Lucknow Dreams",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/55/fb/9c/55fb9c31-320a-5dba-0a3f-5e69552085a7/mzaf_13508224660474474886.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1e/ff/32/1eff3216-190d-6fd9-8f68-acbba846e6ee/8903431956026_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Desi Kalakaar",
      artist: "Yo Yo Honey Singh",
      category: "Ghazipur Vibes",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2f/04/cb/2f04cbda-7b81-aa5f-f180-3745d6cc9bbd/mzaf_11447314734014259473.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b3/b5/d9/b3b5d986-7f6d-a860-b8aa-769e1eef1a92/8902894356299_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Brown Munde",
      artist: "AP Dhillon",
      category: "Ghazipur Vibes",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/97/74/69/977469be-a9d5-35a7-80ad-ebe12a799ccc/mzaf_804867738726203367.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/a3/ac/26a3ac64-69e4-95ec-80ab-1f5a477537d2/859742042973_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Excuses",
      artist: "AP Dhillon",
      category: "Ghazipur Vibes",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e8/84/c8/e884c82f-7136-54d8-6754-6b45c6968f29/mzaf_11726474689882106813.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/47/ac/4747ac85-1658-64ae-bc82-220a4d6213d5/859747478890_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Deep Focus",
      artist: "LoFi",
      category: "Coding Nights",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4f/ec/8c/4fec8c02-cc94-c38c-0924-156b573db740/mzaf_14897321776089061401.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/32/74/a1/3274a11f-32e4-dac4-24f5-3e6b1305902e/4550759599707_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Study Music",
      artist: "LoFi",
      category: "Coding Nights",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/83/11/cf831116-4344-254e-83f8-260c6b9233dc/mzaf_16236501640081560393.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/89/b9/48/89b94828-2eb8-b1eb-dac7-6ebb5e8f6c9e/4550759703678_cover.jpg/300x300bb.jpg"
    },
    {
      title: "Chill Vibes",
      artist: "LoFi",
      category: "Coding Nights",
      url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/7f/29/f0/7f29f086-4b7f-05c2-623f-86dfe37b76cc/mzaf_1507891194765177920.plus.aac.p.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ab/fa/80/abfa8049-931a-a539-3c38-55096b9d1725/22777.jpg/300x300bb.jpg"
    }
  ];

  const filters = ["All", "Ghazipur Vibes", "Lucknow Dreams", "Coding Nights", "Bhojpuri Beats"];

  const filteredSongs = songs.filter(s =>
    (activeFilter === "All" || s.category === activeFilter) &&
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#000000] text-white overflow-hidden">
      {/* Sidebar - Optional but adds to Spotify feel */}
      <div className="hidden md:flex flex-col w-64 bg-[#000000] p-4 gap-4 h-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 14.6c-.2.3-.6.4-.9.2-2.4-1.5-5.4-1.8-8.9-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 3.8-.9 7.1-.5 9.8 1.1.2.2.3.6.1.9zm1.3-2.9c-.3.4-.8.5-1.2.3-2.7-1.7-6.8-2.2-9.9-1.2-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.5-1.1 8-1.5 11.1.4.4.2.6.7.4 1.1zm.1-3c-3.2-1.9-8.5-2.1-11.5-1.2-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.5-1 9.4-1.7 13.1.5.5.3.6.8.3 1.3-.2.5-.8.6-1.3.3z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-[#D4AF37]">Spotify Gold</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#121212] md:rounded-lg md:my-2 md:mr-2 overflow-hidden relative">
        {/* Header */}
        <header className="absolute top-0 w-full z-10 flex justify-between items-center p-4 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent">
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white/70 hover:text-white">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white/70 hover:text-white">
              &gt;
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold bg-white text-black px-4 py-1.5 rounded-full hidden sm:block">
              Welcome, {user?.firstName || "Guest"}
            </span>
            <div className="hover:scale-105 transition-transform duration-200">
              <UserButton />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24 relative">
          {/* Hero Gradient Background */}
          <div className="h-64 bg-gradient-to-b from-[#1db954] to-[#121212] p-6 pt-20 flex flex-col justify-end">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">Welcome to UP Vibes</h1>
          </div>

          <div className="p-6">
            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeFilter === f
                      ? 'bg-white text-black'
                      : 'bg-[#2a2a2a] text-white hover:bg-[#333333]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="mt-6 mb-8 relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-[#b3b3b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={`Search in ${activeFilter}...`}
                className="w-full pl-10 pr-4 py-3 bg-[#242424] border-none rounded-full text-white placeholder-[#b3b3b3] focus:ring-2 focus:ring-white focus:bg-[#2a2a2a] transition-all outline-none"
              />
            </div>

            {/* Song Grid */}
            <h2 className="text-2xl font-bold mb-4">{activeFilter} Top Hits</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {filteredSongs.map((s, idx) => {
                const originalIdx = songs.findIndex(x => x.title === s.title);
                const isPlaying = current === originalIdx;
                
                return (
                  <div
                    key={s.title}
                    onClick={() => setCurrent(originalIdx)}
                    className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors duration-300 cursor-pointer group relative"
                  >
                    <div className="relative aspect-square mb-4 shadow-lg w-full bg-[#333]">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover rounded-md" />
                      <button className={`absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center shadow-xl text-black hover:scale-105 hover:bg-[#1ed760] transition-all duration-300 ${isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                        {isPlaying ? (
                          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"/></svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
                        )}
                      </button>
                    </div>
                    <h3 className={`font-bold truncate ${isPlaying ? 'text-[#1DB954]' : 'text-white'}`}>{s.title}</h3>
                    <p className="text-sm text-[#b3b3b3] mt-1 truncate">{s.artist}</p>
                  </div>
                );
              })}
              {filteredSongs.length === 0 && (
                <div className="col-span-full text-center py-10 text-[#b3b3b3]">
                  No songs found in this category 😕
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Now Playing Bar */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#181818] border-t border-[#282828] flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-4 w-1/3 min-w-[180px]">
          <img src={songs[current].image} alt="Playing" className="w-14 h-14 object-cover rounded-md shadow-md" />
          <div className="hidden sm:block truncate">
            <div className="font-bold text-white text-sm hover:underline cursor-pointer truncate">{songs[current].title}</div>
            <div className="text-xs text-[#b3b3b3] hover:underline cursor-pointer truncate">{songs[current].artist}</div>
          </div>
          <button className="text-[#b3b3b3] hover:text-white transition">
             <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-1.15-1.216L.53 8.311a4.544 4.544 0 0 1-.958-3.79A4.616 4.616 0 0 1 1.69 2zm1.096 1.139a3.118 3.118 0 0 0-2.316 2.38 3.045 3.045 0 0 0 .641 2.53l5.571 5.568c.2.2.49.272.748.19.26-.08.455-.286.518-.553l5.53-5.528a3.046 3.046 0 0 0 .678-2.57 3.116 3.116 0 0 0-2.55-2.463 3.082 3.082 0 0 0-3.324 1.833h-1.396a3.082 3.082 0 0 0-3.1-1.387z"/></svg>
          </button>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center max-w-[40%]">
          <audio 
            key={current}
            controls
            className="w-full h-10 filter invert grayscale opacity-80 contrast-200" 
            src={songs[current].url}
          ></audio>
        </div>

        {/* Empty space to balance flex layout */}
        <div className="w-1/3 hidden md:block"></div>
      </div>
    </div>
  )
}