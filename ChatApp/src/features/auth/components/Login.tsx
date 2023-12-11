import React from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Input, Text} from '../../../common/components';


function Login() {
    const {sizes, colors} = useTheme();
  return (
    <Block color={colors.secondary} flex={1}>
    <Block marginTop={sizes.xxl} paddingHorizontal={sizes.padding}>
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