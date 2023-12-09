import React from 'react';
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

interface IBlock extends ViewProps{
    children?: React.ReactNode,
    flex?: ViewStyle["flex"];
    row?: boolean;
    color?: ViewStyle["backgroundColor"];
    align?: ViewStyle["alignItems"];
    radius?: ViewStyle["borderRadius"];
    justify?: ViewStyle["justifyContent"];
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

const Block = ({
    children,
    flex,
    row,
    color,
    radius,
    align,
    justify,
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
} : IBlock) => {
    const blockStyle = StyleSheet.flatten([
        flex !== undefined && {flex},
        row !== undefined && {flexDirection: "row"},
        color !== undefined && {backgroundColor: color},
        radius !== undefined && {borderRadius: radius},
        align !== undefined && {alignItems: align},
        justify !== undefined && {justifyContent: justify},
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
        <View style={blockStyle} {...props}>
            {children}
        </View>
    );
};

export default  Block;