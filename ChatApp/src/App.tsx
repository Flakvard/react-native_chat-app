import React, { useEffect } from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {Root} from './navigation/AppNavigator'
import {LoginScreen, RegisterScreen, Screen3} from './features/auth/AuthNavigator'

import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from './common/hooks/useTheme';

const isLoggedIn = false;
const PolyChat = () => {

  useEffect(() => {
    if (Platform.OS === "android")
      SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <ThemeProvider>
        {isLoggedIn ?(
          <Root.Navigator>
            <Root.Screen name="Screen3" component={Screen3} />
          </Root.Navigator>
        ):(
          <Root.Navigator>
            <Root.Screen name="Login" component={LoginScreen} />
            <Root.Screen name="Register" component={RegisterScreen} />
          </Root.Navigator>
        )}
        {}
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default PolyChat;