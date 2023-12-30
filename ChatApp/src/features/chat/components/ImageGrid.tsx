import React from 'react';
import { Image, StyleSheet, TouchableOpacity, FlatList, ViewStyle, StyleProp, ImageStyle } from 'react-native';
import Grid from './Grid';

interface ImageGridProps {
  onPressImage: (uri: string) => void;
}

const keyExtractor = ({ uri }: { uri: string }) => uri;

const ImageGrid: React.FC<ImageGridProps> = ({ onPressImage }) => {
  const images = [
    { uri: 'https://picsum.photos/600/600?image=10' },
    { uri: 'https://picsum.photos/600/600?image=20' },
    { uri: 'https://picsum.photos/600/600?image=30' },
    { uri: 'https://picsum.photos/600/600?image=40' },
    { uri: 'https://picsum.photos/600/600?image=50' },
    { uri: 'https://picsum.photos/600/600?image=60' },
    { uri: 'https://picsum.photos/600/600?image=70' },
    { uri: 'https://picsum.photos/600/600?image=80' },
    { uri: 'https://picsum.photos/600/600?image=90' },
    { uri: 'https://picsum.photos/600/600?image=11' },
    { uri: 'https://picsum.photos/600/600?image=22' },
    { uri: 'https://picsum.photos/600/600?image=33' },
    { uri: 'https://picsum.photos/600/600?image=44' },
    { uri: 'https://picsum.photos/600/600?image=55' },
    { uri: 'https://picsum.photos/600/600?image=66' },
    { uri: 'https://picsum.photos/600/600?image=77' },
    { uri: 'https://picsum.photos/600/600?image=88' },
    { uri: 'https://picsum.photos/600/600?image=99' },
  ];

  const renderItem = ({ item: { uri }, size, marginTop, marginLeft }: any) => {
    const style = {
      width: size,
      height: size,
      marginLeft,
      marginTop,
    } as StyleProp<ImageStyle>;
    console.log('Size:', size, 'MarginTop:', marginTop, 'MarginLeft:', marginLeft);


    return (
      <TouchableOpacity onPress={() => onPressImage(uri)} > 
        <Image source={{ uri }} style={style} /> 
      </TouchableOpacity>
    );
  };

  return (
    <Grid
      data={images}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={4} // Set your desired number of columns
      // Other FlatList props...
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default ImageGrid;