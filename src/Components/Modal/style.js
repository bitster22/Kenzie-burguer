import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);

  .modalBox {
    width: 100%;
    max-width: 500px;
    padding: 2rem;
    background-color: white;
  }
  .modalContainer {
    width: 100%;
    max-width: 500px;
  }

  .closeButton {
    cursor: pointer;
  }

  button {
    width: 100%;
    padding: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--color-grey-100);
    border-color: var(--color-grey-100);
    color: var(--color-grey-300);

    :hover {
      background-color: var(--color-grey-300);
      border-color: var(--color-grey-300);
      color: var(--color-grey-100);
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 1rem;
  background-color: var(--color-color-primary);
  border-radius: 0.3125rem 0.3125rem 0rem 0rem;
  height: 3.375rem;
  color: white;
  width: 100%;
  max-width: 500px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 0.125rem solid var(--color-grey-100);
  margin-top: 1rem;

  span {
    font-weight: 600;
    font-size: 0.875rem;
  }
  p {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-grey-300);
  }
`;
