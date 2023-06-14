import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --color-color-primary: #27ae60;
        --color-primary-50: #93d7af;
        --color-color-secondary: #eb5757;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #e0e0e0;
        --color-grey-cart: #bdbdbd;
        --color-grey-0: #f5f5f5;
        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-information: #155bcb;

        --toastify-color-success: var(--color-sucess);
        --toastify-color-error: var(--color-negative);
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

@media (max-width: 600px) {
   header{
    width: 100%;
   }
   form{
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -1rem;
   }
   .foodList{
    overflow-x: scroll;
    flex-wrap: nowrap;
    width: 100%;
    gap: 1rem;
   }
  }
  @media (min-width: 601px) {
    .foodList{
        width: 80vw;
        gap: 3rem;
        flex-wrap: wrap;
    }
  }
`;
