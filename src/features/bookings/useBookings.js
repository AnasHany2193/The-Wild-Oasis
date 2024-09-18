import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sort
  const sortByRow = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = Number(searchParams.get("page")) || 1;

  const {
    error,
    isLoading,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { count, error, isLoading, bookings };
}
