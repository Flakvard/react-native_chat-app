import { NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootParamList, Stack, Tab} from '../../navigation/AppNavigator'
import { RoomList } from '../room/components';
import Profile from './components/Profile';
import { MessageScreens } from '../chat/ChatNavigator';
import { ThemeProvider } from '../../common/hooks/useTheme';
import { COLORS } from '../../common/constants/theme';


export type RoomListProps = NativeStackScreenProps<RootParamList, 'RoomList'>;

export const RoomListComponent = ({ navigation, route }: RoomListProps) => {
  return <RoomList navigation={navigation} route={route}/>;
}


export type ProfileProps = NativeStackScreenProps<RootParamList, 'Profile'>

export const ProfileComponent = ({ navigation, route }: ProfileProps) => {
  return <Profile navigation={navigation} route={route}/>;
}

// Stack Navigators
export const RoomListScreens = () => {
  return(
  <ThemeProvider>
    <Stack.Navigator>
      <Stack.Screen name="RoomList" component={RoomListComponent} 
          options={({ navigation: { navigate } }) => ({
            title: "Rooms",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            },
          })}
      />
      <Stack.Screen name="Profile" component={ProfileComponent} 
          options={({ navigation: { navigate } }) => ({
            title: "Profile",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            },
          })}
      />
      <Stack.Screen name="Message" component={MessageScreens} />
    </Stack.Navigator>
  </ThemeProvider>
  );
}
