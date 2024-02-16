import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})}
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 90px;
    //font-family: 'Josefin Sans', sans-serif;
    //font-size: 36px;
    //font-weight: 600;
    
    position: relative;
    
    &::before { // сделали нашу линию после заголовка
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`