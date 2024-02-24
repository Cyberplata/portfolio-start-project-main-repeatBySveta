import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles';


export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false) // наше бургер меню скрываем и открываем через useState
    const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }

    return (
        // Добавили функционал закрытия бургер меню по нажатию на пустое место
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false)} }>
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
