import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Block, Text } from '../../../common/components';
import { addEventListener } from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";


export default class Status extends React.Component {
  // Subscribe
  unsubscribe = addEventListener(status => {
  });


  state = {
    isConnected: true, // Assume connected initially
  };

  componentDidMount() {
    // Subscribe to network status updates
    this.unsubscribe = NetInfo.addEventListener(state => {

      // Update the component state with the current network status
      this.setState({ isConnected: state.isConnected });
    });
  }
  componentWillUnmount() {
    // Unsubscribe from network status updates when the component is unmounted
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {

    const { isConnected } = this.state;
    const backgroundColor = isConnected ? 'white' : 'red';

    return (

      <Block>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={isConnected ? 'dark-content' : 'light-content'}
          showHideTransition="fade"
          hidden={false}
        />
        <Block style={styles.messageContainer} pointerEvents={'none'}>
          {!isConnected && (
            <Block style={styles.bubble}>
              <Text style={styles.text}>No network connection</Text>
            </Block>
          )}
        </Block>
      </Block>
    )

  };
};

const styles = StyleSheet.create({
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

