import {
  createWalletClientUI,
  createPublicClient,
  createContractClient,
} from "@fotonjs/core";

import { UnlockDogWon } from "./wrappers/UnlockDogWon";

export const walletClient = createWalletClientUI({
  chain: "testnet",
  manifestUrl:
    "https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json",
  actionsConfiguration: {
    twaReturnUrl: "https://t.me/xxx",
  },
});

export const publicClient = createPublicClient({
  api: "testnet",
  // Provide your API key from Ton Center to increase the rate limits
  // authToken: 'token'
});

export const dogWonClient = createContractClient({
  contract: UnlockDogWon,
  publicClient,
  walletClient,
});
