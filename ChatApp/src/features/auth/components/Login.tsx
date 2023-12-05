import React from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Input, Text} from '../../../common/components';


function Login() {
    const {sizes } = useTheme();
  return (
    <Block marginTop={sizes.xxl} paddingHorizontal={sizes.padding}>
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
        <Block align='center' marginTop={20}>
          <Text h1>Header 1</Text>
          <Text h2>Header 2</Text>
          <Text h3>Header 3</Text>
          <Text h4>Header 4</Text>
          <Text p>Paragraph</Text>
          <Text>Default text</Text>
        </Block>
    </Block>
  )
}
export default Login;