import axios from "axios";
import moment from "moment";
import { createContext, useEffect, useState } from "react";
import api from "../services/api";


declare interface CustomProgramationItem extends ProgramationProps {
  chanel: ChanelProps;
}

declare interface IChanelContext {
    chanelList: ChanelProps[];
    state: number;
    setState: any;
    isLoading: boolean;
    selectedChanel: ChanelProps | undefined;
    search(query: string): void;
    useFullChanelData(id_revel:string | number, onlyReturn?: boolean, dateStart?: Date | null, dateEnd?:Date | null): void;
    isFetchingFullChanel: boolean;
    fetchChanels(): void;
    selectedProgramation: FullProgramationProps | undefined;
    isFetchingProgramation: boolean;
    useProgramation(programation: string, retorno?: boolean): void;
    setSelectedProgramation: any;
    serachInProgramation(query:string): void;
    resultSearchProgramation: CustomProgramationItem[];
    fullChannelList: ChanelProps[];
}

export const ChanelContext = createContext({} as IChanelContext);

const BaseChanelContext = ({children}: any) => {
    const [fullList, setFullList] = useState<ChanelProps[]>([]);
    const [state, setState] = useState<number>(22);
    const [isLoading, setIsLoading] = useState(true)
    const [chanelList, setChanelList] = useState<ChanelProps[]>([]);

    const [selectedChanel, setSeletedChanel] = useState<ChanelProps>()
    const [isFetchingFullChanel, setIsFetchingFullChanel] = useState(true);

    const [selectedProgramation, setSelectedProgramation] = useState<FullProgramationProps>();
    const [isFetchingProgramation, setIsFetchingProgramation] = useState(false);

    const [copyOfSelectedChanel, setCopyOfSelectedChanel] = useState<ChanelProps>()

    const [resultSearchProgramation, setResultSearchInProgration] = useState<CustomProgramationItem[]>([]);

    useEffect(() => {
        if(localStorage.getItem("@preferedLocale")){
          const savedData: any = localStorage.getItem("@preferedLocale");
          const data:any = JSON.parse(savedData || {});
          setState(data.id_cidade)
        }
        fetchChanels();
    },[])

    const useFullChanelData = async (channelID:string | number, onlyReturn = false, dateStart: Date = new Date(), dateEnd:Date = new Date()) => {

      let dataChanels = fullList;

      if(fullList.length === 0){
        const data = new Date();
        const dia = dateStart.getDate() < 10 ? "0" + dateStart.getDate() : dateStart.getDate();
        const mes = dateStart.getMonth() < 10 ? "0" + (dateStart.getMonth() + 1) : (dateStart.getMonth() + 1);
        const ano = dateStart.getFullYear();

        if(dateEnd.getDate() === dateStart.getDate()){
          dateEnd.setDate(dateEnd.getDate() + 1)
        }
        const diaFinal = dateEnd.getDate() < 10 ? "0" + dateEnd.getDate() : dateEnd.getDate();
        const mesFinal = dateEnd.getMonth() < 10 ? "0" + (dateEnd.getMonth() + 1) : (dateEnd.getMonth() + 1);

        

        const result = await api.get("/prd/Guide/guides?dateIni="+ano+mes+dia+"030000&dateEnd="+ano+mesFinal+diaFinal+"030000&channelNum=1&channelName=1&numChannels=1000&retrievalDir=Forward&sortBy=ChlNumber&sortType=Asc&hideHD=false&hideSD=false&channelsOnly=true&timeZone=-00", {
          headers: {
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
          }
        })
        setChanelList(result.data.content)
        setFullList(result.data.content)
        dataChanels = result.data.content
      }
      const chanelData = dataChanels.find(item => String(item.id) === String(channelID))
      setSeletedChanel(chanelData)
      setCopyOfSelectedChanel(chanelData)
      setIsFetchingFullChanel(false)
    }

    const useProgramation = async (programation:string, retorno: boolean = false) => {
      setIsFetchingProgramation(true);
      const data = await api.get("/prd/Guide/programs/"+programation+"?adultPoster=false")
      setSelectedProgramation(data.data)
      setIsFetchingProgramation(false)

      if(retorno){
        return data.data as FullProgramationProps;
      }
    }

    const search = (query: string) => {
        setChanelList(
          fullList.filter(item => 
              item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
          )
          
          if(query.length > 4){
            const resultProgramation:CustomProgramationItem[] = [];

            fullList.map(item => {
              item.schedules.map(sch => {
                if(sch.title.toLowerCase().includes(query.toLocaleLowerCase())){
                  if(resultProgramation.find(item => item.chanel.id == item.chanel.id)){
                    const NewValues = resultProgramation.filter(item => item.chanel.id !== item.chanel.id);
                    NewValues.push({...sch, chanel: item})
                  }else{
                    if(moment(sch.startDate).unix() > moment().unix()){
                      resultProgramation.push({...sch, chanel: item})
                    }
                  }
                }
              })
            })
            
            setResultSearchInProgration(resultProgramation)
          }else{
            setResultSearchInProgration([])
          }
    }

    const serachInProgramation = (query: string) => {
      if(selectedChanel && copyOfSelectedChanel){
        const result:any = copyOfSelectedChanel.schedules.filter(item => {
          return item.title.toLowerCase().includes(query.toLowerCase())
        });
        setSeletedChanel({...copyOfSelectedChanel, schedules: result })
      }
    }

    const fetchChanels = async () => {
      if(fullList.length > 0){
        return;
      } 
      if(process.env.REACT_APP_EXEC_MODE === "dev"){
          setIsLoading(false)
      }else{
          setIsLoading(true)
          const data = new Date();
          const dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
          const nextDay = (data.getDate() + 1) < 10 ? "0" + (data.getDate() + 1) : (data.getDate() + 1);
          const mes = data.getMonth() < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1);
          const ano = data.getFullYear();

          const result = await api.get("/prd/Guide/guides?dateIni="+ano+mes+dia+"030000&dateEnd="+ano+mes+nextDay+"030000&channelNum=1&channelName=1&numChannels=1000&retrievalDir=Forward&sortBy=ChlNumber&sortType=Asc&hideHD=false&hideSD=false&channelsOnly=true&timeZone=-00", {
              headers: {
                  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
              }
          })
          setChanelList(result.data.content)
          setFullList(result.data.content)
          setIsLoading(false)
      }
    }

    return (
        <ChanelContext.Provider value={{
            chanelList,
            fetchChanels,
            state,
            setSelectedProgramation,
            setState,
            isLoading,
            search,
            resultSearchProgramation,
            useFullChanelData,
            selectedChanel,
            isFetchingFullChanel,
            selectedProgramation,
            isFetchingProgramation,
            useProgramation,
            serachInProgramation,
            fullChannelList: fullList
        }}>
            {children}
        </ChanelContext.Provider>
    )
}

export default BaseChanelContext;