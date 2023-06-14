import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { api } from "../../services/api";
import { FoodCard } from "../../Components/FoodCard";
import { StyledList } from "./style";
import { Modal } from "../../Components/Modal";

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
        toast.error(error, {
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
    getFoods();
  }, [search]);

  const handleForm = (inputSearch) => {
    setSearch(inputSearch);
    if (inputSearch != "") {
      toast.success("Pesquisa realizada com sucesso!", {
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
      <Header
        handleForm={handleForm}
        setIsOpen={setIsOpen}
        productList={productList}
      />
      <StyledList className="foodList">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            {...food}
            setProductList={setProductList}
            productList={productList}
          />
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
