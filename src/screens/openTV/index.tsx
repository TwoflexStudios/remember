import { useContext, useEffect, useState } from "react";
import ChanelComponent from "../../components/chanelComponent";
import { ChanelContext } from "../../context/chanelContext";
import { Container, PSection } from "../../styles/global";
import { ContainerChanel } from "./styles";

const OpenTVScreen = (props:any) => {
    const chanelContext = useContext(ChanelContext)
    
    return (
        <Container>
           <PSection bold style={{marginBottom:10}}>Lista de Canais - {chanelContext.chanelList.length}</PSection>
           {chanelContext.isLoading &&
            <div style={{flex: 1, height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
           }
           <ContainerChanel>
            {chanelContext.isLoading === false &&
                chanelContext.chanelList.map(item => <ChanelComponent key={item.id} {...item} />)
            }
           </ContainerChanel>

        </Container>
    )
}

export default OpenTVScreen;