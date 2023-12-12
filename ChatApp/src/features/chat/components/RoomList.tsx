import React from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Text } from '../../../common/components'
import { RoomListProps } from '../ChatNavigator';

const RoomList : React.FC<RoomListProps> = ({navigation}) => {
  const {sizes, colors} = useTheme();
  return (
    <Block flex={1} color={colors.secondary}>
      <Text>RoomList</Text>
          <Button marginTop={sizes.m} onPress={() => navigation.navigate('ChatRoom')}>
              <Text p weight='bold' align='right'>Continue to ChatRoom ? Click here</Text> 
          </Button>
          <Button marginTop={sizes.m} onPress={() => navigation.navigate('RoomList')}>
              <Text p weight='bold' align='right'>Continue to RoomList ? Click here</Text> 
          </Button>
          <Button marginTop={sizes.m} onPress={() => navigation.navigate('Message')}>
              <Text p weight='bold' align='right'>Continue to Message ? Click here</Text> 
          </Button>
    </Block>
  )
}

export default RoomList