import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Contacts = styled.section`
    position: relative;
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;  // Отменяем функцию растягивать input
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;

    font-family: 'Poppins', sans-serif;  // Нужно указывать, так как браузер перебивает этот шрифт
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    
    &::placeholder {  // // Поменяли цвет подсказки и поменяли строчные на заглавные буквы
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {  // Поменяли цвет обводки при фокусе в input
        outline: 1px solid ${theme.colors.borderColor};
    }
`

export const S = {
    Contacts,
    Form,
    Field
}