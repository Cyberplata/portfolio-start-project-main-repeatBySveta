import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Svetlana Dyablo</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>

                    <PhotoWrapper>
                        <Photo src={photo}
                               alt=""/> {/*внутри Не парного тега мы не можем ничего создать -> создаём обертку PhotoWrapper*/}
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #f5ca94;
    display: flex; // даёт больше расстояния в секции, так как по дефолту align-items: stretch
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;
    
    &::before {  // Создаём нашу рамку на заднем фоне
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} { // меняем размер картинки, когда размер окна меньше 576px
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    //font-size: 27px;
    //font-weight: 400;

    ${font( {weight: 400, Fmax: 27, Fmin: 20, })}
`

const Name = styled.h2`
    ${font( {family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36, })} // Вместо 3-х строчек, красивый наш мексин
    
    //font-family: 'Josefin Sans', sans-serif;
    //font-weight: 700;
    //font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before { // Отображаем линию под тексом
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`