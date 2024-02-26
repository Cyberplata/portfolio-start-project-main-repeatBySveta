import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
import emailjs from '@emailjs/browser';


// Удалил у компонента Contact: React.FC
export const Contact = () => {

    // Добавили EmailJS логику
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_vt45rqp', 'template_5vx94si', form.current, {
                publicKey: 'iVhk84U5dodHY-ZbC',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset();
    };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}/>
                    <S.Field required placeholder={"email"} name={"email"}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};