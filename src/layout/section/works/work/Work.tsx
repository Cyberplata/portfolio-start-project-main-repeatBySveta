import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";


type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>

            <Discription>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Discription>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;

    ${Link} {
        padding: 10px 0; // Сделали линию от начала текста

        & + ${Link} { // Отступ слева от ссылки
            margin-left: 20px;
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover { // Добавили blur картинкам при наведении
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }

        ${Button} {  
            opacity: 1;  // Показываем кнопку
        }
    }

    ${Button} {
        opacity: 0;  // Изначально кнопка скрыта
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        &::before {  // Псевдоэлемент (линия-прямоугольник) будет всегда 100% 
            width: 100%;
            height: 100%;
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
