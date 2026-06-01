import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website built with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-gray-900">
        {children}
        <div id="tooltip-root" />
        <SpeedInsights />
        </body>
    </html>
  );
}
