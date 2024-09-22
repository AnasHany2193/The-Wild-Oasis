import styled from "styled-components";

import Stats from "./Stats";
import SalesChart from "./SalesChart";
import Spinner from "../../ui/Spinner";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

import { useCabins } from "../cabins/useCabins";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isBookingsLoading } = useRecentBookings();
  const {
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
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart numDays={numDays} bookings={bookings} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
