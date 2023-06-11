import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    gap: 1rem;

    .absolute{
        position: absolute;
        top: 0.6rem;
        right: 0.7rem;
    }
    .relative{
        position: relative;
    }
    .cartIcon{
        color: var(--color-grey-cart);
        font-size: 1.375rem;
        position: absolute;
        z-index: 0;
        top: 70%;
        right: 60%;
    }
`
export const Container = styled.div`
    background-color: var(--color-grey-0);
`

export const CartButton = styled.div`
    color: var(--color-grey-cart);
    font-size: 22px;

`

export const CartCount = styled.span`
    background-color: var(--color-color-primary);
    color: white;
    font-weight: 900;
    font-size: 0.875rem;
    padding: 0.2rem;
    border-radius: 0.4375rem;
    position: relative;
    z-index: 1;
`
export const CartContainer = styled.div`
    position: relative;
    align-content: center;
`

