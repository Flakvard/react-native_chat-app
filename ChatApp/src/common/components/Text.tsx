import { StyleSheet, View, Text as RNText} from 'react-native'
import React from 'react'

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
    style,
    ...props
} : any) => {
    const textStyle = StyleSheet.flatten([
        {fontSize: 16},
        h1 !== undefined && {fontSize: 36, fontWeight: "800"},
        h2 !== undefined && {fontSize: 28, fontWeight: "700"},
        h3 !== undefined && {fontSize: 24, fontWeight: "600"},
        h4 !== undefined && {fontSize: 22, fontWeight: "500"},
        p !== undefined && {fontSize: 18},
        size !== undefined && {fontSize: size},
        weight !== undefined && {fontWeight: weight},
        color !== undefined && {backgroundColor: color},
        style
    ]);
    return (
        <RNText style={textStyle} {...props}>
            {children}
        </RNText>
    );
};

export default  Text;