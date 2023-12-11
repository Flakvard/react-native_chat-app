import { StyleSheet, Text as RNText, TextStyle, StyleProp} from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme';

interface IText extends TextStyle{
    children?: React.ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    p?: boolean;
    size?: TextStyle["fontSize"];
    weight?: TextStyle["fontWeight"];
    color?: TextStyle["color"];
    align?: TextStyle["textAlign"];
    margin?: TextStyle["margin"];
    marginTop?: TextStyle["marginTop"];
    marginBottom?: TextStyle["marginBottom"];
    marginRight?: TextStyle["marginRight"];
    marginLeft?: TextStyle["marginLeft"];
    marginHorizontal?: TextStyle["marginHorizontal"];
    marginVertical?: TextStyle["marginVertical"];
    padding?: TextStyle["padding"];
    paddingTop?: TextStyle["paddingTop"];
    paddingBottom?: TextStyle["paddingBottom"];
    paddingRight?: TextStyle["paddingRight"];
    paddingLeft?: TextStyle["paddingLeft"];
    paddingHorizontal?: TextStyle["paddingHorizontal"];
    paddingVertical?: TextStyle["paddingVertical"];
    style?: StyleProp<TextStyle>;
}

const Text = ({
    children,
    h1,
    h2,
    h3,
    h4,
    p,
    size,
    weight ,
    color,
    align,
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    marginHorizontal,
    marginVertical,
    padding,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    paddingHorizontal,
    paddingVertical,
    style,
    ...props
} : IText) => {

    const {sizes, weights, lines, letters, colors} = useTheme();

    const textStyle = StyleSheet.flatten([
        {fontSize: sizes.text, lineHeight: lines.text, letterSpacing: letters.text, color: colors.text},
        h1 !== undefined && {fontSize: sizes.h1, lineHeight: lines.h1, letterSpacing: letters.h1, fontWeight: weights.h1},
        h2 !== undefined && {fontSize: sizes.h2, lineHeight: lines.h2, letterSpacing: letters.h2, fontWeight: weights.h2},
        h3 !== undefined && {fontSize: sizes.h3, lineHeight: lines.h3, letterSpacing: letters.h3, fontWeight: weights.h3},
        h4 !== undefined && {fontSize: sizes.h4, lineHeight: lines.h4, letterSpacing: letters.h4, fontWeight: weights.h4},
        p !== undefined && {fontSize: sizes.p, lineHeight: lines.p, letterSpacing: letters.p},
        size !== undefined && {fontSize: size},
        weight !== undefined && {fontWeight: weight},
        color !== undefined && {color: color},
        align !== undefined && {textAlign: align},
        margin !== undefined && { margin },
        marginTop !== undefined && { marginTop },
        marginBottom !== undefined && { marginBottom },
        marginRight !== undefined && { marginRight },
        marginLeft !== undefined && { marginLeft },
        marginHorizontal !== undefined && { marginHorizontal },
        marginVertical !== undefined && { marginVertical },
        padding !== undefined && { padding },
        paddingTop !== undefined && { paddingTop },
        paddingBottom !== undefined && { paddingBottom },
        paddingRight !== undefined && { paddingRight },
        paddingLeft !== undefined && { paddingLeft },
        paddingHorizontal !== undefined && { paddingHorizontal },
        paddingVertical !== undefined && { paddingVertical },
        style
    ]) as TextStyle;
    return (
        <RNText style={textStyle} {...props}>
            {children}
        </RNText>
    );
};

export default  Text;