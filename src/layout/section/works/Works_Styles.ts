import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";


const Works = styled.section`
    position: relative;
    
    ${FlexWrapper} {  // Делаем отступ 30px, как на мобилках между элементами Work
        gap: 30px;
    }
`

const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0; // Сделали линию от начала текста

        & + ${Link} { // Отступ слева от ссылки
            margin-left: 20px;
        }
    }
    
    @media ${theme.media.desktop} {
        max-width: 540px; // Максимальная ширина будет ограничиваться только на desktop, когда ширина будет больше 1140px
    }
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;  // Изначально кнопка скрыта
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};

        &::before {  // Псевдоэлемент (линия-прямоугольник) будет всегда 100% 
            width: 100%;
            height: 100%;
        }
    }

    &::before { // Добавили blur картинкам при наведении
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animations.transition};
    }

    &:hover { // Добавили blur картинкам при наведении
        &::before {
            opacity: 1;
        }
        
        ${Button} {  
            opacity: 1;  // Показываем кнопку
            transform: translate(-50%, -50%);
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;  // Показываем размытую картинку
        }

        ${Button} {
            opacity: 1;  // Показываем кнопку
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Discription = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`

`

const Text = styled.p`
    margin: 14px 0 10px;
`


export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Discription,
    Title,
    Text
}