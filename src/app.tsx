import type { FC } from "react";

import { AppHeader } from "./components/header";
import { useWallet } from "./hooks/useAccount.tsx";
import { useDogWonContract } from "./hooks/useContract.tsx";
import styles from "./page.module.css";

export const App: FC = () => {
  const { userAddress, connectButton, disconnectButton } = useWallet();
  const { payButton } = useDogWonContract();

  return (
    <>
      <AppHeader />

      {!userAddress && <div className={styles.actions}>{connectButton}</div>}

      {!!userAddress && (
        <div className={styles.actions}>
          <span>{userAddress}</span>
          {disconnectButton}
        </div>
      )}

      <div className={styles.actions}>{payButton}</div>
    </>
  );
};
