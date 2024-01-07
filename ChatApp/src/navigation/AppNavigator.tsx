import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Listener } from '../common/utils/types';
import store from '../common/store';
import { COLORS } from '../common/constants/theme';
import { ThemeProvider } from '../common/hooks/useTheme';
import { useEffect, useState } from 'react';
import { AuthScreens, UserScreens } from '../features/auth/AuthNavigator';
import { RoomListScreens } from '../features/room/RoomNavigator';
import { getTabBarIcon } from '../common/utils/getToolbarIcon';
import { MessageScreens } from '../features/chat/ChatNavigator';


// Define RootParamList
export type RootParamList = {
  Login:    undefined;
  Register: undefined;
  User:     undefined;
  Chat:     undefined;
  ChatRoom: undefined;
  Message:  undefined;
  Messages:  undefined;
  RoomList: undefined;
  Profile:  { userId: string };
  Users:    undefined;
  Favorites:undefined;
  Options:  undefined;
  Auth:     undefined;
}

// Create necessary navigators
export const Tab = createBottomTabNavigator<RootParamList>();
export const Stack = createNativeStackNavigator<RootParamList>();


export const MainNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(store.getState().isLoggedIn);

  const updateIsLoggedIn: Listener = () => {
    setIsLoggedIn(store.getState().isLoggedIn);
  };

  useEffect(() => {
    const unsubscribe = store.onChange(updateIsLoggedIn);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="ChatRoom" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Auth" component={AuthScreens} />
          </>
        )}
      </Stack.Navigator>
    </ThemeProvider>
  );
};

const HomeScreen = () =>{
  return(
  <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarStyle: {
      backgroundColor: COLORS.primary
    }
  }}
  >
    <Tab.Screen
      name="Chat"
      component={RoomListScreens}
      options={{
        tabBarIcon: getTabBarIcon("list"),
        headerStyle: {
          backgroundColor: COLORS.primary
        }
      }}
    />
    <Tab.Screen
      name="Users"
      component={UserScreens}
      options={{
        tabBarIcon: getTabBarIcon("person"),
        headerStyle: {
          backgroundColor: COLORS.primary
        }
      }}
    />
    <Tab.Screen
      name="Messages"
      component={MessageScreens}
      options={{
        tabBarIcon: getTabBarIcon("message"),
        headerStyle: {
          backgroundColor: COLORS.primary
        }
      }}
    />
  </Tab.Navigator>);
}
