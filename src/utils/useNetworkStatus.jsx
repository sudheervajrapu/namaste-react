import { useState, useEffect } from "react";

export default function useNetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });

    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });
  }, []);

  return networkStatus;
}
