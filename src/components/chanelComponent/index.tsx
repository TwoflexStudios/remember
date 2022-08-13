import { useNavigate } from "react-router-dom";
import { ButtonChanel } from "./styles";
import moment from "moment";
import { useEffect, useState } from "react";
import { useFavorites } from "../../context/favoriteContext";
moment.locale('pt-br');

const ChanelComponent = (props:ChanelProps) => {
    const navigator = useNavigate();
    const [currentProgram, setCurrentProgram] = useState("");
    const favorites = useFavorites();
    useEffect(() => {
        getCurrentProgram()
        setInterval(() => {
            getCurrentProgram()
        },1000)
    },[])
    const getCurrentProgram = () => {
        const dataAtual = moment();
        let title = props.schedules[0].title;
        props.schedules.map(item => {
            const dataInicial = moment(item.startDate);
            const dataFinal = moment(item.startDate);
            dataFinal.set("minutes",dataFinal.get("minutes") + item.duration);

            if(dataInicial <= dataAtual && dataAtual <= dataFinal){
                title = item.title
            }

            setCurrentProgram(title)
        })

        return title
    }

    return (
        <ButtonChanel onClick={(e) => {
            navigator("/tvaberta/" + props.id)
        }} favorited={favorites.hasFavorited(props.id)}>
            <span className="fa-solid fa-heart favoriteChanel" onClick={(e)=>{
                e.stopPropagation();
                favorites.toggleFavorite(props.id, "chanel", props.id)
            }}></span>
            <img src={"https://digitalapi.sky.com.br/logos/channels/"+props.channelNumber+".png"} alt={props.title + " logomarca"}/>
            <p>{props.title}</p>
            <div>
                <div id="live"></div>
                <p id="chanel">{currentProgram}</p>
            </div>
        </ButtonChanel>
    )
}

export default ChanelComponent;