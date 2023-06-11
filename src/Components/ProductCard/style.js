import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .icon {
    cursor: pointer;
    color: var(--color-grey-cart);
    font-size: 1.125rem;
    font-weight: 900;
  }
`;

export const StyledDivContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    width: 5rem;
    height: 5rem;
    background-color: var(--color-grey-100);
    border-radius: 0.3125rem;

    img {
      width: 100%;
    }
  }
`;
