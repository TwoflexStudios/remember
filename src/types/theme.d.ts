import 'styled-components';

interface ITheme {
    bgPrimary: string;
    bgSecundary: string;
    primary: string;
    secundary: string;
    textPrimary: string;
    textSecundary: string;
}

declare module 'styled-components'{
    export interface DefaultTheme extends ITheme{}
}