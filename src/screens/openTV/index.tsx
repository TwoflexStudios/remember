import { useContext, useEffect, useState } from "react";
import ChanelComponent from "../../components/chanelComponent";
import { ChanelContext } from "../../context/chanelContext";
import { Container, PSection } from "../../styles/global";
import { ContainerChanel, ProgramationItem } from "./styles";
import ScrollContainer from 'react-indiana-drag-scroll'
import moment from 'moment'
import { useNavigate } from "react-router-dom";
moment.locale('pt-br');

const OpenTVScreen = (props:any) => {
    const chanelContext = useContext(ChanelContext)
    const navigator = useNavigate()
    useEffect(() => {
        chanelContext.setSelectedProgramation()
    },[])
    return (
        <Container>
           {chanelContext.resultSearchProgramation.length > 0 &&
            <>
                <PSection bold style={{marginBottom:10}}>Programas na TV - {chanelContext.resultSearchProgramation.length}</PSection>
                <ScrollContainer horizontal={true} className="timeLine" hideScrollbars={true} style={{width:"100%", height:150, marginBottom:20, display:"flex", flexDirection:"row"}}>
                    {chanelContext.resultSearchProgramation.map(item => 
                            {
                                const dataInicial = moment(item.startDate);
                                const dataFinal = moment(item.startDate);
                                dataFinal.set("minutes",dataFinal.get("minutes") + item.duration);
                                let dateStartString = `${dataInicial.get("hours") < 10 ? "0" + dataInicial.get("hours") : dataInicial.get("hours")}:${dataInicial.get("minutes") < 10 ? "0" + dataInicial.get("minutes") : dataInicial.get("minutes")}`
                                let dateEndString = `${dataFinal.get("hours") < 10 ? "0" + dataFinal.get("hours") : dataFinal.get("hours")}:${dataFinal.get("minutes") < 10 ? "0" + dataFinal.get("minutes") : dataFinal.get("minutes")}`
                                
                                const fullData = dateStartString + " : " + dateEndString
                                return (
                                    <ProgramationItem onClick={()=>{
                                        navigator("/tvaberta/" + item.chanel.channelNumber)
                                    }}>
                                        <img src={"https://digitalapi.sky.com.br/logos/channels/"+item.chanel.channelNumber+".png"} alt={item.chanel.title + " logotipo"} />
                                        <div>
                                            <p className="title">{item.title}</p>
                                            <p className="date">{fullData}</p>
                                            <p className="chanel">{item.chanel.title}</p>
                                            <p></p>
                                        </div>
                                    </ProgramationItem>
                                )
                            }
                        )
                    }
                </ScrollContainer>
            </>
           }
           {chanelContext.chanelList.length > 0 &&
            <PSection bold style={{marginBottom:10}}>Lista de Canais - {chanelContext.chanelList.length}</PSection>
           }

           {!chanelContext.isLoading && chanelContext.chanelList.length === 0 && chanelContext.resultSearchProgramation.length === 0 &&
            <div style={{flex: 1, height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                Nenhum resultado encontrado
            </div>
           }
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