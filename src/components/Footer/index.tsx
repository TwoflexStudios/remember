import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background: ${({theme}) => theme.headerPrimary};
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    p {
        color: white;
        margin-left: 10px;
        font-size: 13px;

        a {
            text-decoration: none;
            font-weight: bold;
            color: white;
        }
    }
`;

const Footer = () => {
    const [types, setTypes] = useState(["Weslley Araujo      ", "Twoflex Studios      "])
    const [typing, setTyping] = useState(types[0]);
    const [currentTyping, setCurrentTyping] = useState(1);
    const [newType, setNewType] = useState(false)

    // useEffect(() => {
    //     if(newType){
    //         if(typing !== types[currentTyping]){
    //             setTimeout(() => {
    //                 setTyping(typeing => types[currentTyping].substring(0, typeing.length + 1))
    //             }, (200));
    //         }else{
    //             setNewType(false);
    //         }
    //     }else{
    //         if(typing.length === 0){
    //             setNewType(true)
    //             setCurrentTyping(current => current === 0 ? 1 : 0)
    //         }else{
    //             setTimeout(() => {
    //                 setTyping(typeing => typeing.substring(0, typeing.length - 1))
    //             }, (30));
    //         }
    //     }
    // },[typing, newType])


    return (
        <Container>
            <p>Feito com ❤️ por <a href="https://www.linkedin.com/in/weslley-dev/" rel="noreferrer" target="_blank">{typing}</a></p>
        </Container>
    )
}

export default Footer;