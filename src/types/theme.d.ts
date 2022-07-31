import 'styled-components';

interface ITheme {
    bg: string;
    hoverChanel: string;
    bgSecundary: string;
    headerPrimary: string;
    headerSecundary: string;
    primary: string;
    secundary: string;
    textPrimary: string;
    textSecundary: string;
    destacado: string;
}

declare module 'styled-components'{
    export interface DefaultTheme extends ITheme{}
}