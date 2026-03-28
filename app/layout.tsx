import type { ReactNode } from "react";
import "@/app/globals.css";
import { AppProviders } from "@/components/AppProviders";

const miniAppEmbed = JSON.stringify({
  version: "1",
  imageUrl: "https://random-picker-gamma.vercel.app/brand/og.svg",
  button: {
    title: "Start Picking",
    action: {
      type: "launch_miniapp",
      name: "random-picker",
      url: "https://random-picker-gamma.vercel.app",
      splashImageUrl: "https://random-picker-gamma.vercel.app/brand/splash.svg",
      splashBackgroundColor: "#0B1020",
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="base:app_id" content="69c7970246489d192593bdd0" />
        <meta
          name="talentapp:project_verification"
          content="d733be89182e380bbbca5990a25dd0946d99592e04e5d87adbfb743e8e9b43b13aabe1fd8ff6e65f21dd08a3fd6011dfe6db1288d1a93ee0d3def87d0989dcbb"
        />
        <meta name="fc:miniapp" content={miniAppEmbed} />
        <meta name="fc:frame" content={miniAppEmbed} />
        <meta name="application-name" content="random-picker" />
        <meta name="description" content="Pseudo-random reveal tool for Base seed picks." />
        <meta property="og:title" content="random-picker" />
        <meta property="og:description" content="Seed-driven pseudo-random reveal tool for Base." />
        <meta property="og:image" content="https://random-picker-gamma.vercel.app/brand/og.svg" />
        <meta property="og:url" content="https://random-picker-gamma.vercel.app" />
        <title>random-picker</title>
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
