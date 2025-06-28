"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

interface PayPalProviderProps {
  children: React.ReactNode;
}

export default function PayPalProvider({ children }: PayPalProviderProps) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AZGzhx4aUNGe5vtuNfpky0TWTYPwR6KJmGz5XPkoSDCWkYQCKkxHj0pIWg4BmqVAwz8ur30Zfzm8TmUN",
        // "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
