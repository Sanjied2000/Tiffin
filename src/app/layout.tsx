"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={montserrat.className} suppressHydrationWarning>
        <body className="text-gray-700 bg-white">
          <Toaster position="top-center" richColors/>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
