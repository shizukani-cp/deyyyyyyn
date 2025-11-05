import "@/styles/style.css";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://shizukani-cp.github.io/basestyle.css/basestyle-dark.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
