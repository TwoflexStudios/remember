import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChanelContext } from "../../context/chanelContext";
import StateSelector from "./components/stateSelector";
import { ContainerHeader, Container, MenuContainer, MenuItem, SearchBox } from "./styles";

type Props = {
    setTheme: any;
    theme: "dark" | "blue";
}

const Header = ({setTheme, theme, ...props} : Props) => {
    const chanelContext = useContext(ChanelContext)
    const [currentPath, setCurrentPath] = useState("/");
    const [searchValue, setSearchValue] = useState("")
    const navigator = useNavigate()

    const redirectToHomeScreen = () => {
        navigator("")
    }

    useEffect(() => {
        chanelContext.search(searchValue)
    },[searchValue])

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
                <div id="menu">
                    <MenuItem onClick={()=>gotoPath("/")} active={currentPath === "/"}>
                        <span className="fa-solid fa-house"/>
                        <p>Home</p>
                    </MenuItem>
                    <MenuItem onClick={()=>gotoPath("/aberta")} active={currentPath === "/aberta"}>
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
                </div>
                <SearchBox>
                    <span id="icon" className="fa-solid fa-search" />
                    <input type="text" placeholder="Globo, SBT" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
                    {searchValue.length > 0 &&
                        <span id="clear" onClick={()=>setSearchValue("")}>X</span>
                    }
                </SearchBox>
            </MenuContainer>
        </Container>
    )
}

export default Header;