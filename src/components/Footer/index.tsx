import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background: ${({theme}) => theme.bgPrimary};
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
    return (
        <Container>
            <p>Criado com ❤️ por <a href="https://www.linkedin.com/in/weslley-dev/" rel="noreferrer" target="_blank">Weslley Araujo</a></p>
        </Container>
    )
}

export default Footer;