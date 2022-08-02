import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchBox } from "../../../components/Header/styles";
import ProgramationItem from "../../../components/programationItem";
import { ChanelContext } from "../../../context/chanelContext";
import { Container, PSection } from "../../../styles/global";
import { BoxBorder, PanelInfo, ProgramationSectionArea } from "./styles";
import ScrollContainer from 'react-indiana-drag-scroll'


const ChanelScreen = (props:any) => {
    const {id_revel}:any = useParams()
    const chanelContext = useContext(ChanelContext);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        chanelContext.useFullChanelData(id_revel)
    },[id_revel])

    useEffect(() => {
        setIsFetching(chanelContext.isFetchingFullChanel)
    },[chanelContext.isFetchingFullChanel])

    return (
        <Container>
            {isFetching ? 
                <div style={{width: "100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                :
                <>
                    {chanelContext.selectedChanel &&
                        <>
                            <PSection bold>Informações</PSection>
                            <PanelInfo>
                                <BoxBorder>
                                    <img id="logoChanel" src={"https://digitalapi.sky.com.br/logos/channels/"+chanelContext.selectedChanel.channelNumber+".png"} alt="" />
                                    <div id="chanelInfo">
                                        <p>{chanelContext.selectedChanel.title}</p>
                                        <p>Canal na SKY: {chanelContext.selectedChanel.channelNumber}</p>
                                        <p>Categoria: {chanelContext.selectedChanel.category}</p>
                                        {/* <p>Cidade: {chanelContext.selectedChanel.chanel..split("_").join(" ").charAt(0).toUpperCase() + chanelContext.selectedChanel.chanel.st_cidade.split("_").join(" ").slice(1)}</p> */}
                                    </div>
                                </BoxBorder>
                                {/* <BoxBorder style={{flex: 1.5}}></BoxBorder> */}
                            </PanelInfo>
                            <ProgramationSectionArea>
                                <div className="left">
                                    <div className="top-section">
                                        <PSection bold>Programação</PSection>
                                        <SearchBox>
                                            <span id="icon" className="fa-solid fa-search" />
                                            <input type="text" placeholder="Pesquisar na Programação" />
                                            <span id="clear">X</span>
                                        </SearchBox>
                                    </div>
                                    <div className="content">
                                        <ScrollContainer horizontal={true} className="timeLine" hideScrollbars={true}>
                                            {chanelContext.selectedChanel.schedules.map(item => <ProgramationItem key={item.startDate} {...item} />)}
                                        </ScrollContainer>
                                    </div>
                                </div>
                            </ProgramationSectionArea>
                        </>
                    }
                </>
                

            }
        </Container>

    )
}

export default ChanelScreen;