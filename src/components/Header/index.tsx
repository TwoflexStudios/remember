import { useNavigate } from "react-router-dom";
import StateSelector from "./components/stateSelector";
import { ContainerHeader, Container, MenuContainer, MenuItem } from "./styles";

type Props = {
    setTheme: any;
}

const Header = ({setTheme, ...props} : Props) => {
    const redirectToHomeScreen = () => {
        window.location.href = "/"
    }
    return (
        <Container>
            <ContainerHeader>
                <h1 id="Logo" onClick={redirectToHomeScreen}>Remember me</h1>
                <StateSelector />
            </ContainerHeader>
            <MenuContainer>
                <MenuItem active={true}>
                    <span className="fa-solid fa-tv"/>
                    <p>TV Aberta</p>
                </MenuItem>
                <MenuItem active={false}>
                    <span className="fa-solid fa-calendar"/>
                    <p>Meus Lembretes</p>
                </MenuItem>
                <MenuItem active={false}>
                    <span className="fa-solid fa-star"/>
                    <p>Favoritos</p>
                </MenuItem>
            </MenuContainer>
        </Container>
    )
}

export default Header;