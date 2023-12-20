import React, { useEffect, useState } from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Text } from '../../../common/components'
import { MessageProps } from '../ChatNavigator';
import { StyleSheet, Alert, TouchableHighlight, Image, BackHandler} from 'react-native';
import Status from './Status';
import MessageList from './MessageList';
import { createImageMessage, createTextMessage } from '../util\
s/MessageUtils';

//const Message : React.FC<MessageProps> =  ({navigation}) => {


const Message = () =>  {
    //const {sizes, colors} = useTheme();

    const [state, setState] = useState({
      messages: [
        createImageMessage('https://fastly.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA'),
        createTextMessage('World'),
        createTextMessage('Hello'),
        createTextMessage('World'),
        createTextMessage('Hello'),
        createImageMessage('https://fastly.picsum.photos/id/1035/300/300.jpg?hmac=h2e6yb4s09DR32Lvxopvsee73kUjJIpGLxp0IpxxN2c'),
      ],
      fullscreenImageId: null,
    });

    // android back button press to close full screen image
    useEffect(() => {
      const onHardwareBackPress = () => {
        const { fullscreenImageId } = state; 
        if (fullscreenImageId) {
          console.log(fullscreenImageId, " image id")
          dismissFullscreenImage(); 
          return true;
        }
        return false;
      };
  
      const subscription = BackHandler.addEventListener('hardwareBackPress', onHardwareBackPress);
      return () => {
        subscription.remove(); // Cleanup 
      };
    }, [state.fullscreenImageId]); // Empty dependency array ensures the effect runs once after the initial render


    const dismissFullscreenImage = () => {
      setState({
        ...state,
         fullscreenImageId: null 
        });
    };

    const renderMessageList = () => {
      const { messages } = state;
      return (
        <Block style={styles.content}>
          <MessageList messages={messages} onPressMessage={handlePressMessage} />
        </Block>
      );
    }

    const handlePressMessage = ({ id, type }:any) => {
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
                  const { messages } = state;
                  setState({
                    ...state,
                    messages: messages.filter(message => message.id !== id),
                  });
                },
              },
            ],
          );
          break;
        case 'image':
          setState({
            ...state,
            fullscreenImageId: id,
          });
          break;
        default:
          break;
        }
    }

    const renderInputMethodEditor = () => {
      return (
        <Block style={styles.inputMethodEditor}></Block>
      );
    }
    const renderToolbar = () => {
      return (
        <Block style={styles.toolbar}></Block>
      );
    }

    const renderFullscreenImage = () => {
      const { messages, fullscreenImageId } = state;

      if (!fullscreenImageId) return null;

      const image = messages.find((message: { id: any; }) => message.id === fullscreenImageId);

      if (!image) return null;

      const { uri } : any = image;

      return (
        <TouchableHighlight style={styles.fullscreenOverlay} onPress={dismissFullscreenImage}>
          <Image style={styles.fullscreenImage} source={{ uri }} />
        </TouchableHighlight>
      );
    };

    return (
        <Block style={styles.container}>
        <Status />
          {renderMessageList()}
          {renderToolbar()}
          {renderInputMethodEditor()}
          {renderFullscreenImage()}
        </Block>
    );
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
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 2,
  },
  fullscreenImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Message

