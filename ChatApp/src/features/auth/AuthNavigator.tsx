import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootParamList, Stack} from '../../navigation/AppNavigator'
import { Login, Register } from './components';
import User from './components/User';
import { ThemeProvider } from '../../common/hooks/useTheme';
import Options from './components/Options';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../common/constants/theme';

export type LoginProps = NativeStackScreenProps<RootParamList, 'Login'>;

export const LoginComponent = ({ navigation, route }: LoginProps) => {
  return <Login navigation={navigation} route={route}/>;
}

export type RegisterProps = NativeStackScreenProps<RootParamList, 'Register'>;

export const RegisterComponent = ({ navigation, route }: RegisterProps) => {
  return <Register navigation={navigation} route={route}/>;
}
export type UserProps = NativeStackScreenProps<RootParamList, 'User'>;

export const UserComponent = ({ navigation, route }: UserProps) => {
  return <User navigation={navigation} route={route} />;
};

export type OptionsProps = NativeStackScreenProps<RootParamList, 'Options'>;
export const OptionsComponent = ({ navigation, route }: OptionsProps) => {
  return (
    <Options 
      navigation={navigation} 
      route={route}
    />);
};

// Stack Navigators
export const AuthScreens = () => {
  return(
  <ThemeProvider>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginComponent} 
          options={({ navigation: { navigate } }) => ({
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            },
          })}
        />
        <Stack.Screen name="Register" component={RegisterComponent} 
          options={({ navigation: { navigate } }) => ({
            title: "Register",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            }, 
          })}
        />
    </Stack.Navigator>
  </ThemeProvider>);
};

export const UserScreens = () => {
  return(
  <ThemeProvider>
    <Stack.Navigator>
        <Stack.Screen name="User" component={UserComponent} 
          options={({ navigation: { navigate } }) => ({
            title: "Me",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            },
            headerRight: () => (
              <MaterialIcons
                name="settings"
                size={24}
                style={{ color: "white", marginRight: 10 }}
                onPress={() => navigate("Options")}
              />
            ),
          })}
        />
        <Stack.Screen name="Options" component={OptionsComponent} 
          options={({ navigation: { goBack } }) => ({
            title: "Options",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            },
            headerLeft: () => (
              <MaterialIcons
                name="close"
                size={24}
                style={{ color: COLORS.black, marginLeft: 10 }}
                onPress={() => goBack()}
              />
            ),
          })}
        />
    </Stack.Navigator>
  </ThemeProvider>);
};
