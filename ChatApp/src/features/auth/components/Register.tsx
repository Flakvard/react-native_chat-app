import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native';
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Input, Text} from '../../../common/components';
import { RegisterProps } from '../AuthNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Register : React.FC<RegisterProps> = ({navigation}) => {
    const {sizes, colors} = useTheme();
  return (
    <ScrollView>

    <Block color={colors.secondary} flex={1}>
      <Image 
      style={styles.image}
      source={require('../../../assets/icons/logo_2.png')}
      />
      <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
        <Text h3 weight="800" color={colors.primary} marginBottom={sizes.m}>
          Register
        </Text>
        <Text weight='bold'>
          Full Name 
        </Text>
          <Input 
              keyboardType='default' 
              placeholder='Fullname' 
              marginBottom={sizes.md}
          />
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
                  Register
              </Text>
          </Button>
          <Button marginTop={sizes.m} onPress={() => navigation.navigate('Login')}>
              <Text p weight='bold' align='right'>Already have an account? Sign in</Text> 
          </Button>
          <Text p weight='bold' align='center'>
            Continue with 
          </Text> 
          <Block align='center' justify='space-evenly' marginTop={sizes.m} flex={1} row>

          <Button  onPress={() => navigation.navigate('Register')}>
                <FontAwesome name="google-plus-square" size={46} style={{ color: colors.primary }} />
          </Button>
          <Button  onPress={() => navigation.navigate('Register')}>
                <FontAwesome name="facebook-square" size={46} style={{ color: colors.primary }} />
          </Button>
          </Block>
      </Block>
    </Block>
    </ScrollView>
  );
}
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
export default Register;