import "tailwindcss/tailwind.css";
import "@/styles/main.css";

import { AppProps } from "next/app";

import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "William's Portfolio",
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    chains: [chain.mainnet],
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
