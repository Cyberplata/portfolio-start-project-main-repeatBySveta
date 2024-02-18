import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section``


const Skill = styled.div`
    width: 330px;
    padding: 42px 20px 52px; // Поменяли padding для desktop - pixel perfect
    flex-grow: 1;
    
    @media ${theme.media.mobile} { // Убрали для мобилок боковые отступы
        padding: 62px 0 40px;
    }
`

export const IconWrapper = styled.div`
    position: relative;
    
    &::before {  // Позиционируем наш ромбик
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;  // Двигаем относительно центральной точки
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
`

export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText,
}