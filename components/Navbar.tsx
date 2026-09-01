"use client";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div style={{ height: '60px', background: '#000' }}></div>;
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      background: '#000',
      borderBottom: '1px solid #1a1a1a'
    }}>
      <h2 style={{ color: '#D4AF37', margin: 0, letterSpacing: '2px' }}>SPOTIFY GOLD</h2>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal">
              <button style={{
                background: 'transparent',
                border: '1px solid #333',
                color: 'white',
                padding: '8px 18px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Log in
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button style={{
                background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                color: 'black',
                padding: '8px 20px',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 0 20px rgba(212,175,55,0.4)'
              }}>
                Sign up Premium
              </button>
            </SignUpButton>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#111', padding: '5px 12px', borderRadius: '20px', border: '1px solid #D4AF37' }}>
            <span style={{ fontSize: '12px', color: '#D4AF37' }}>GOLD</span>
            <UserButton />
          </div>
        )}
      </div>
    </div>
  )
}