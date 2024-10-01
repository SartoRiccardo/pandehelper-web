import "./globals.css";

export const metadata = {
  title: "PandeHelper",
  description:
    "A Discord bot for all your Bloons TD 6 Contested Territory needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
