import { createContext, useContext, useEffect, useState } from "react";

declare interface IFavoriteContext {
    addFavorite(id: number | string, type: "chanel" | "program", chanelID: string | number): void;
    removeFavorite(id: number): void;
    favorites: IFavorite[];
    toggleFavorite(id: number | string, type: "chanel" | "program", chanelID: string | number, data?: any, startDate?: string, duration?: number | string): void;
    hasFavorited(id: number | string | any): boolean;
}

export const favoriteContext = createContext({} as IFavoriteContext);

type IFavorite = {
    id: string | number,
    type: "chanel" | "program",
    chanelID: string | number;
    data?: FullProgramationProps;
    startDate?: string;
    duration?: string | number;
}

const FavoriteContext = ({children}:any) => {
    const [favorites, setFavorites] = useState<IFavorite[]>(JSON.parse(localStorage.getItem("@favorites") || '[]'));

    useEffect(() => {
        localStorage.setItem("@favorites", JSON.stringify(favorites))
    },[favorites])

    const addFavorite = (id: number | string, type: "chanel" | "program", chanelID: string | number) => {
        setFavorites(favoritos => favoritos.concat({id, type, chanelID}));
    }

    const removeFavorite = (id: number) => {
        const result = favorites.filter(item => item.id !== id);
        setFavorites(result);
    }

    const toggleFavorite = (id: number | string, type: "chanel" | "program", chanelID: string | number, data: any = null, startDate:string = "", duration: number | string = 0) => {
        const hasFavorited = favorites.find(item => item.id === id);

        if(hasFavorited){
            const result = favorites.filter(item => item.id !== id);
            setFavorites(result);
        }else{
            setFavorites(favoritos => favoritos.concat({id, type, chanelID, data, startDate, duration}));
        }
    }

    const hasFavorited = (id: number | string | any):boolean => {
        const result = favorites.find(item => item.id === id);

        if(result){
            return true
        }

        return false;
    }

    return (
        <favoriteContext.Provider value={{
            addFavorite,
            removeFavorite,
            favorites,
            toggleFavorite,
            hasFavorited
        }}>
            {children}
        </favoriteContext.Provider>
    )
}

export const useFavorites = ():IFavoriteContext => {
    const contexto = useContext(favoriteContext);
    return contexto;
}

export default FavoriteContext;