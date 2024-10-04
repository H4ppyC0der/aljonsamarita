import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Aljon Samarita",
    description: "A portfolio website of Aljon Samarita",
};

export default function RootLayout({ children }) {
    return (
        <html className="scroll-smooth" lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('../components/hero-background/Background.svg')] bg-center bg-no-repeat bg-cover bg-fixed`}
            >
                {children}
            </body>
        </html>
    );
}
