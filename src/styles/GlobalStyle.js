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
`