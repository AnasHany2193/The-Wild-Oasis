import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  /* Media Query for small screens */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
  }
`;

export default TableOperations;
