import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidate Management App",
  description: "Next.js CRUD mini application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
