/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from './src/features/auth/components';
import { ThemeProvider } from './src/common/hooks/useTheme';
import SplashScreen from 'react-native-splash-screen';


const App = () => {

  useEffect(() => {
    if (Platform.OS === "android")
      SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Login />
      </ThemeProvider>
    </NavigationContainer>
  );
}
export default App;
