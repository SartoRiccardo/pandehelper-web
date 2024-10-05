import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { titleFont } from "@/lib/fonts";

export const metadata = {
  title: "PandeHelper",
  description:
    "A Discord bot for all your Bloons TD 6 Contested Territory needs!",
  openGraph: {
    images: [
      {
        url: "https://pandehelper.sarto.dev/img/site-banner.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport = {
  themeColor: "#ff1744",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${titleFont.variable}`} lang="en">
      <body>
        <div id="content">
          <Header />
          <div className="container mb-5 mt-3">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
