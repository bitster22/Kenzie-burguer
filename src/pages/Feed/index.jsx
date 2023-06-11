import { useEffect, useState } from "react"
import { Header } from "../../Components/Header"
import { api } from "../../services/api"
import { FoodCard } from "../../Components/FoodCard"
import { StyledList } from "./style"

export const Feed = () =>{

    const [foods, setFoods] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    
    const getFoods = async () => {
      try {
        const response = await api.get('/products', {
          params: {
            name_like: search,
          }
        })
  
        setFoods(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getFoods()
  }, [search])

    const handleForm = (inputSearch) =>{
        setSearch(inputSearch)
        console.log(inputSearch)
    }

    return(
        <>
            <Header handleForm={handleForm}/>
            <StyledList>
                {
                    foods.map(food =>
                        <FoodCard
                            key={food.id}
                            {...food}
                        />
                        )
                }
            </StyledList>
        </>
    )
}