import React from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Input, Text} from '../../../common/components';


function Login() {
    const {sizes } = useTheme();
  return (
    <Block marginTop={50} paddingHorizontal={20}>
      <Text h3 align="center">
        Login
      </Text>
      <Text p align="center">
        Enter your email & password
      </Text>
        <Input 
            keyboardType='email-address' 
            placeholder='Email' 
            placeholderTextColor="black"
            marginVertical={sizes.base}
        />
        <Input 
            secureTextEntry 
            placeholder='Password' 
            placeholderTextColor="black"
            marginVertical={sizes.base}
        />
        <Button color="#CCC" center>
            <Text align="center">
                Login
            </Text>
        </Button>
    </Block>
  )
}
export default Login;