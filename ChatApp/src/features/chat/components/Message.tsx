import React, { useEffect, useState } from 'react'
import useTheme, { ThemeProvider } from '../../../common/hooks/useTheme';
import { Block, Button, Text } from '../../../common/components'
import { MessageProps } from '../ChatNavigator';
import { StyleSheet, Alert, TouchableHighlight, Image, BackHandler, View, Keyboard } from 'react-native';
import Status from './Status';
import MessageList from './MessageList';
import { createImageMessage, createTextMessage, receiveImageMessage, receiveTextMessage } from '../utils/MessageUtils';
import Toolbar from './Toolbar';
import ImageGrid from './ImageGrid';

import KeyboardState from './KeyboardState';
import MeasureLayout from './MeasureLayout';
import MessagingContainer, { INPUT_METHOD } from './MessagingContainer';

//const Message : React.FC<MessageProps> =  ({navigation}) => {


const Message = () => {
  //const {sizes, colors} = useTheme();

  const [state, setState] = useState({
    messages: [
      createTextMessage("You are really good with cameras! 🤓🤳"),
      receiveImageMessage('https://fastly.picsum.photos/id/82/200/300.jpg?hmac=hfuNcoCWsYuVOmlcRdKAieM4Ax03DjM-mpVlqRUdGfc'),
      receiveTextMessage("I travled to Japan - Check out this photo I took"),
      receiveTextMessage("Wow! beautiful!🥰"),
      createImageMessage('https://fastly.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA'),
      createImageMessage('https://fastly.picsum.photos/id/1035/300/300.jpg?hmac=h2e6yb4s09DR32Lvxopvsee73kUjJIpGLxp0IpxxN2c'),
      createTextMessage('when I was on holiday I took these 😇'),
      createTextMessage('Wow!'),
      receiveImageMessage('https://fastly.picsum.photos/id/510/200/300.jpg?hmac=u6iNoUL4S50O2eGkBF1jHRJL3Hgrbgdb258jroHPYeI'),
      receiveTextMessage("Check out this photo I took😎"),
      receiveTextMessage("Yes, me too😅"),
      receiveTextMessage("Fantastic!👏"),
      createTextMessage("Great! How's it going for you?😄"),
      receiveTextMessage("How's it going?😊"),
      receiveTextMessage('Hi!😄'),
      createTextMessage('Hello World 😁'),
    ],
    fullscreenImageId: null,
    isInputFocused: false,
    inputMethod: INPUT_METHOD.NONE
  });


  const handlePressMessage = ({ id, type }: any) => {
    switch (type) {
      case 'textCre':
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
      case 'imageCre':
        setState({
          ...state,
          fullscreenImageId: id,
        });
        break;
      case 'imageRec':
        setState({
          ...state,
          fullscreenImageId: id,
        });
        break;
      default:
        break;
    }
  }

  const handlePressImage = (uri: string) => {
    const { messages } = state;
    setState({
      ...state,
      messages: [createImageMessage(uri), ...messages],
    });
  };

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

  const renderInputMethodEditor = () => {
    return (
      <Block style={styles.inputMethodEditor}>
        <ImageGrid onPressImage={handlePressImage} />
      </Block>
    );
  }

  const renderFullscreenImage = () => {
    const { messages, fullscreenImageId } = state;

    if (!fullscreenImageId) return null;

    const image = messages.find((message: { id: any; }) => message.id === fullscreenImageId);

    if (!image) return null;

    const { uri }: any = image;

    return (
      <TouchableHighlight style={styles.fullscreenOverlay} onPress={dismissFullscreenImage}>
        <Image style={styles.fullscreenImage} source={{ uri }} />
      </TouchableHighlight>
    );
  };

  const handleChangeInputMethod = (inputMethod: string) => {
    setState((prev) => ({
      ...prev,
      inputMethod
    }));
  };


  const handlePressToolbarCamera = () => {
    // method to force the keyboard to close
    Keyboard.dismiss();
    setState((prev) => ({
      ...prev,
      isInputFocused: false,
      inputMethod: INPUT_METHOD.CUSTOM,  
    }));
  };

  const handleChangeFocus = (isFocused: boolean) => {
    setState({
      ...state,
      isInputFocused: isFocused
    });
  };

  const handleSubmit = (text: string) => {
    const { messages } = state;
    setState({
      ...state,
      messages: [createTextMessage(text), ...messages],
    });
  };

  const renderToolbar = () => {
    const { isInputFocused } = state;

    return (
      <Block style={styles.toolbar}>
        <Toolbar
          isFocused={isInputFocused}
          onSubmit={handleSubmit}
          onChangeFocus={handleChangeFocus}
          onPressCamera={handlePressToolbarCamera}
        />
      </Block>);
  }

      return (
          <Block style={styles.container}>
            <Status />
            <MeasureLayout>
            {(layout) => (
              <KeyboardState layout={layout}>
                {(keyboardInfo) => (
                  <MessagingContainer
                    {...keyboardInfo}
                    inputMethod={state.inputMethod}
                    onChangeInputMethod={handleChangeInputMethod}
                    renderInputMethodEditor={renderInputMethodEditor}
                  >
                    {renderMessageList()}
                    {renderToolbar()}
                  </MessagingContainer>
                )}
              </KeyboardState>
            )}
          </MeasureLayout>
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

