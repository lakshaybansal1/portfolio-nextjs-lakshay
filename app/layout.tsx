// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshay Bansal — Portfolio",
  description: "Back-end & full-stack developer — projects, experience, and contact.",
  metadataBase: new URL("https://portfolio-nextjs-lakshay.vercel.app"),
  openGraph: {
    title: "Lakshay Bansal — Portfolio",
    description: "Back-end & full-stack developer — projects, experience, and contact.",
    type: "website",
    url: "https://portfolio-nextjs-lakshay.vercel.app",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {/* Strip weird attrs some browser extensions inject to avoid hydration mismatch */}
        <Script id="sanitize-body-attrs" strategy="beforeInteractive">
          {`(function(){
            var allowed = new Set(['class','id','style']);
            var b = document.body; if(!b) return;
            for (const n of b.getAttributeNames()) {
              if (!allowed.has(n) && !n.startsWith('data-')) b.removeAttribute(n);
            }
          })();`}
        </Script>

        {/* Structured data for SEO / recruiters */}
        <Script id="person-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Lakshay Bansal",
            email: "mailto:lbansal@albany.edu",
            telephone: "+1-518-229-0731",
            url: "https://portfolio-nextjs-lakshay.vercel.app",
            address: {
              "@type": "PostalAddress",
              streetAddress: "604 Western Ave",
              addressLocality: "Albany",
              addressRegion: "NY",
              postalCode: "12203",
              addressCountry: "US",
            },
            sameAs: [
              "https://github.com/lakshaybansal1",
              "https://www.linkedin.com/in/lakshay-bansal-275456220/",
            ],
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}
