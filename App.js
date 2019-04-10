/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PixelRatio} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View>
        <Text>123</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    marginLeft: 5,
    marginRight:5,
    height:5,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#FF0067',
  },
  item: {
    flex:1,
    borderWidth:2,
    height:80
  },
  center: {
    justifyContent:'center',
    alignItems: 'center',
  },
  flex: {
    flex:1,
    backgroundColor: '#FF0067',
  },
  font: {
    color:'#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lineLeftRight: {
    borderLeftWidth: 1/PixelRatio.get(),
    borderRightWidth: 1/PixelRatio.get(),
    borderColor: '#fff',
  },
  lineCenter: {
    borderBottomWidth:1/PixelRatio.get(),
    borderColor: '#fff',
  }
});
