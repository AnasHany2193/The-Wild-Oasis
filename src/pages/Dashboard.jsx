import Row from "../ui/Row";
import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import Spinner from "../ui/Spinner";
import { useRecentStays } from "../features/dashboard/useRecentStays";

function Dashboard() {
  const { bookings, isLoading: isBookingsLoading } = useRecentBookings();
  const { stays, isLoading: isStaysLoading, confirmedStays } = useRecentStays();

  if (isBookingsLoading || isStaysLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
