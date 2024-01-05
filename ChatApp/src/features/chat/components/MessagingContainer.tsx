/*
  MessagingContainer:
  This component will displaying the correct IME (text, images) at the correct size
*/
import {
  BackHandler,
  Keyboard,
  LayoutAnimation,
  Platform,
  UIManager,
  View,
  ViewStyle,
} from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';

// Enable LayoutAnimation for android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const INPUT_METHOD = {
  NONE: 'NONE',
  KEYBOARD: 'KEYBOARD',
  CUSTOM: 'CUSTOM',
};

interface MessagingContainerProps {
  // From `KeyboardState`
  containerHeight: number;
  contentHeight: number;
  keyboardHeight: number;
  keyboardVisible: boolean;
  keyboardWillShow: boolean; // iphone
  keyboardWillHide: boolean; // iphone
  keyboardAnimationDuration: number;

  // Managing the Input Method Editors (IME) type
  inputMethod: string;
  onChangeInputMethod: (inputMethod: string) => void;

  // Rendering content
  children?: React.ReactNode;
  renderInputMethodEditor: () => React.ReactNode;
}

const MessagingContainer: React.FC<MessagingContainerProps> = ({
  containerHeight,
  contentHeight,
  keyboardHeight,
  keyboardVisible,
  keyboardWillShow,
  keyboardWillHide,
  keyboardAnimationDuration,
  inputMethod,
  onChangeInputMethod = () => { },
  children = null,
  renderInputMethodEditor,
}) => {

  // Handle back press to dismiss custom input method
  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (inputMethod === INPUT_METHOD.CUSTOM) {
        onChangeInputMethod(INPUT_METHOD.NONE);
        return true;
      }
      return false;
    });

    return () => {
      subscription.remove();
    };
  }, [keyboardVisible, inputMethod, onChangeInputMethod, keyboardAnimationDuration]);


  // Animate between states
  useEffect(() => {
    if (keyboardVisible) {
      // Keyboard shown
      if (inputMethod !== INPUT_METHOD.KEYBOARD) {
      // Guard condition to prevent unnecessary updates
      onChangeInputMethod(INPUT_METHOD.KEYBOARD);
      }
    } else if (!keyboardVisible && inputMethod !== INPUT_METHOD.CUSTOM) {
      // Keyboard hidden
      // Only handle hide if the keyboard is not visible and the input method is not custom
      if (inputMethod !== INPUT_METHOD.NONE) {
        // Guard condition to prevent unnecessary updates
        onChangeInputMethod(INPUT_METHOD.NONE);
      }
    }

    // TODO: get working animation for keyboard and IME photos
    // Create the animation with different types based on the platform
    //const animationType =
    //  Platform.OS === 'android'
    //    ? LayoutAnimation.Types.easeInEaseOut
    //    : LayoutAnimation.Types.keyboard;

    // Create the animation
    //LayoutAnimation.configureNext({
    //  duration: keyboardAnimationDuration,
    //  create: {
    //    type: animationType,
    //    property: LayoutAnimation.Properties.opacity,
    //  },
    //  update: {
    //    type: animationType,
    //    property: LayoutAnimation.Properties.opacity,
    //  },
    //});

    return () => {
      // Cleanup logic goes here
    };

  }, [keyboardVisible, inputMethod, onChangeInputMethod, keyboardAnimationDuration]);


  // For our outer `View`, we want to choose between rendering at full
  // height (`containerHeight`) or only the height above the keyboard (`contentHeight`). 
  const useContentHeight = keyboardWillShow || inputMethod === INPUT_METHOD.KEYBOARD;

  // Adjust to height of the keyboard
  const containerStyle: ViewStyle = {
    height: useContentHeight ? (contentHeight-50) : containerHeight,
    //marginTop: (keyboardWillShow) ? 50 : 0
  };

  // We want to render our custom input when the user has pressed the camera
  // button (`inputMethod === INPUT_METHOD.CUSTOM`), so long as the keyboard
  // isn't currently appearing 
  const showCustomInput = inputMethod === INPUT_METHOD.CUSTOM && !keyboardWillShow;

  // iPhone related - TODO: test
  // The keyboard is hidden and not transitioning up
  const keyboardIsHidden = inputMethod === INPUT_METHOD.NONE && !keyboardVisible;

  // iPhone related - TODO: test
  // The keyboard is visible and transitioning down
  const keyboardIsHiding = inputMethod === INPUT_METHOD.KEYBOARD && keyboardWillHide;

  // Adjust the height of the custom input method
  const inputStyle: ViewStyle = {
    height: showCustomInput ? keyboardHeight || 325 : 0,
    marginTop: (keyboardIsHidden || keyboardIsHiding) ? 50 : 0
  };

  return (
    <View style={containerStyle}>
      {children}
      <View style={inputStyle}>{renderInputMethodEditor()}</View>
    </View>
  );
};


export default MessagingContainer;
