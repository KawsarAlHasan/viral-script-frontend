"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
  onError: (err: any) => void;
}

export default function PayPalButton({
  amount,
  onSuccess,
  onError,
}: PayPalButtonProps) {
  return (
    <PayPalButtons
      style={{ layout: "vertical" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order!.capture().then((details) => {
          onSuccess(details);
        });
      }}
      onError={(err) => {
        onError(err);
      }}
    />
  );
}
