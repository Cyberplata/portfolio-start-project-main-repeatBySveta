import styled from "styled-components";
import {theme} from "../../styles/Theme";


const Slider = styled.div`
    //border: 1px solid red;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    color: rgb(255, 255, 255);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 32px; // Pixel perfect
    display: inline-block;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        
        & + span {  // Убрали по всем краям margin и добавили margin-left только если перед span есть span
            margin-left: 5px;
        }
        
        &.active {  // Наш средний span
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}