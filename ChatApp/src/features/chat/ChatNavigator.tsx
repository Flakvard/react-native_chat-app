import { NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootParamList, Stack} from '../../navigation/AppNavigator'
import { Message } from './components';
import { COLORS } from '../../common/constants/theme';


export type MessageProps = NativeStackScreenProps<RootParamList, 'Message'>;

export const MessageComponent = ({ navigation, route }: MessageProps) => {
  return <Message navigation={navigation} route={route}/>;
}

// Stack Navigators
export const MessageScreens = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen name="Message" component={MessageComponent} 
          options={({ navigation: { navigate } }) => ({
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            },
          })}
    />
  </Stack.Navigator>
  );
};
