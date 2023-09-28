import "@/styles/main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/components/apollo-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick & Morty Challange",
  description: "An application to complete the Rick and Morty challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloWrapper>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </html>
    </ApolloWrapper>
  );
}
