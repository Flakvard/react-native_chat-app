import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootParamList = {
  Login: { paramA: string}
  Register: { paramA: string}
  Screen3: undefined
}

const isLoggedIn = false;

export const Root = createNativeStackNavigator<RootParamList>()

