import { StyleSheet } from "react-native";

export interface ITheme {
    sizes: {
        // common sizes
        base: number,
        text: number,
        padding: number,

        //  number,t sizes
        h1: number,
        h2: number,
        h3: number,
        h4: number,
        p: number,

        //  number,ton sizes
        buttonHeight?: number,
        buttonRadius?: number,
        buttonBorder?: number,

        //  number,ut sizes
        inputHeight?: number,
        inputRadius?: number,
        inputBorder?: number,
    },
    weights: {
        h1: string,
        h2: string,
        h3: string,
        h4: string,
    }


}

export const SIZES = {
    // common sizes
    base: 8,
    text: 16,
    padding: 20,

    // text sizes
    h1: 36,
    h2: 28,
    h3: 24,
    h4: 22,
    p: 18,

    // button sizes
    buttonHeight: 40,
    buttonRadius: 4,
    buttonBorder: 0,

    // input sizes
    inputHeight: 40,
    inputRadius: 4,
    inputBorder: StyleSheet.hairlineWidth,
}

export const WEIGHTS = {

    // text sizes
    h1: "800",
    h2: "700",
    h3: "600",
    h4: "500",
}

export const THEME: ITheme = {
    sizes: SIZES,
    weights: WEIGHTS,
}

export default THEME;
