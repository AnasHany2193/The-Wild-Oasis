import styled from "styled-components";

import Heading from "./ui/Heading";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello, Wild Oasis</Heading>
        <Heading as="h2">Check in Out</Heading>
        <Heading as="h3">Hello, Wild Oasis</Heading>
      </StyledApp>
    </>
  );
}

export default App;
