import type { ReactNode } from "react";
import "@/app/globals.css";
import { AppProviders } from "@/components/AppProviders";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="base:app_id" content="69c22f7b3c2c56b9bbd2f616" />
        <meta
          name="talentapp:project_verification"
          content="d733be89182e380bbbca5990a25dd0946d99592e04e5d87adbfb743e8e9b43b13aabe1fd8ff6e65f21dd08a3fd6011dfe6db1288d1a93ee0d3def87d0989dcbb"
        />
        <meta name="application-name" content="random-picker" />
        <meta
          name="description"
          content="Pseudo-random reveal tool for Base seed picks."
        />
        <title>random-picker</title>
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

