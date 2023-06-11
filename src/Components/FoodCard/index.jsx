import { StyledButton } from "../../styles/Input"
import { StyledCard, StyledCategory, StyledDivImage, StyledDivTexts, StyledHeadline2, StyledPrice } from "./style"

export const FoodCard = ({name, category, price, img}) =>{
    return(
        <StyledCard>
            <StyledDivImage>
                <img src={img} alt="" />
            </StyledDivImage>
            <StyledDivTexts>
                <StyledHeadline2>{name}</StyledHeadline2>
                <StyledCategory>{category}</StyledCategory>
                <StyledPrice>R$ {price.toFixed(2).toString().replace(".",",")}</StyledPrice>
                <StyledButton type="button">Adicionar</StyledButton>
            </StyledDivTexts>
            
        </StyledCard>
    )
}