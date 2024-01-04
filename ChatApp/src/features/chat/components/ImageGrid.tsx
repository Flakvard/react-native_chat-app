import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, StyleProp, ImageStyle } from 'react-native';
import Grid from './Grid';
import { PermissionsAndroid, Platform, } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";



interface ImageGridProps {
  onPressImage: (uri: string) => void;
  images: string[];
}

interface ImageGridProps {}


const ImageGrid: React.FC<ImageGridProps> = ({onPressImage}) => {
  const [images, setImages] = useState<string[]|undefined>([]);

  console.log("images: ", images);

  useEffect(() => {
    getCameraRoll();
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

  const getCameraRoll = async () => {
    try {
      if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
      }
      // Load images from CameraRoll
      CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
        .then((result) => {
          const cameraRollImages = result.edges.map((item) => item.node.image.uri);
          console.log("images from Camera packages",cameraRollImages);
          setImages(cameraRollImages);
        })
        .catch((error) => {
          console.warn('Error loading images from CameraRoll:', error);
        });
    } catch (error) {
      console.warn('Error getting images:', error);
    }
  }


  const renderItem = (item: string, index: number, size: any, marginTop: any, marginLeft: any) => {
    if (!item)  // Skip rendering if URI is null or 'file://null'
      return null;
    

    const style = {
      width: size,  // 100
      height: size, // 100
      marginLeft,   // 5
      marginTop,    // 5
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
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default ImageGrid;