import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { Block, Button, Text } from '../../common/components'
import {RootParamList} from '../../navigation/AppNavigator'
import { Login, Register } from './components';

type LoginProps = NativeStackScreenProps<RootParamList, 'Login'>;

export const LoginScreen = ({ navigation, route }: LoginProps) => {
  return <Login navigation={navigation}/>;
}

type RegisterProps = NativeStackScreenProps<RootParamList, 'Register'>;

export const RegisterScreen = ({ navigation, route }: RegisterProps) => {
  return <Register navigation={navigation}/>;
}
type Screen3Props = NativeStackScreenProps<RootParamList, 'Screen3'>;

export const Screen3 = ({ navigation, route }: Screen3Props) => {
  return (
    <Block color={"#eac435"} align='center' justify='center'> 
        <Text h1 align='center' justifyContent='center' padding={50}>Hello world</Text>
    </Block>
  )
}