import React, { useEffect } from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {MainNavigator, Tab} from './navigation/AppNavigator'
import {AuthScreens} from './features/auth/AuthNavigator'

import SplashScreen from 'react-native-splash-screen';
import { COLORS } from './common/constants/theme';
import { RoomListScreens } from './features/room/RoomNavigator';
import { getTabBarIcon } from './common/utils/getToolbarIcon';

const PolyChat = () => {

  const colors = COLORS;

  useEffect(() => {
    if (Platform.OS === "android")
      SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <MainNavigator></MainNavigator>
    </NavigationContainer>
  )
}

export default PolyChat;