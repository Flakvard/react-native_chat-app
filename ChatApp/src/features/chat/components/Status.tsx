import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Block, Text } from '../../../common/components';


const STYLES = ['default', 'dark-content', 'light-content'] as const;

const state = {
info: null,
};

//const { info } = state.info;
// const isConnected = info !== 'none';
const isConnected = false;
const backgroundColor = isConnected ? 'white' : 'red';

const Status = () => {


  const statusBar = (
    <StatusBar
      animated={true}
      backgroundColor={backgroundColor}
      barStyle={isConnected ? 'dark-content' : 'light-content'}
      showHideTransition="fade"
      hidden={false}
    />
    );

  const messageContainer = (
    <Block style={styles.messageContainer} pointerEvents={'none'}>
    {statusBar}
    {!isConnected && (
    <Block style={styles.bubble}>
    <Text style={styles.text}>No network connection</Text>
    </Block>
    )}
    </Block>
  );

  return (
    <SafeAreaView style={styles.container}>
      {messageContainer}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  messageContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    right: 0,
    left: 0,
    height: 80,
    alignItems: 'center',
    },
    bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'red',
    },
    text: {
    color: 'white',
    },
});

export default Status;
