import { FC, ReactNode } from "react"
import { CardListStyled, CardStyled } from "./ui.style";


const Card: FC<{ children: ReactNode }> = ({ children }) => {
    return <CardStyled>{children}</CardStyled>
}

const CardList: FC<{ children: ReactNode }> = ({ children }) => {
    return <CardListStyled>{children}</CardListStyled>
}

export { Card, CardList }