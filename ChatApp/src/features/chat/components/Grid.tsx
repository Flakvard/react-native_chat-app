import React from 'react';
import { FlatList, StyleSheet, Dimensions, PixelRatio, ViewStyle} from 'react-native';
import { Block } from '../../../common/components';

interface GridProps<T> {
  renderItem: (item: string,index: number, size: any, marginLeft: any, marginTop: any) => React.ReactElement | null;
  data: ArrayLike<T>;
  numColumns?: number;
  itemMargin?: number;
  // Include other FlatListProps as needed
  keyExtractor?: (item: T, index: number) => string;
}

const Grid = ({
  renderItem,
  numColumns = 4,
  itemMargin = StyleSheet.hairlineWidth,
  data,
  keyExtractor,
  ...restProps
}: GridProps<any>) => {

    const renderGridItem = ({ item, index }: any) => {
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
                {renderItem(item,index, size, marginLeft, marginTop)}
            </Block>
        );
    };

    return (
        <FlatList 
            {...restProps} 
            renderItem={renderGridItem}
            numColumns={numColumns}
            data={data}
            keyExtractor={keyExtractor}
        />
    );
};


export default Grid;