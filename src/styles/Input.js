import styled from "styled-components";

export const StyledInput = styled.input`
    width: 22.8125rem;
    height: 3.75rem;
    border: 0.125rem solid var(--color-grey-100);
    border-radius: 0.5rem;
    font-weight: 400;
    padding: 0 1rem;

    ::placeholder{
        color: var(--color-grey-100);
    }

    :focus{
        border-color: var(--color-grey-600);
    }
`

export const StyledButton = styled.button`
    padding: 0 1.25rem;
    height: 2.5rem;
    background-color: var(--color-color-primary);
    border: 0.125rem solid var(--color-color-primary);
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 900;
    color: white;

    :hover{
        background-color: var(--color-primary-50);
        border-color: var(--color-primary-50);
    }
`