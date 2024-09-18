import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    error,
    isLoading,
    data: booking,
  } = useQuery({
    retry: false,
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
  });

  return { booking, error, isLoading };
}
