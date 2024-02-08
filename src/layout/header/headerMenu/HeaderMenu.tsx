import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}  {/*Оставляем item иначе схлопнется у нас весь контент,*/}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    color: transparent; // Убираем обводку у букв
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.accent};
    
    & + & {  // Если следующий span после span есть, то применяются свойства
        top: 50%;  // Условная линия, где будет разрыв Масок
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        top: 50%;  // Выравниваем полоску по центру слов + чтобы она выходила на 10px по бокам
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);  // делаем линию по дефолту невидимой
    }
    
    &:hover {
        &::before {
            transform: scale(1); // при наведении линия становится видимой
        }
        
        ${Mask} {
            transform: skewX(12deg) translateX(5px); // наклоняет буквы по оси Х на 12градусов влево и сдвигает верхнюю Маску вправо на 5px
            color: ${theme.colors.font};
            
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px); // тоже самое только для других-нижних Масок и сдвигает влево на 5px
            }
        }
    }
`