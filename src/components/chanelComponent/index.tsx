import { ButtonChanel } from "./styles";

const ChanelComponent = (props:ChanelProps) => {
    return (
        <ButtonChanel>
            <img src={props.url_imagem} alt={props.nome + " logomarca"}/>
            <p>{props.nome}</p>
            <div>
                <span className="mdn-Icon-claro mdn-Icon--md"></span>
                <p id="chanel">Canal {props.cn_canal}</p>
            </div>
        </ButtonChanel>
    )
}

export default ChanelComponent;