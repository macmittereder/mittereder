import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Mac Mittereder - Software Engineer",
  description:
    "Mac Mittereder is a full-stack software engineer who builds web applications with React and .NET.",
  keywords:
    "software engineer, full-stack developer, React, Next.js, portfolio",
  authors: [{ name: "Mac Mittereder" }],
  openGraph: {
    title: "Mac Mittereder - Software Engineer",
    description:
      "Full-stack software engineer building web applications with React and .NET.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
