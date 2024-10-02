import { Staatliches } from "next/font/google";

const slabo = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
});

module.exports = {
  titleFont: slabo,
};
