"use client";

export default function Admin() {
  return (
    <div style={{ background: "white", minHeight: "100vh", color: "#111", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "70px", fontWeight: "900", margin: 0 }}>Hello!</h1>
        <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>I'm a creative Full-Stack webdeveloper</p>

        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr 260px", gap: "50px", marginTop: "60px" }}>
          <div style={{ background: "#E8DCC6", borderRadius: "20px", overflow: "hidden", height: "400px" }}>
            <img src="/amit.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>

          <div>
            <h3>About me</h3>
            <p style={{ lineHeight: "1.8", color: "#444", fontSize: "15px" }}>
              I'm an all-round web developer based in Ballia, passionate about building responsive, user-friendly web applications. With experience in both frontend and backend, I enjoy turning ideas into clean, functional, and scalable solutions. I work with JavaScript, React, Node.js, and modern frameworks.
            </p>
          </div>

          <div>
            <h3>Details</h3>
            <p><b>Name:</b> Amit Kumar Yadav</p>
            <p><b>Age:</b> 23 years</p>
            <p><b>Location:</b><br/>Ballia, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}