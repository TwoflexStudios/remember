import styled from "styled-components";

export const PanelInfo = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
`;

export const BoxBorder = styled.div`
    display: flex;
    flex: 1;
    background: ${({theme}) => theme.bgSecundary};
    border-radius: 10px;
    margin: 10px;
    height: 100%;
    margin-left: 0px;
    border-left: 3px solid ${({theme}) => theme.secundary};
    flex-direction: row;
    align-items: center;
    border-bottom: 3px solid ${({theme}) => theme.secundary};

    #logoChanel {
        width: 70px;
        height: 70px;
        margin-left: 20px;
    }

    #chanelInfo{
        margin-left: 20px;

        p:nth-child(1) {
            font-size: 18px;
            font-weight: bold;
            color: ${({theme}) => theme.textPrimary};
        }
        p:nth-child(2), p:nth-child(3), p:nth-child(4) {
            font-size: 14px;
            font-weight: bold;
            color: ${({theme}) => theme.textSecundary};
        }
    }
`;

export const ProgramationSectionArea = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    .left{
        display: flex;
        flex: 1;
        height: 100%;
    }

    .left {
        width: 100%;
        flex-direction: column;
        .top-section{
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .content{
            width: 100%;
            display: flex;
            flex-direction: column;

            .timeLine{
                width: 100%;
                height: 170px;
                align-items: center;
                cursor: grab;
                overflow-x: auto;
                flex-direction: row;
                display: flex;
                &:active{
                    cursor: grabbing;
                }
                &::-webkit-scrollbar {
                    width: 10px;
                    height: 10px;
                }

                &::-webkit-scrollbar-track {
                    background: ${({theme}) => theme.bg};
                }

                &::-webkit-scrollbar-thumb {
                    background-color: ${({theme}) => theme.secundary};
                    border-radius: 10px;
                    border: 3px solid ${({theme}) => theme.bg};
                }
            }

            #loading{
                color: ${({theme}) => theme.textSecundary};
            }
        }
    }
    
`;