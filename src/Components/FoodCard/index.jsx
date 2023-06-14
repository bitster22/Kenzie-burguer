import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledButton } from "../../styles/Input";
import {
  StyledCard,
  StyledCategory,
  StyledDivImage,
  StyledDivTexts,
  StyledHeadline2,
  StyledPrice,
} from "./style";

export const FoodCard = ({
  id,
  name,
  category,
  price,
  img,
  setProductList,
  productList
}) => {
  const addProductList = () => {
    let sameProduct = false;
    const newProduct = { id, name, price, img };
    productList.forEach((product)=>{
      if(product.id==newProduct.id){
        sameProduct = true;
      }
    })
    if(!sameProduct){
      setProductList((productList) => [...productList, newProduct]);
      toast.success(name+" adicionado ao carrinho!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }else{
      toast.error(name+" já está no carrinho", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <StyledCard>
        <StyledDivImage>
          <img src={img} alt="" />
        </StyledDivImage>
        <StyledDivTexts>
          <StyledHeadline2>{name}</StyledHeadline2>
          <StyledCategory>{category}</StyledCategory>
          <StyledPrice>
            R$ {price.toFixed(2).toString().replace(".", ",")}
          </StyledPrice>
          <StyledButton type="button" onClick={addProductList}>
            Adicionar
          </StyledButton>
        </StyledDivTexts>
      </StyledCard>
    </>
  );
};
