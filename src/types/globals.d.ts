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

declare interface FullProgramationProps {
    airTime:string,
    Ac3:boolean,
    Adt:boolean,
    Advisory:string[],
    AudienceScore:number,
    BuyOffset:number,
    CategoriesList:{
        Label:string,
        Relevance:number,
        InGuide:boolean
    }[],
    Cc:boolean,
    Channel:null,
    Color:string,
    CreditsList:string[],
    DefaultPoster:boolean,
    Description:string,
    Dimension:string,
    Dss:boolean,
    Dvs:boolean,
    EpisodeNumber:number,
    EpisodeSeason:number,
    EpisodeTitle:string,
    GridViewPrimaryImageUrl:string,
    Hd:boolean,
    LegacySubCategory:null,
    Letterbox:boolean,
    ListViewPrimaryImageUrl:string,
    Ltd:string,
    MainCategory:string,
    MpaaRating:string,
    Ns:string,
    OriginalAirDate:string,
    Pf:string,
    PopcornImg:string,
    PrimaryImageUrl:string,
    Ppv:boolean,
    ProgramID:string,
    ProgramLinkId:string,
    ProgramTitle:string,
    Rating:string,
    ReleaseYear:string,
    Repeat:boolean,
    Sap:boolean,
    SeriesID:number,
    Source:string,
    Subtitled:boolean,
    StarRating:string,
    TinyUrl:string,
    TmsConnectorID:string,
    TomatoImg:string,
    TomatoScore:number,
    TmsID:string,
    VideoFormat:string,
    Artists:string,
    MobileLargeImage:string,
    MobileSmallImage:string
}


declare interface IFullChanel{
    chanel: ChanelProps,
    programation: ProgramationProps[]
}
