import React from 'react'
import { Image, StyleSheet } from 'react-native';
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Input, Text} from '../../../common/components';


function Login() {
    const {sizes, colors} = useTheme();
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
          <Button color={colors.primary} center>
              <Text align="center" color={colors.white}>
                  Login
              </Text>
          </Button>
      </Block>
    </Block>
  )
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