import React from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Input, Text} from '../../../common/components';


function Login() {
    const {sizes, colors} = useTheme();
  return (
    <Block marginTop={sizes.xxl} paddingHorizontal={sizes.padding}>
      <Text h3 align="center" color={"#eac435"}>
        Login
      </Text>
      <Text p align="center" color={"#345995"}>
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
        <Button color={colors.primary} center>
            <Text align="center" color={colors.white}>
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
        <Block row justify='space-evenly' marginTop={sizes.xxl}>
          <Block flex={0} radius={sizes.xs} color={colors.primary}  marginTop={sizes.xs} style={{height: 24, width: 20}}/>
          <Block flex={0} radius={sizes.xs} color={colors.secondary}marginTop={sizes.xs} style={{height: 24, width: 20}}/>
          <Block flex={0} radius={sizes.xs} color={colors.tertiary} marginTop={sizes.xs} style={{height: 24, width: 20}}/>
          <Block flex={0} radius={sizes.xs} color={colors.warning}  marginTop={sizes.xs} style={{height: 24, width: 20}}/>
          <Block flex={0} radius={sizes.xs} color={colors.error}    marginTop={sizes.xs} style={{height: 24, width: 20}}/>
          <Block flex={0} radius={sizes.xs} color={colors.success}  marginTop={sizes.xs} style={{height: 24, width: 20}}/>
        </Block>
    </Block>
  )
}
export default Login;