import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/maskGroup.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { StyledButton, StyledInput } from "../../styles/Input";
import { CartContainer, CartCount, Container, StyledHeader } from "./style";
import { StyledForm } from "../../styles/form";
export const Header = ({ handleForm, setIsOpen, productList }) => {
  const [inputSearch, setinputSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleForm(inputSearch);
  };
  return (
    <Container>
      <StyledHeader>
        <img src={logo} alt="" />
        <StyledForm onSubmit={handleSubmit}>
          <CartContainer onClick={() => setIsOpen(true)}>
            <FaShoppingCart className="cartIcon" />
            <CartCount>{productList.length}</CartCount>
          </CartContainer>
          <div className="relative">
            <StyledInput
              type="text"
              placeholder="Digitar Pesquisa"
              onChange={(event) => setinputSearch(event.target.value)}
            />
            <StyledButton className="absolute">
              <AiOutlineSearch />
            </StyledButton>
          </div>
        </StyledForm>
      </StyledHeader>
    </Container>
  );
};
