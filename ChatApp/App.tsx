/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet} from 'react-native';

import {Block, Button, Text} from './src/common/components'

function App() {

  return (
        <Block flex={3} color="#fff" align="center" justify="center">
            <StatusBar barStyle={"dark-content"}/>
            <Text h1>Header 1</Text>
            <Text h2>Header 2</Text>
            <Text h3>Header 3</Text>
            <Text h4>Header 4</Text>
            <Text p>Paragraph</Text>
            <Text>Text</Text>
              <Block row>
                <Text>Hello world</Text>
              </Block>
              <Block style={{marginTop: 12, }}>
                <Text h3>Button</Text>
                <Button>
                  <Text>button</Text>
                </Button>
                <Button color="purple" radius={16} paddingVertical={6} paddingHorizontal={20}>
                  <Text align="center" color="white">button</Text>
                </Button>
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
    textAlign: "center",
  },
});

export default App;
