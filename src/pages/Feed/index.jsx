import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { api } from "../../services/api";
import { FoodCard } from "../../Components/FoodCard";
import { StyledList } from "./style";
import { Modal } from "../../Components/Modal";
import { ProductCard } from "../../Components/ProductCard";

export const Feed = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      try {
        const response = await api.get("/products", {
          params: {
            name_like: search,
          },
        });

        setFoods(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getFoods();
  }, [search]);

  const handleForm = (inputSearch) => {
    setSearch(inputSearch);
  };

  return (
    <>
      <Header
        handleForm={handleForm}
        setIsOpen={setIsOpen}
        productList={productList}
      />
      <StyledList>
        {foods.map((food) => (
          <FoodCard key={food.id} {...food} setProductList={setProductList} />
        ))}
      </StyledList>
      {isOpen ? (
        <Modal
          setIsOpen={setIsOpen}
          setProductList={setProductList}
          productList={productList}
        ></Modal>
      ) : null}
    </>
  );
};
