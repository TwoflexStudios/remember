type IState = {
    uf: string;
    id_cidade: number | string;
    nome: string;
}



declare interface ProgramationProps{
    duration: number,
    endDate: string,
    programId: string,
    startDate: string,
    isHd: boolean,
    isAdult: boolean,
    liveProgramPid: string,
    liveChannelPid: string,
    contentSubType: string,
    externalId: string,
    images: string,
    originalTitle: string,
    pid: string,
    title: string,
    model: string
}

declare interface ChanelProps{
    callLetter: string,
    category: string,
    channelNumber: number,
    contentSubTitle: string,
    description: string,
    genres: string,
    hd: boolean,
    shortDescription: string,
    id: number,
    imageUrl: string,
    number: number,
    schedules: ProgramationProps[],
    contentSubType: LCH,
    externalId: string,
    images: string,
    originalTitle: string,
    pid: string,
    title: string,
    model: string
}


declare interface IFullChanel{
    chanel: ChanelProps,
    programation: ProgramationProps[]
}
