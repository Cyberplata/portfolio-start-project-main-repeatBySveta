import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
// import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "../skills/Skills_Styles";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>  {/*Добавили наш ромбик*/}
                        <Icon iconId={"quoteAltRightSvg"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #d6b8f8;
    min-height: 50vh;
    
    ${S.IconWrapper} {
        margin: 28px 0 72px;  // Pixel perfect
    }
`