import React, { useEffect } from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {Root} from './navigation/AppNavigator'
import {LoginScreen, RegisterScreen, Screen3} from './features/auth/AuthNavigator'

import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from './common/hooks/useTheme';
import { ChatRoom, Message} from './features/chat/components';
import { RoomList } from './features/room/components';
import { Profile } from './features/room/components';

const isLoggedIn = true;
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
            <Root.Screen name="ChatRoom" component={ChatRoom} />
            <Root.Screen name="Message" component={Message} />
            <Root.Screen name="RoomList" component={RoomList} />
            <Root.Screen name="Profile" component={Profile}  />
          </Root.Navigator>
        ):(
          <Root.Navigator>
            <Root.Screen name="Login" component={LoginScreen} />
            <Root.Screen name="Register" component={RegisterScreen} />
            <Root.Screen name="Screen3" component={Screen3} />
          </Root.Navigator>
        )}
        {}
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default PolyChat;