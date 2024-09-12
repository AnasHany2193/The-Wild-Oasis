import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>Hello, Wild Oasis</H1>
    </>
  );
}

export default App;
