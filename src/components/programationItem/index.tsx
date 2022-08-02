import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import moment from 'moment'
import { ChanelContext } from "../../context/chanelContext";
moment.locale('pt-br');

type Props = {
    current?: boolean;
    progress?: number;
    activated?: boolean;
}


const Container = styled.div<Props>`
    min-width: 370px;
    min-height: 140px;
    max-height: 140px;
    background: ${({theme}) => theme.bgSecundary};
    margin-right: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: ${({activated, theme}) => activated && "2px solid " + theme.secundary};
    position: relative;;

    #titulo{    
        margin-left: 20px;
        font-weight: bold;
        font-size: 16px;
        color: ${({theme}) => theme.textPrimary};
        z-index: 2;
    }

    #hora{
        margin-left: 20px;
        font-weight: bold;
        font-size: 16px;
        z-index: 2;
        color: ${({theme}) => theme.textPrimary};
    }

    #genero{
        margin-left: 20px;
        z-index: 2;
        color: ${({theme}) => theme.textPrimary};
    }

    border: ${({current, theme}) => current && "3px solid " + theme.primary};

    .progress{
        position: absolute;
        height: 100%;
        width: ${({progress}) => progress + "%"};
        background: ${({theme}) => theme.primary};
        opacity: 0.3;
        z-index: 1;
        transition: width 0.7s ease-in-out;
    }
`;

interface IProgramationItemProps extends ProgramationProps{
    index: number;
    setScrollTo: any;
}

const ProgramationItem = (props:IProgramationItemProps) => {

    const channelContext = useContext(ChanelContext)

    const [isCurrent, setIsCurrent] = useState(false);

    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const dataAtual = moment();
        const dataInicial = moment(props.startDate);
        const dataFinal = moment(props.startDate);
        dataFinal.set("minutes",dataFinal.get("minutes") + props.duration);

        if(dataInicial <= dataAtual && dataAtual <= dataFinal){
            setIsCurrent(true)
            props.setScrollTo(props.index)
        }else{
            setIsCurrent(false)
        }
    },[])

    useEffect(() => {
        timeCheck()
    },[])

    const timeCheck = () => {
        setInterval(() => {
            const dataAtual = moment();
            const dataInicial = moment(props.startDate);
            const dataFinal = moment(props.startDate);
            dataFinal.set("minutes",dataFinal.get("minutes") + props.duration);
    
            if(dataInicial <= dataAtual && dataAtual <= dataFinal){
                setIsCurrent(true)
            }else{
                setIsCurrent(false)
            }
        },1000)
    }

    useEffect(() => {
        if(isCurrent){
            setInterval(() => {
                const dataAtual:any = new Date()
                const dataInicial:any = new Date(props.startDate)
                let dataFinal:any = new Date(props.startDate)
                dataFinal.setMinutes(dataFinal.getMinutes() + props.duration);
                var q = Math.abs(dataAtual - dataInicial);
                var d = Math.abs(dataFinal - dataInicial);
                const atual = ( q / d ) * 100
                setProgress(atual);
            },1000)
        }
    },[isCurrent])

    const parseDate = () => {
        const dataInicial = moment(props.startDate);
        const dataFinal = moment(props.startDate);
        dataFinal.set("minutes",dataFinal.get("minutes") + props.duration);
        let dateStartString = `${dataInicial.get("hours") < 10 ? "0" + dataInicial.get("hours") : dataInicial.get("hours")}:${dataInicial.get("minutes") < 10 ? "0" + dataInicial.get("minutes") : dataInicial.get("minutes")}`
        let dateEndString = `${dataFinal.get("hours") < 10 ? "0" + dataFinal.get("hours") : dataFinal.get("hours")}:${dataFinal.get("minutes") < 10 ? "0" + dataFinal.get("minutes") : dataFinal.get("minutes")}`
        
        return dateStartString + " : " + dateEndString
    }

    return (
        <Container current={isCurrent} progress={progress} onClick={()=> {
            channelContext.useProgramation(props.programId)
        }} activated={channelContext.selectedProgramation?.ProgramID === props.programId}>
            {isCurrent &&
                <div className="progress">

                </div>
            }
            <p id="titulo">{props.title}</p>
            <p id="genero">{props.duration} Minutos</p>
            <p id="hora">{parseDate()}</p>
        </Container>
    )
}

export default ProgramationItem;