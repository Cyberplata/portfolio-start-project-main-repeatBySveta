import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";


const MenuItem = styled.li`
    position: relative;
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


// Menu
const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    color: transparent; // Убираем обводку у букв

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

    &:hover, &.active {
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


// Mobile Menu

const MobileMenu = styled.nav` // Refactoring
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none; // Изначально наше меню скрыто

    ${props => props.isOpen && css<{ isOpen: boolean }>` // Если пришёл атрибут со значение isOpen: true, то мы будем выстраиваем её по центру и делаем её видимой
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span { // Наша кнопка (средний прямоугольник) будет для раскрытия бургер меню
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>` // Когда меню открыто мы меняем прямоугольники на крестик
            background-color: rgba(255, 255, 255, 0); // Делаем прозрачный именно span, а остальные эл-ты живут своей жизнью
        `}
        
        &::before { // Верхний прямоугольник
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0px);
            `}
        }

        &::after { // Нижний прямоугольник
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0px);
                width: 36px;
            `}
        }
    }
`


// DesktopMenu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

export const S = {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}