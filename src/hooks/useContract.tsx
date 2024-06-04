import { useEffect, useState } from "react";
import { parseTon } from "@fotonjs/core";

import { dogWonClient, publicClient } from "../ton-clients.ts";

const contractAddress = "EQD1nMWC7U3VHuSnTawv5bQDuKXHkOXhS2vJgGo7rnzVkdFX";

export const useDogWonContract = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dogWonClient.setAddress(contractAddress);
  }, []);

  const onPay = async () => {
    if (!contractAddress) return;

    setLoading(true);

    const res = await dogWonClient.write({
      method: "payment",
      value: parseTon("0.8"),
      payload: undefined,
    });
    console.log(res);
    // If the transaction was successful, wait for the transaction receipt with the help of the publicClient
    if (res.data) {
      console.log("Transaction data:", res.data);

      await publicClient.waitForTransaction({ hash: res.data });
    } else {
      //   alert(res.error?.message || '')
    }

    setLoading(false);
  };

  const payButton = (
    <>
      <button disabled={loading} onClick={onPay}>
        {loading ? "Loading..." : "Unlock"}
      </button>
    </>
  );

  return {
    contractAddress,
    payButton,
  };
};
