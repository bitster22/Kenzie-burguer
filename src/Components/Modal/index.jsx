import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import { StyledButton } from "../../styles/Input";
import { ModalHeader, ModalOverlay, StyledList, TotalValue } from "./style";
import { ProductCard } from "../ProductCard";

export const Modal = ({ setIsOpen, productList, setProductList }) => {
  const removeProductList = (productId) => {
    setProductList((productList) =>
      productList.filter((product) => product.id !== productId)
    );
    toast.success('Produto removido com sucesso!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  const removeAllProducts = () =>{
    setProductList((productList) => []);
    toast.success('Todos os produtos removidos com sucesso!', {
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

  const totalPrice = productList.reduce((accPrice, product) => {
    return accPrice + Number(product.price);
  }, 0);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <ModalOverlay role="dialog">
      <div ref={modalRef} className="modalContainer">
        <ModalHeader>
          <p>Carrinho de compras</p>
          <span
            ref={buttonRef}
            className="closeButton"
            onClick={() => setIsOpen(false)}
          >
            X
          </span>
        </ModalHeader>
        <div className="modalBox">
          <StyledList>
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                removeProductList={removeProductList}
              />
            ))}
          </StyledList>

          <TotalValue>
            <span>Total</span>
            <p>R$ {totalPrice.toFixed(2).toString().replace(".", ",")}</p>
          </TotalValue>

          <StyledButton onClick={removeAllProducts}>Remover todos</StyledButton>
        </div>
      </div>
    </ModalOverlay>
  );
};
