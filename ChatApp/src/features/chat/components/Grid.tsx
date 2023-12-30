import React from 'react';
import { FlatList, StyleSheet, FlatListProps, Dimensions, PixelRatio, ViewStyle } from 'react-native';
import { Block } from '../../../common/components';

interface GridProps<T> extends FlatListProps<T> {
    renderItem: (info: any) => React.ReactElement;
    numColumns?: number;
    itemMargin?: number;
}

const Grid = ({
    renderItem,
    numColumns = 4,
    itemMargin = StyleSheet.hairlineWidth,
    ...restProps
}: GridProps<any>) => {

    const renderGridItem = ({ index, ...info }: any) => {
        const { width } = Dimensions.get('window');
        const size = PixelRatio.roundToNearestPixel(
            (width - itemMargin * (numColumns - 1)) / numColumns
        );
        // We don't want to include a `marginLeft` on the first item of a row
        const marginLeft = index % numColumns === 0 ? 0 : itemMargin;
        // We don't want to include a `marginTop` on the first row of the grid
        const marginTop = index < numColumns ? 0 : itemMargin;

        return (
            <Block style={{ marginLeft, marginTop } as ViewStyle}>
                {renderItem({ ...info, size, marginLeft, marginTop })}
            </Block>
        );
    };

    return (
        <FlatList 
            {...restProps} 
            renderItem={renderGridItem} 
            numColumns={numColumns}
        />
    );
};


export default Grid;