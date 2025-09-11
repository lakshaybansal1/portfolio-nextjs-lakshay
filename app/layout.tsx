export const metadata = {
  title: "Lakshay Bansal — Portfolio",
  description: "Back-end & full‑stack developer — projects, experience, and contact.",
  metadataBase: new URL("https://lakshay.dev"),
  openGraph: {
    title: "Lakshay Bansal — Portfolio",
    description: "Back-end & full‑stack developer — projects, experience, and contact.",
    type: "website",
    url: "https://lakshay.dev",
  },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
