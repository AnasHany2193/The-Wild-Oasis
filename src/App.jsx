import styled from "styled-components";

import Heading from "./ui/Heading";
import GlobalStyles from "./styles/GlobalStyles";
import Row from "./ui/Row";
import Button from "./ui/Button";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello, Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in Out</Heading>
              <Button onClick={() => alert("Checked In")}>check in</Button>
              <Button
                sizes="small"
                variations="secondary"
                onClick={() => alert("Checked Out")}
              >
                check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Hello, Wild Oasis</Heading>
            <form>
              <input type="number" />
              <input type="number" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
