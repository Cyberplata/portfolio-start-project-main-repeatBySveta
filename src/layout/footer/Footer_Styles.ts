import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


const Footer = styled.footer`
    position: relative;
    
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})} // Мексин вместо медиа-запроса и вместо 3-х свойств
    letter-spacing: 3px;
    //font-family: 'Josefin Sans', sans-serif;
    //font-size: 22px;
    //font-weight: 700;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;  // Добавляем кружочки на задний фон ссылок
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.accent};
    
    &:hover {  // При наведении на ссылку меняем цвет иконки
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
`


export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}