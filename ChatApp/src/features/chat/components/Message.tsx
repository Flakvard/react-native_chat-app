import React from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Text } from '../../../common/components'
import { MessageProps } from '../ChatNavigator';
import { StyleSheet, Alert} from 'react-native';
import Status from './Status';
import MessageList from './MessageList';
import { createImageMessage, createTextMessage } from '../util\
s/MessageUtils';

//const Message : React.FC<MessageProps> =  ({navigation}) => {

export default class Message extends React.Component {
    //const {sizes, colors} = useTheme();

    state = {
      messages: [
        createImageMessage('https://fastly.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA'),
        createTextMessage('World'),
        createTextMessage('Hello'),
        createTextMessage('World'),
        createTextMessage('Hello'),
        createImageMessage('https://fastly.picsum.photos/id/1035/300/300.jpg?hmac=h2e6yb4s09DR32Lvxopvsee73kUjJIpGLxp0IpxxN2c'),
      ],
      };


    renderMessageList() {
      const { messages } = this.state;
      return (
        <Block style={styles.content}>
          <MessageList messages={messages} onPressMessage={this.handlePressMessage} />
        </Block>
      );
    }

    handlePressMessage = ({id, type}:any) => {
      switch (type) {
        case 'text':
        Alert.alert(
          'Delete message?',
          'Are you sure you want to permanently delete this message?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => {
                const { messages } = this.state;
                this.setState({ messages: messages.filter(message => message.id !== id) });
              },
            },
          ],
        );
        break;
        default:
        break;
        }
    }

    renderInputMethodEditor() {
      return (
        <Block style={styles.inputMethodEditor}></Block>
      );
    }
    renderToolbar() {
      return (
        <Block style={styles.toolbar}></Block>
      );
    }
    render() {
      return (
        <Block style={styles.container}>
        <Status />
          {this.renderMessageList()}
          {this.renderToolbar()}
          {this.renderInputMethodEditor()}
        </Block>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
    inputMethodEditor: {
      flex: 1,
      backgroundColor: 'white',
  },
  toolbar: {
      borderTopWidth: 1,
      borderTopColor: 'rgba(0,0,0,0.04)',
      backgroundColor: 'white',
  },
});

//export default Message