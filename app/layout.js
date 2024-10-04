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
    creator: "Christian Rodriguez",
    keywords: ["Virtual Assistant", "VA", "Customer Service"],
    openGraph: {
        type: "website",
        url: "https://aljonsamarita.vercel.app/",
        title: "Personal Portfolio Website of Aljon Samarita",
        description: "A portfolio website of Aljon Samarita",
        images: "/assets/profile.png",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/images/favicon.png",
        shortcut: "/images/favicon.png",
    },
    verification: {
        google: "google",
        yandex: "yandex",
        yahoo: "yahoo",
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_BASE_URL,
    },
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
