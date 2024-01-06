export interface MessageShape {
    id: number;
    type: 'textCre' | 'textRec' | 'imageCre'| 'imageRec';
    text?: string;
    uri?: string;
}

export interface Layout {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface GridProps<T> {
  renderItem: (item: string,index: number, size: any, marginLeft: any, marginTop: any) => React.ReactElement | null;
  data: ArrayLike<T>;
  numColumns?: number;
  itemMargin?: number;
  // Include other FlatListProps as needed
  keyExtractor?: (item: T, index: number) => string;
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null;
  onEndReachedThreshold?: number;
}


export interface ImageGridProps {
  onPressImage: (uri: string) => void;
}