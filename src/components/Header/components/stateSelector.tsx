import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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

`;

const DropArea = styled.div`
    width: 300px;
    height: 500px;
    position: absolute;
    top: 70px;
    background: ${({theme}) => theme.bgSecundary};
    cursor: default;
    right: 0px;
    z-index: 9999;
    overflow-y: auto;
    
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
        background: ${({theme}) => theme.bgPrimary};
        color: white;
    }
`;

const StateSelector = (props:any) => {
    const [states, setStates] = useState<IState[]>([
        {"id":11,"sigla":"RO","nome":"Rondônia","regiao":{"id":1,"sigla":"N","nome":"Norte"}},
        {"id":12,"sigla":"AC","nome":"Acre","regiao":{"id":1,"sigla":"N","nome":"Norte"}},
        {"id":13,"sigla":"AM","nome":"Amazonas","regiao":{"id":1,"sigla":"N","nome":"Norte"}},
        {"id":14,"sigla":"RR","nome":"Roraima","regiao":{"id":1,"sigla":"N","nome":"Norte"}},
        {"id":15,"sigla":"PA","nome":"Pará","regiao":{"id":1,"sigla":"N","nome":"Norte"}},
        {"id":16,"sigla":"AP","nome":"Amapá","regiao":{"id":1,"sigla":"N","nome":"Norte"}},
        {"id":17,"sigla":"TO","nome":"Tocantins","regiao":{"id":1,"sigla":"N","nome":"Norte"}},
        {"id":21,"sigla":"MA","nome":"Maranhão","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":22,"sigla":"PI","nome":"Piauí","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":23,"sigla":"CE","nome":"Ceará","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":24,"sigla":"RN","nome":"Rio Grande do Norte","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":25,"sigla":"PB","nome":"Paraíba","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":26,"sigla":"PE","nome":"Pernambuco","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":27,"sigla":"AL","nome":"Alagoas","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":28,"sigla":"SE","nome":"Sergipe","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":29,"sigla":"BA","nome":"Bahia","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},
        {"id":31,"sigla":"MG","nome":"Minas Gerais","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},
        {"id":32,"sigla":"ES","nome":"Espírito Santo","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},
        {"id":33,"sigla":"RJ","nome":"Rio de Janeiro","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},
        {"id":35,"sigla":"SP","nome":"São Paulo","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},
        {"id":41,"sigla":"PR","nome":"Paraná","regiao":{"id":4,"sigla":"S","nome":"Sul"}},
        {"id":42,"sigla":"SC","nome":"Santa Catarina","regiao":{"id":4,"sigla":"S","nome":"Sul"}},
        {"id":43,"sigla":"RS","nome":"Rio Grande do Sul","regiao":{"id":4,"sigla":"S","nome":"Sul"}},
        {"id":50,"sigla":"MS","nome":"Mato Grosso do Sul","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}},
        {"id":51,"sigla":"MT","nome":"Mato Grosso","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}},
        {"id":52,"sigla":"GO","nome":"Goiás","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}},
        {"id":53,"sigla":"DF","nome":"Distrito Federal","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}}
    ].sort((a,b) => {
        return a.nome.localeCompare(b.nome)
    }));

    const [droped, setDroped] = useState(false);
    const [currentState, setCurrentState] = useState<IState>({"id":33,"sigla":"RJ","nome":"Rio de Janeiro","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}})

    useEffect(() => {
        getPreferedLocale();
    },[])

    const getPreferedLocale = () => {
        if(localStorage.getItem("@preferedLocale")){
            const id = Number(localStorage.getItem("@preferedLocale"));
            setCurrentState(states.find(item => item.id === id) || currentState)
        }else{
            localStorage.setItem("@preferedLocale", String(currentState.id))
        }
    }

    const changeState = (state:IState) => {
        localStorage.setItem("@preferedLocale", String(state.id))
        setCurrentState(state)
    }

    return (
        <Container onClick={()=>{setDroped(!droped)}}>
            <span className="fa-solid fa-location-dot" />
            <p>{currentState.nome}</p>
            <span className="fa-solid fa-sort-down" />
            {droped &&
                <DropArea>
                    {states.map( item => <StateItem onClick={()=>{changeState(item)}}>{item.nome}</StateItem>)}
                </DropArea>
            }
        </Container>
    )
}

export default StateSelector;