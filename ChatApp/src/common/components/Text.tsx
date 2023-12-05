import { StyleSheet, Text as RNText, TextStyle, StyleProp} from 'react-native'
import React from 'react'

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
    const textStyle = StyleSheet.flatten([
        {fontSize: 16},
        h1 !== undefined && {fontSize: 36, fontWeight: "800"},
        h2 !== undefined && {fontSize: 28, fontWeight: "700"},
        h3 !== undefined && {fontSize: 24, fontWeight: "600"},
        h4 !== undefined && {fontSize: 22, fontWeight: "500"},
        p !== undefined && {fontSize: 18},
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