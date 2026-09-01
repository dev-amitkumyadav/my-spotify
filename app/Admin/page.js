"use client";
import { useState } from "react";

export default function Admin() {
  return (
    <div style={{ background: "white", minHeight: "100vh", fontFamily: "sans-serif", color: "#111" }}>
      <div style={{ maxWidth: "1150px", margin: "0 auto", padding: "70px 20px" }}>
        
        <h1 style={{ textAlign: "center", fontSize: "72px", fontWeight: "900", margin: 0, letterSpacing: "-3px" }}>Hello!</h1>
        <p style={{ textAlign: "center", fontSize: "18px", color: "#555", marginTop: "8px" }}>I'm a creative Full-Stack webdeveloper</p>

        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr 280px", gap: "60px", marginTop: "70px", alignItems: "start" }}>
          
          {/* LEFT - AAPKI PHOTO */}
          <div style={{ background: "#E8DCC6", borderRadius: "24px", overflow: "hidden", height: "420px" }}>
            <img src="/amit.jpg" alt="Amit" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>

          {/* MIDDLE */}
          <div>
            <h3 style={{ fontSize: "23px", fontWeight: "400", margin: 0 }}>About me</h3>
            <p style={{ lineHeight: "1.9", color: "#444", fontSize: "15.5px", marginTop: "18px" }}>
              I am an allround web developer from Ballia. I am a senior programmer with good knowledge of front-end and back-end. 
              I am building <b>My Spotify Clone</b> with Next.js, Tailwind and Vercel. I love clean UI, music apps and real-world projects.
              My dream is to become a top developer from Uttar Pradesh and launch my own startup.
            </p>
            <p style={{ marginTop: "25px", fontSize: "14px", color: "#999" }}>Image by Amit Kumar Yadav</p>
          </div>

          {/* RIGHT - DETAILS UPDATED */}
          <div>
            <h3 style={{ fontSize: "23px", fontWeight: "400", margin: 0 }}>Details</h3>
            <div style={{ marginTop: "18px" }}>
              <p style={{ fontWeight: "700", margin: "0 0 4px 0", fontSize: "14px" }}>Name:</p>
              <p style={{ margin: "0 0 18px 0", color: "#444" }}>Amit Kumar Yadav</p>

              <p style={{ fontWeight: "700", margin: "0 0 4px 0", fontSize: "14px" }}>Age:</p>
              <p style={{ margin: "0 0 18px 0", color: "#444" }}>23 years</p>

              <p style={{ fontWeight: "700", margin: "0 0 4px 0", fontSize: "14px" }}>Location:</p>
              <p style={{ margin: "0 0 18px 0", color: "#444" }}>Ballia, Uttar Pradesh, India</p>
              
              <p style={{ fontWeight: "700", margin: "0 0 4px 0", fontSize: "14px" }}>Project:</p>
              <p style={{ margin: "0 0 22px 0", color: "#444" }}>my-spotify-mu-six.vercel.app</p>

              <div style={{ display: "flex", gap: "18px", fontSize: "18px", fontWeight: "bold" }}>
                <a href="https://github.com/dev-amitkumyadav" style={{textDecoration:"none", color:"black"}}>f</a>
                <span>𝕏</span>
                <span>◎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}