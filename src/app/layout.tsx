import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./globals.css";
import { Providers } from "@/lib/store/provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "chat.com",
  description: "chat.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${inter.className} bg-neutral-50 dark:bg-neutral-950 max-md:h-dvh`}
          data-mode="light"
        >
          <div className="container">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
