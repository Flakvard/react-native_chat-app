/*
  MeasureLayout.tsx:
  This component will measure the available space for our messaging UI
*/
import React, { ReactNode, useState } from 'react';
import { Platform, StyleSheet, View, ViewStyle, LayoutChangeEvent } from 'react-native';

import { Dimensions, StatusBar } from 'react-native'
import { Layout } from '../utils/types';


export interface MeasureLayoutProps {
  children: (layout: Layout) => ReactNode;
}


const MeasureLayout: React.FC<MeasureLayoutProps> = ({ children }) => {
  const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
  const STATUSBAR_HEIGHT = StatusBar.currentHeight;

  const [layout, setLayout] = useState<Layout | null>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { nativeEvent } = event;
    setLayout({
      ...nativeEvent.layout,
      //height: SCREEN_HEIGHT - 50,
      y: nativeEvent.layout.y + (Platform.OS === 'android' ? STATUSBAR_HEIGHT! : 0),
    });
  };

  // Measure the available space with a placeholder view set to flex 1
  if (!layout) {
    return (
        <View onLayout={handleLayout} style={styles.container} />
    );
  }

  return <>{children(layout)}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
});

export default MeasureLayout;
