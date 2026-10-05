import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barcraft",
  description: "Barcraft",

  verification: {
    google: "B4gsgild0e0mGyDl3Vcsdz2-qPuG1Xck00iFL_F73eE",
    other: {
      "msvalidate.01": "3D8DB2D729E6AD52E55F3CC39AC38797",
      "p:domain_verify": "1add12a4aa841ba3e181e98db6d365b7",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NMNT9GW6');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMNT9GW6"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager */}

        {children}
      </body>
    </html>
  );
}