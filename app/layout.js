import "./globals.css";

export const metadata = {
  title: "Mackenzie Mittereder - Software Engineer",
  description:
    "Full-stack software engineer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and experience.",
  keywords:
    "software engineer, full-stack developer, React, Next.js, portfolio",
  authors: [{ name: "Mackenzie Mittereder" }],
  openGraph: {
    title: "Mackenzie Mittereder - Software Engineer",
    description:
      "Full-stack software engineer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
