import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChanelContext } from "../../../context/chanelContext";

const Container = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    div#drop {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    cursor: pointer;

    p {
        font-size: 16px;
        font-weight: bold;
        color: white;
        margin-right: 10px;
    }

    span {
        font-size: 18px;
        font-weight: bold;
        color: white;
        margin-right: 10px; 
    }

    .fa-sort-down{
        margin-right: 20px; 
        margin-top: -10px;
    }
    
    .fa-sort-up{
        margin-right: 20px; 
    }

`;

const DropArea = styled.div`
    width: 300px;
    height: 500px;
    position: absolute;
    top: 70px;
    background: ${({theme}) => theme.headerSecundary};
    cursor: default;
    right: 0px;
    z-index: 9999;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.bg};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.secundary};
        border-radius: 10px;
        border: 3px solid ${({theme}) => theme.bg};
    }
`;

const StateItem = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    font-family: "Poppins";
    justify-content: center;
    color: ${({theme}) => theme.textPrimary};;
    
    &:hover {
        background: ${({theme}) => theme.headerPrimary};
        color: white;
    }
`;

const StateSelector = (props:any) => {

    const chanelsContext = useContext(ChanelContext);

    const [states, setStates] = useState<IState[]>([
        {"id_cidade":11,"uf":"RO","nome":"Rondônia"},
        {"id_cidade":12,"uf":"AC","nome":"Acre"},
        {"id_cidade":13,"uf":"AM","nome":"Amazonas"},
        {"id_cidade":14,"uf":"RR","nome":"Roraima"},
        {"id_cidade":15,"uf":"PA","nome":"Pará"},
        {"id_cidade":16,"uf":"AP","nome":"Amapá"},
        {"id_cidade":17,"uf":"TO","nome":"Tocantins"},
        {"id_cidade":21,"uf":"MA","nome":"Maranhão"},
        {"id_cidade":22,"uf":"PI","nome":"Piauí"},
        {"id_cidade":23,"uf":"CE","nome":"Ceará"},
        {"id_cidade":24,"uf":"RN","nome":"Rio Grande do Norte"},
        {"id_cidade":25,"uf":"PB","nome":"Paraíba"},
        {"id_cidade":26,"uf":"PE","nome":"Pernambuco"},
        {"id_cidade":27,"uf":"AL","nome":"Alagoas"},
        {"id_cidade":28,"uf":"SE","nome":"Sergipe"},
        {"id_cidade":29,"uf":"BA","nome":"Bahia"},
        {"id_cidade":31,"uf":"MG","nome":"Minas Gerais"},
        {"id_cidade":32,"uf":"ES","nome":"Espírito Santo"},
        {"id_cidade":33,"uf":"RJ","nome":"Rio de Janeiro"},
        {"id_cidade":35,"uf":"SP","nome":"São Paulo"},
        {"id_cidade":41,"uf":"PR","nome":"Paraná"},
        {"id_cidade":42,"uf":"SC","nome":"Santa Catarina"},
        {"id_cidade":43,"uf":"RS","nome":"Rio Grande do Sul"},
        {"id_cidade":50,"uf":"MS","nome":"Mato Grosso do Sul"},
        {"id_cidade":51,"uf":"MT","nome":"Mato Grosso"},
        {"id_cidade":52,"uf":"GO","nome":"Goiás"},
        {"id_cidade":53,"uf":"DF","nome":"Distrito Federal"}
    ].sort((a,b) => {
        return a.nome.localeCompare(b.nome)
    }));

    const [cidades, setCidades] = useState<IState[]>([]);

    const [droped, setDroped] = useState(false);
    const [fetching, setFetching] = useState(false)
    const [currentState, setCurrentState] = useState<IState>({
        "uf": "RJ",
        "id_cidade": "22",
        "nome": "Rio de Janeiro",
    })

    useEffect(() => {
        getPreferedLocale();
    },[])

    const getPreferedLocale = () => {
        if(localStorage.getItem("@preferedLocale")){
            const data:any = localStorage.getItem("@preferedLocale");
            setCurrentState(JSON.parse(data))
        }else{
            localStorage.setItem("@preferedLocale", JSON.stringify({
                "uf": "RJ",
                "id_cidade": "22",
                "nome": "Rio de Janeiro",
            }))
        }
    }

    const changeState = async (state:IState) => {
        // localStorage.setItem("@preferedLocale", JSON.stringify(state))
        setFetching(true)
        const cidades = await axios.get("https://programacao.claro.com.br/gatekeeper/cidade/select?q=uf:"+state.uf.toLowerCase()+"&wt=json&rows=10")
        setCidades(cidades.data.response.docs)
        setFetching(false)
        setDroped(true)
    }

    const changeCity = async (state:IState) => {
        localStorage.setItem("@preferedLocale", JSON.stringify(state))
        setCurrentState(state);
        setDroped(false)
        setCidades([])
        chanelsContext.setState(state.id_cidade)
        chanelsContext.fetchChanels();
    }

    return (
        <Container>
            <div id="drop" onClick={()=> setDroped(!droped)}>
                <span className="fa-solid fa-location-dot" />
                <p>{currentState.nome} - {currentState.uf}</p>
                {droped ?
                    <span className="fa-solid fa-sort-up" />
                    :
                    <span className="fa-solid fa-sort-down" />
                }
            </div>
            {droped &&
                <DropArea>
                    {fetching ?
                        <div style={{display:"flex", flex:1 ,justifyContent:"center", alignItems:"center", height:"100%"}}>Carregando</div>
                        : cidades.length === 0 ?
                        states.map( item => <StateItem key={item.id_cidade} onClick={()=>{changeState(item)}}>{item.nome}</StateItem>)
                        :
                        cidades.map( item => <StateItem key={item.id_cidade} onClick={()=>{changeCity(item)}}>{item.nome}</StateItem>)
                    }
                </DropArea>
            }
        </Container>
    )
}

export default StateSelector;