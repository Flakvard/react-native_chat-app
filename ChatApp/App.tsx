/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet,Text,View} from 'react-native';

import {Block} from './src/common/components'

function App() {

  return (
        <Block flex={3} color="#fff" align="center" justify="center">
            <Text>Hello world</Text>
            <StatusBar barStyle={"dark-content"}/>
              <Block row color="blue">
              </Block>
        </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
