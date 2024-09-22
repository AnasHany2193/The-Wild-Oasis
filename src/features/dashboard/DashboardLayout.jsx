import styled from "styled-components";

import Stats from "./Stats";
import Spinner from "../../ui/Spinner";

import { useCabins } from "../cabins/useCabins";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: 992px) {
    grid-template-rows: auto auto 34rem auto;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-rows: auto auto auto auto 34rem auto;
    grid-template-columns: 1fr;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading: isBookingsLoading } = useRecentBookings();
  const {
    stays,
    numDays,
    confirmedStays,
    isLoading: isStaysLoading,
  } = useRecentStays();

  const { cabins, isLoading: isCabinsLoading } = useCabins();

  if (isBookingsLoading || isStaysLoading || isCabinsLoading)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        numDays={numDays}
        bookings={bookings}
        cabinCount={cabins.length}
        confirmedStays={confirmedStays}
      />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
