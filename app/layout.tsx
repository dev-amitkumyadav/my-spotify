import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Web - Premium",
  description: "Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#1DB954",
          colorBackground: "#121212",
        },
        elements: {
          formButtonPrimary: "bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold",
          card: "bg-[#121212] border border-[#282828]",
          headerTitle: "text-white",
          headerSubtitle: "text-[#b3b3b3]",
          socialButtonsBlockButton: "border-[#282828] text-white hover:bg-[#282828]",
          socialButtonsBlockButtonText: "text-white",
          dividerLine: "bg-[#282828]",
          dividerText: "text-[#b3b3b3]",
          formFieldLabel: "text-white",
          formFieldInput: "bg-[#2a2a2a] border-[#2a2a2a] text-white focus:border-[#1DB954]",
          footerActionText: "text-[#b3b3b3]",
          footerActionLink: "text-[#1DB954] hover:text-[#1ed760]",
          userButtonPopoverCard: "bg-[#282828] border border-[#333] text-white",
          userButtonPopoverActionButton: "text-white hover:bg-[#333]",
          userButtonPopoverActionButtonText: "text-white",
          userButtonPopoverActionButtonIcon: "text-white",
          userPreviewMainIdentifier: "text-white font-bold",
          userPreviewSecondaryIdentifier: "text-[#b3b3b3]",
          userButtonPopoverFooter: "hidden"
        }
      }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}