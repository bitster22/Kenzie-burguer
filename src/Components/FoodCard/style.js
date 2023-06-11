import styled from "styled-components";

export const StyledCard = styled.li`
  border: 0.125rem solid var(--color-grey-100);
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 21.625rem;
  gap: 1rem;
  button {
    width: 6.625rem;
    background-color: var(--color-grey-cart);
    border-color: var(--color-grey-cart);

    :hover {
      background-color: var(--color-grey-300);
      border-color: var(--color-grey-300);
    }
  }

  :hover,
  :focus {
    border-color: var(--color-color-primary);

    button {
      background-color: var(--color-color-primary);
      border-color: var(--color-color-primary);
      :hover {
        background-color: var(--color-primary-50);
        border-color: var(--color-primary-50);
      }
    }
  }
`;

export const StyledDivImage = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: center;
  max-height: 150px;
`;

export const StyledDivTexts = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledHeadline2 = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-grey-600);
`;

export const StyledCategory = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--color-grey-300);
`;

export const StyledPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-color-primary);
`;
