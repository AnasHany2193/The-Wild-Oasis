import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";
import BookingDataBox from "./BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";

import { useBooking } from "./useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckout } from "../check-in-out/useCheckout";
import { HiArrowUpOnSquare } from "react-icons/hi2";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            disabled={isCheckingOut}
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
          >
            Check out
          </Button>
        )}

        <Button $variations="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
