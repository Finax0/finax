import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Finax",
    description: "Sustainable banking.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <head>
                {/* Preload critical resources */}
                <link rel="preload" href="/placeholder.svg?height=400&width=400" as="image" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

                {/* Add preload hints for critical JavaScript */}
                <link rel="preload" href="/_next/static/chunks/framework.js" as="script" />

                {/* Add meta tags for better performance */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </head>
            <body
                className={`${poppins.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
