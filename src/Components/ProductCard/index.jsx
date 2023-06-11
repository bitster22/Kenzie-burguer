import { FaTrash } from "react-icons/fa";
import { StyledCard, StyledDivContainer } from "./style";

export const ProductCard = ({ product, removeProductList }) => {
  return (
    <StyledCard>
      <StyledDivContainer>
        <div>
          <img src={product.img} alt="" />
        </div>
        <h3>{product.name}</h3>
      </StyledDivContainer>
      <FaTrash className="icon" onClick={() => removeProductList(product.id)} />
    </StyledCard>
  );
};
