import Button from "../../ui/Button";

import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      sizes="small"
      $variations="primary"
      disabled={isCheckingOut}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
