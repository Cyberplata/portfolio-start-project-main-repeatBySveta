import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header: React.FC = () => { // Refactoring - add React.FC (function component)

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => { // Refactoring в зависимости от разрешения экрана отображаем либо MobileMenu либо DesktopMenu
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu menuItems={items}/> // Refactor
                                        : <DesktopMenu menuItems={items}/>}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
