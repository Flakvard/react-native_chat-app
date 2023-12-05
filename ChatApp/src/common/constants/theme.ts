import { StyleSheet } from "react-native";
import { IPerformanceLogger } from "react-native/Libraries/Utilities/IPerformanceLogger";

export interface ISpacing {
    xs: number;
    s: number;
    sm: number;
    m: number;
    md: number;
    l: number;
    xl: number;
    xxl: number;
}

export interface ISizes {
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
}
export interface IWeights{
        h1: string,
        h2: string,
        h3: string,
        h4: string,
}
export interface ILineHeights {
    h1:  number;
    h2:  number;
    h3:  number;
    h4:  number;
    p:   number;
    text: number;
    small: number;
}

export interface ILineLetter {
    h1:  number;
    h2:  number;
    h3:  number;
    h4:  number;
    p:   number;
    text: number;
    small: number;
}

export interface ITheme {
    sizes: ISizes & ISpacing,
    lines: ILineHeights,
    letters: ILineLetter,
    weights: IWeights,

}

const TEXT_SIZE = 16;

export const SIZES = {
    // common sizes
    base: 8,
    text: TEXT_SIZE,
    padding: 20,

    // text sizes
    h1: TEXT_SIZE + (2 * 8),
    h2: TEXT_SIZE + (2 * 6),
    h3: TEXT_SIZE + (2 * 4),
    h4: TEXT_SIZE + (2 * 2),
    p:  TEXT_SIZE + 2,
    small: TEXT_SIZE - 2,

    // button sizes
    buttonHeight: 40,
    buttonRadius: 4,
    buttonBorder: 0,

    // input sizes
    inputHeight: 40,
    inputRadius: 4,
    inputBorder: StyleSheet.hairlineWidth,
}

export const SPACING = {
    xs: SIZES.base / 2,
    s: SIZES.base,
    sm: SIZES.base * 2, // 16
    m: SIZES.base * 3, // 24
    md: SIZES.base * 4, // 32
    l: SIZES.base * 5, // 40
    xl: SIZES.base * 6, // 48
    xxl: SIZES.base * 7, // 56
}

export const WEIGHTS = {
    // text weights
    h1: "800",
    h2: "700",
    h3: "600",
    h4: "500",
}

export const LINE_HEIGHTS = {
    // text heights
    h1: Math.round(SIZES.h1 * 1.1),
    h2: Math.round(SIZES.h2 * 1.2),
    h3: Math.round(SIZES.h3 * 1.3),
    h4: Math.round(SIZES.h4 * 1.3),
    p:  Math.round(SIZES.p * 1.3),
    text:  Math.round(SIZES.text * 1.3),
    small:  Math.round(SIZES.small * 1.6),
}

export const LETTER_SPACING = {
    // text letter spacing
    h1: -Math.round(SIZES.h1 * 0.03),
    h2: -Math.round(SIZES.h2 * 0.03),
    h3: -Math.round(SIZES.h3 * 0.03),
    h4: -Math.round(SIZES.h4 * 0.03),
    p:  0,
    text:  0,
    small:  0,
}

export const THEME: ITheme = {
    sizes: {
        ...SIZES,
        ...SPACING
    },
    lines: LINE_HEIGHTS,
    letters: LETTER_SPACING,
    weights: WEIGHTS,
}

export default THEME;
