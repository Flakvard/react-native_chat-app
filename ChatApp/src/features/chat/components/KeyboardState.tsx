/*
  KeyboardState.tsx:
  This component will keep track of the keyboard’s visibility, height, etc
*/
import React, { ReactNode, useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';

interface KeyboardStateProps {
  layout: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  children: (state: KeyboardState) => ReactNode;
}

interface KeyboardState {
  containerHeight: number;
  contentHeight: number;
  keyboardHeight: number;
  keyboardVisible: boolean;
  keyboardWillShow: boolean; // only relevant for iOS - The keyboard is going to appear
  keyboardWillHide: boolean; // only relevant for iOS - The keyboard is going to disappear
  keyboardAnimationDuration: number;
}

const INITIAL_ANIMATION_DURATION = 250;

const KeyboardState: React.FC<KeyboardStateProps> = ({ layout, children }) => {
  const [state, setState] = useState<KeyboardState>({
    containerHeight: layout.height,
    contentHeight: layout.height, // The height available for our messaging content.
    keyboardHeight: 0, // The height of the keyboard.
    keyboardVisible: false, // Is the keyboard fully visible or fully hidden?
    keyboardWillShow: false, // only relevant for iOS - The keyboard is going to appear
    keyboardWillHide: false, // only relevant for iOS - The keyboard is going to disappear
    keyboardAnimationDuration: INITIAL_ANIMATION_DURATION, // 250 ms
  });

  const keyboardWillShow = (event: KeyboardEvent) => {
    setState((prev) => ({
      ...prev,
      keyboardWillShow: true,
    }));
    measure(event);
  };

  const keyboardDidShow = (event: KeyboardEvent) => {
    setState((prev) => ({
      ...prev,
      keyboardWillShow: false,
      keyboardVisible: true,
    }));
    measure(event);
  };

  const keyboardDidHide = (event: KeyboardEvent) => {
    setState((prev) => ({
    ...prev,
    keyboardWillHide: false,
    keyboardVisible: false,
    }));
    measure(event);
  };

  const keyboardWillHide = (event: KeyboardEvent) => {
    setState((prev) => ({
      ...prev,
      keyboardWillHide: true,
    }));
    measure(event);
  };

  const measure = (event: KeyboardEvent) => {
    const { y } = layout;
    const {
      endCoordinates: { height, screenY },
      duration = INITIAL_ANIMATION_DURATION,
    } = event;

    setState((prev) => ({
      ...prev,
      contentHeight: screenY - y, // sceenY = top coordinate of the keyboard
      keyboardHeight: height,     // height of the keyboard
      keyboardAnimationDuration: duration,
    }));
  };

  useEffect(() => {
    const subscriptions = [
      // only relevant for iphone
      Keyboard.addListener('keyboardWillShow',keyboardWillShow),
      Keyboard.addListener('keyboardWillHide',keyboardWillHide),      
      // Relevant for iphone and android
      Keyboard.addListener('keyboardDidHide', keyboardDidHide),
      Keyboard.addListener('keyboardDidShow', keyboardDidShow),
    ];

    return () => {
      subscriptions.forEach((subscription) => subscription.remove());
    };
  }, []);

  return <>{children(state)}</>;
};

export default KeyboardState;
