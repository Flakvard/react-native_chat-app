import { StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewProps, ViewStyle} from 'react-native'
import React from 'react'

interface IButton extends TouchableOpacityProps {
    children?: React.ReactNode;
    color?: ViewStyle["backgroundColor"];
    radius?: ViewStyle["borderRadius"];
    margin?: ViewStyle["margin"];
    marginTop?: ViewStyle["marginTop"];
    marginBottom?: ViewStyle["marginBottom"];
    marginRight?: ViewStyle["marginRight"];
    marginLeft?: ViewStyle["marginLeft"];
    marginHorizontal?: ViewStyle["marginHorizontal"];
    marginVertical?: ViewStyle["marginVertical"];
    padding?: ViewStyle["padding"];
    paddingTop?: ViewStyle["paddingTop"];
    paddingBottom?: ViewStyle["paddingBottom"];
    paddingRight?: ViewStyle["paddingRight"];
    paddingLeft?: ViewStyle["paddingLeft"];
    paddingHorizontal?: ViewStyle["paddingHorizontal"];
    paddingVertical?: ViewStyle["paddingVertical"];
    style?: StyleProp<ViewStyle>;
}

const Button = ({
    children,
    color,
    radius,
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
} : IButton) => {
    const buttonStyle = StyleSheet.flatten([
        color !== undefined && {backgroundColor: color},
        radius !== undefined && {borderRadius: radius},
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
    ]) as ViewProps;
    return (
        <TouchableOpacity style={buttonStyle} {...props}>
            {children}
        </TouchableOpacity>
    );
};

export default  Button;