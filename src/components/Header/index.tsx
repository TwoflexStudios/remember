import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StateSelector from "./components/stateSelector";
import { ContainerHeader, Container, MenuContainer, MenuItem } from "./styles";

type Props = {
    setTheme: any;
    theme: "dark" | "blue";
}

const Header = ({setTheme, theme, ...props} : Props) => {
    const [currentPath, setCurrentPath] = useState("/");
    const navigator = useNavigate()

    const redirectToHomeScreen = () => {
        navigator("")
    }

    useEffect(() => {
        setCurrentPath(window.location.pathname)
    },[window.location.pathname])

    const gotoPath = (path:string) => {
        navigator(path)
    }

    const toggleTheme = () => {
        if(theme === "blue"){
            localStorage.setItem("@preferedTheme", "dark")
            setTheme("dark")
        }else{
            localStorage.setItem("@preferedTheme", "blue")
            setTheme("blue")
        }
    }

    return (
        <Container>
            <ContainerHeader>
                <h1 id="Logo" onClick={redirectToHomeScreen}>Remember me</h1>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    
                    {theme === "blue" ?
                        <span className="fa-solid fa-moon" onClick={toggleTheme} style={{fontSize:20, marginRight:40, cursor:"pointer", color:"white"}}/>
                        :
                        <span className="fa-solid fa-sun" onClick={toggleTheme} style={{fontSize:20, marginRight:40, cursor:"pointer", color:"white"}}/>
                    }
                    <StateSelector />
                </div>
            </ContainerHeader>
            <MenuContainer>
                <MenuItem onClick={()=>gotoPath("/")} active={currentPath === "/"}>
                    <span className="fa-solid fa-tv"/>
                    <p>TV Aberta</p>
                </MenuItem>
                <MenuItem onClick={()=>gotoPath("lembretes")} active={currentPath === "/lembretes"}>
                    <span className="fa-solid fa-calendar"/>
                    <p>Meus Lembretes</p>
                </MenuItem>
                <MenuItem onClick={()=>gotoPath("favoritos")} active={currentPath === "/favoritos"}>
                    <span className="fa-solid fa-star"/>
                    <p>Favoritos</p>
                </MenuItem>
            </MenuContainer>
        </Container>
    )
}

export default Header;