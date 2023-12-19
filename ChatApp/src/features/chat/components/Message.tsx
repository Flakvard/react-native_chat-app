import React from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Text } from '../../../common/components'
import { MessageProps } from '../ChatNavigator';
import { StyleSheet } from 'react-native';
import Status from './Status';

//const Message : React.FC<MessageProps> =  ({navigation}) => {

export default class Message extends React.Component {
    //const {sizes, colors} = useTheme();

    renderMessageList() {
      return (
        <Block style={styles.content}></Block>
      );
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
        <><Status />
        <Block style={styles.container}>
          {this.renderMessageList()}
          {this.renderToolbar()}
          {this.renderInputMethodEditor()}
        </Block></>
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