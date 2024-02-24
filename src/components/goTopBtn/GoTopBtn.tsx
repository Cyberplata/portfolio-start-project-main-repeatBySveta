import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    // Добавили логику кнопки наверх, что если она вверху в header, то убирать её, иначе показывать
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, []);

    return (

        // Пустой фрагмент кода, где мы проверяем логику в {}. Если showBtn === true, то покажи разметку
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={ () => {scroll.scrollToTop()} }>
                    <Icon iconId={"arrowGoTop"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`