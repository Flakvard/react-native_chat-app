import React from 'react'
import { Image, StyleSheet } from 'react-native';
import useTheme  from '../../../common/hooks/useTheme';
import { Block, Button, Input, Text} from '../../../common/components';
import { LoginProps } from '../AuthNavigator';
import store from '../../../common/store';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../common/constants/theme';


const Login : React.FC<LoginProps> = ({navigation}) => {
    const {sizes, colors} = useTheme();

  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, let's assume the login is successful
    store.notifyLoginChange(true);
  };


  return (
    <Block color={colors.secondary} flex={1}>
      <Image 
      style={styles.image}
      source={require('../../../assets/icons/logo_2.png')}
      />
      <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
        <Text h3 weight="800" color={colors.primary} marginBottom={sizes.m}>
          Log in
        </Text>
        <Text weight='bold'>
          Email 
        </Text>
          <Input 
              keyboardType='email-address' 
              placeholder='Email' 
              marginBottom={sizes.md}
          />
        <Text weight='bold'>
          Password 
        </Text>
          <Input
              secureTextEntry 
              placeholder='Password' 
              marginBottom={sizes.md}
          />
          <Button color={colors.primary} center onPress={handleLogin}>
              <Text align="center" color={colors.white}>
                  Login
              </Text>
          </Button>
          <Button marginTop={sizes.m} onPress={() => navigation.navigate('Register')}>
              <Text p weight='bold' align='right'>Create an account? Sign up</Text> 
          </Button>
          <Text p weight='bold' align='center'>
            Continue with 
          </Text> 
          <Block align='center' justify='space-evenly' marginTop={sizes.m} flex={1} row>

          <Button marginTop={sizes.m} onPress={() => navigation.navigate('Register')}>
                <FontAwesome name="google-plus-square" size={46} style={{ color: colors.primary }} />
          </Button>
          <Button marginTop={sizes.m} onPress={() => navigation.navigate('Register')}>
                <FontAwesome name="facebook-square" size={46} style={{ color: colors.primary }} />
          </Button>
          </Block>
      </Block>
    </Block>
  );
}
export default Login;
const styles = StyleSheet.create({ 
  image: {
    margin: 10,
    padding: 10,
    resizeMode: 'contain',
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignContent: 'center',
    flex: 0,
  },
})