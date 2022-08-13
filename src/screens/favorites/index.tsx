import moment from "moment";
import { useContext } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useNavigate } from "react-router-dom";
import ChanelComponent from "../../components/chanelComponent";
import { ChanelContext } from "../../context/chanelContext";
import { useFavorites } from "../../context/favoriteContext";
import { Container, PSection } from "../../styles/global";
import { ContainerChanel, ProgramationItem } from "../openTV/styles";

const FavoriteScreen = () => {
    const chanelContext = useContext(ChanelContext)
    const favoritesContext = useFavorites();
    const navigator = useNavigate();

    return (
        <Container>
            {chanelContext.fullChannelList.length > 0 ?
                <>
                    {favoritesContext.favorites.filter(item => item.type == "program").length > 0 &&
                        <>
                            <PSection bold>Programas Favoritos - {favoritesContext.favorites.filter(item => item.type === "program").length}</PSection>
                            <ScrollContainer horizontal={true} className="timeLine" hideScrollbars={true} style={{width:"100%", height:160, marginBottom:20, display:"flex", flexDirection:"row"}}>
                                    {favoritesContext.favorites.filter(item => item.type === "program").map(item => 
                                        {
                                            const chanelData = chanelContext.fullChannelList.find(finder => finder.id === item.chanelID);
                                            const dataInicial = moment(item.startDate);
                                            const dataFinal = moment(item.startDate);
                                            dataFinal.set("minutes",dataFinal.get("minutes") + (Number(item.duration) || 0));
                                            let dateStartString = `${dataInicial.get("hours") < 10 ? "0" + dataInicial.get("hours") : dataInicial.get("hours")}:${dataInicial.get("minutes") < 10 ? "0" + dataInicial.get("minutes") : dataInicial.get("minutes")}`
                                            let dateEndString = `${dataFinal.get("hours") < 10 ? "0" + dataFinal.get("hours") : dataFinal.get("hours")}:${dataFinal.get("minutes") < 10 ? "0" + dataFinal.get("minutes") : dataFinal.get("minutes")}`
                                            
                                            const fullData = dateStartString + " : " + dateEndString
                                            return (
                                                <ProgramationItem onClick={()=>{
                                                    navigator("/tvaberta/" + item.chanelID)
                                                }} style={{maxHeight: 150, marginTop:5}} favorited={favoritesContext.hasFavorited(item.data?.ProgramID)}>
                                                        <span className="fa-solid fa-heart favoriteChanel" onClick={async (e)=>{
                                                        e.stopPropagation();
                                                        favoritesContext.toggleFavorite(item.data?.ProgramID || "", "program", item.chanelID, item.data, item.startDate, item.duration)
                                                    }}></span>
                                                    <img src={"https://digitalapi.sky.com.br/logos/channels/"+chanelData?.channelNumber+".png"} alt={chanelData?.title + " logotipo"} />
                                                    <div>
                                                        <p className="title">{item.data?.ProgramTitle}</p>
                                                        <p className="date">{fullData}</p>
                                                        <p className="chanel">{chanelData?.title}</p>
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
                    {favoritesContext.favorites.filter(item => item.type === "chanel").length > 0 &&
                        <>
                            <PSection bold>Canais Favoritos - {favoritesContext.favorites.filter(item => item.type === "chanel").length}</PSection>
                            <ContainerChanel>
                                {favoritesContext.favorites.filter(item => item.type === "chanel").map(item => {
                                        const data = chanelContext.fullChannelList.find(finder => finder.id === item.id);
                                        if(data){
                                            return (
                                                <ChanelComponent key={String(item.id)} {...data} />
                                            ) 
                                        }
                                    })
                                }
                            </ContainerChanel>
                        </>
                    }

                    {favoritesContext.favorites.filter(item => item.type === "chanel").length === 0 && favoritesContext.favorites.filter(item => item.type === "program").length === 0 &&
                        <div style={{flex: 1, height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <PSection>Nenhum favorito adicionado</PSection>
                        </div>
                    }
                    </>
                :
                <div style={{flex: 1, height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            }
        </Container>

    )
}

export default FavoriteScreen;