type IState = {
    uf: string;
    id_cidade: number | string;
    nome: string;
}

declare interface ChanelProps{
    id_canal: string;
    url_imagem: string;
    cn_canal?: string;
    nome: string;
    st_canal?: string;
    currentProgram?: string;
}

