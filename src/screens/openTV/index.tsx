import { useContext } from "react";
import ChanelComponent from "../../components/chanelComponent";
import { ChanelContext } from "../../context/chanelContext";
import { Container, PSection } from "../../styles/global";
import { ContainerChanel } from "./styles";

const OpenTVScreen = (props:any) => {
    const chanelContext = useContext(ChanelContext)
    return (
        <Container>
           <PSection bold style={{marginBottom:10}}>Lista de Canais - {chanelContext.chanelList.length}</PSection>
           <ContainerChanel>
            {chanelContext.isLoading ?
                <div id="loading">Carregando...</div>
                :
                chanelContext.chanelList.map(item => <ChanelComponent {...item} />)
            }
           </ContainerChanel>

        </Container>
    )
}

export default OpenTVScreen;