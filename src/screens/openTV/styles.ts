import styled from "styled-components";

export const ContainerChanel = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 195px);
    justify-content: space-between;
    grid-gap: 10px;
    #loading {
        color: ${({theme}) => theme.textSecundary}
    }
`;