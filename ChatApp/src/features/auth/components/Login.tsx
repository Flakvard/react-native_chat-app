import React from 'react'
import { Block, Button, Input, Text} from '../../../common/components';


function Login() {
  return (
    <Block marginTop={50} paddingBottom={20}>
      <Text h3 align="center">Login</Text>
        <Input keyboardType='email-address' placeholder='Email' placeholderTextColor="black"/>
        <Input secureTextEntry placeholder='Password' placeholderTextColor="black"/>
        <Button color="lightblue" radius={8} padding={16}>
            <Text align="center">
                Login
            </Text>
        </Button>
    </Block>
  )
}
export default Login;