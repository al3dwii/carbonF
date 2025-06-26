import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import { OrgProvider } from "@/contexts/OrgContext";

const inter = Inter({ subsets:["latin"], variable:"--font-inter" });

export const metadata = { title: "CarbonCore Console" };
export const viewport = { width: 1024, initialScale: 1 };

import type { LayoutProps } from "@/types/layout";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <body className="bg-gray-50 text-gray-800 antialiased">
          <Providers>
            <OrgProvider>{children}</OrgProvider>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
