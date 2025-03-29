import "styled-components";

declare module "styled-componets"{
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        }
    }
}