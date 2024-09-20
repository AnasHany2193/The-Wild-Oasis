import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      @media (max-width: 768px) {
        width: 100%;
        padding: 2rem;
      }
    `}
  
  overflow: hidden;
  font-size: 1.4rem;

  /* Responsive font-size */
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 1.6rem 2rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
