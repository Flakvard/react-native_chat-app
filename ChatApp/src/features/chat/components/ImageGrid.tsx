/*
  ImageGrid.tsx:
  This component will render a the image grid for the messenger. Uses Grid.tsx
*/
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, StyleProp, ImageStyle } from 'react-native';
import Grid from './Grid';
import { PermissionsAndroid, Platform, } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { ImageGridProps } from '../utils/types';




const ImageGrid: React.FC<ImageGridProps> = ({onPressImage}) => {

  const [images, setImages] = useState<string[]|undefined>([]);
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState<string | null | undefined>(null);

  useEffect(() => {
    getImages(undefined); // Initial fetch
  }, []);

  async function hasAndroidPermission() {
      const getCheckPermissionPromise = async () => {
          const [hasReadMediaImagesPermission, hasReadMediaVideoPermission] = await Promise.all([
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
        ]);
        return hasReadMediaImagesPermission && hasReadMediaVideoPermission;
      };


      const hasPermission = await getCheckPermissionPromise();
      if (hasPermission) {
        return true;
      }
      const getRequestPermissionPromise = async () => {
        const statuses = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]);
      return statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
        PermissionsAndroid.RESULTS.GRANTED &&
        statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
        PermissionsAndroid.RESULTS.GRANTED;
    };

    return await getRequestPermissionPromise();
  }

  const getImages = async (after: string | undefined) => {

    if (loading) return;

    try {
      if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
      }
      setLoading(true);

      // Load images from CameraRoll
      CameraRoll.getPhotos({
        first: 20,
        after,
        assetType: 'Photos',
      })
        .then((result) => {

          const { edges, page_info: { has_next_page, end_cursor } } = result;
          const loadedImages = edges.map(item => item.node.image.uri);

          setImages((prevImages: any) => (prevImages ? [...prevImages, ...loadedImages] : loadedImages));
          setCursor(has_next_page ? end_cursor : null);

        })
        .catch((error) => {
          console.warn('Error loading images from CameraRoll:', error);
        });
    } catch (error) {
      console.warn('Error getting images:', error);
    } finally{
      setLoading(false);
    }
  }
  
    const getNextImages = () => {
    if (!cursor) return;
    getImages(cursor);
    };


  const renderItem = (item: string, index: number, size: any, marginTop: any, marginLeft: any) => {
    if (!item)  // Skip rendering if URI is null or 'file://null'
      return null;
    

    const style = {
      width: size,  
      height: size, 
      marginLeft,   
      marginTop,    
    } as  StyleProp<ImageStyle>;;

    return (
      <TouchableOpacity key={index} onPress={() => onPressImage(item)}>
        <Image source={{ uri: item }} style={style} />
      </TouchableOpacity>
    );
  };

  return (
    <Grid
      data={images!}
      renderItem={(item: string,index: number, size: any, marginLeft: any, marginTop: any) => renderItem(item, index, size, marginLeft, marginTop)}
      keyExtractor={(item, index) => `${index}`}
      numColumns={4}
      onEndReached={getNextImages}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default ImageGrid;