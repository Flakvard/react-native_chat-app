import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Button = ({
    children,
    color,
    radius,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingButtom,
    style,
    ...props
} : any) => {
    const textStyle = StyleSheet.flatten([
        color !== undefined && {backgroundColor: color},
        radius !== undefined && {borderRadius: radius},
        padding !== undefined && {padding},
        paddingVertical !== undefined && {paddingVertical},
        paddingHorizontal !== undefined && {paddingHorizontal},
        paddingTop !== undefined && {paddingTop},
        paddingButtom !== undefined && {paddingButtom},
        style
    ]);
    return (
        <TouchableOpacity style={textStyle} {...props}>
            {children}
        </TouchableOpacity>
    );
};

export default  Button;