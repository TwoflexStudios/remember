import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    const navigator = useNavigate()
    const [search, setSearch] = useState("");
    const [scrollTo, setScrollTo] = useState();
    const timelineRef = useRef(null)

    useEffect(() => {
        setIsFetching(true)
        chanelContext.useFullChanelData(id_revel)
    },[])

    useEffect(() => {
      if(scrollTo){
         const timeline = document.querySelectorAll(".timeline");
         console.log(timeline)
      }
    },[scrollTo])

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
                           <div id="goBack" onClick={()=>{navigator(-1)}}>
                              <span className="fa-solid fa-arrow-left"></span>
                              Voltar
                           </div>
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
                                          <input type="text" placeholder="Pesquisar na Programação" onChange={(e) => {
                                             setSearch(e.target.value)
                                             chanelContext.serachInProgramation(e.target.value)
                                          }} value={search} />
                                          {search.length > 0 &&
                                             <span id="clear" onClick={()=>{
                                                   setSearch("")
                                                   chanelContext.serachInProgramation("")
                                                }
                                             }>X</span>
                                          }
                                       </SearchBox>
                                 </div>
                                 <div className="content">
                                    <ScrollContainer horizontal={true} className="timeLine" hideScrollbars={true}>
                                       {chanelContext.selectedChanel.schedules.map((item,index) => <ProgramationItem setScrollTo={setScrollTo} index={index} key={item.startDate} {...item} />)}
                                    </ScrollContainer>
                                 </div>
                              </div>
                            </ProgramationSectionArea>
                            {chanelContext.isFetchingProgramation || chanelContext.selectedProgramation &&
                              <ProgramationSectionArea>
                                <div className="left">
                                    <div className="top-section">
                                        <PSection bold>Detalhes do Programa</PSection>
                                    </div>
                                    <div className="content" style={{height: 160}}>
                                       <BoxBorder>
                                          {!chanelContext.selectedProgramation && chanelContext.isFetchingProgramation ?
                                             <div style={{width: "100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                   <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                             </div>
                                             :
                                             <>
                                                <img id="logoChanel" src={"https://digitalapi.sky.com.br/logos/channels/"+chanelContext.selectedChanel.channelNumber+".png"} alt="" />
                                                <div id="chanelInfo">
                                                   <p>{chanelContext.selectedProgramation.ProgramTitle}</p>
                                                   <p>{chanelContext.selectedProgramation.Description}</p>
                                                   <p>Categoria: {
                                                      chanelContext.selectedProgramation.CategoriesList.map((item, index) => {
                                                         if(!chanelContext.selectedProgramation){
                                                            return;
                                                         }
                                                         return index < chanelContext.selectedProgramation.CategoriesList.length - 1 ? item.Label + ", " : item.Label
                                                      })
                                                   }</p>
                                                   {/* <p>Cidade: {chanelContext.selectedChanel.chanel..split("_").join(" ").charAt(0).toUpperCase() + chanelContext.selectedChanel.chanel.st_cidade.split("_").join(" ").slice(1)}</p> */}
                                                </div>
                                             </>
                                          }
                                       </BoxBorder>
                                    </div>
                                </div>
                            </ProgramationSectionArea>
                            }
                        </>
                    }
                </>
                

            }
        </Container>

    )
}

export default ChanelScreen;