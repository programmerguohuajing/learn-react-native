/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';

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
      <View style={styles.container}>
        <View style={[styles.item,styles.center]}>
            <Text>酒店</Text>
        </View>
        <View style={styles.item}>
            <View style={[styles.center,styles.flex]}>
                <Text>海外酒店</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
                <Text>特惠酒店</Text>
            </View>
        </View>
        <View style={styles.item}>
            <View style={[styles.flex,styles.center]}>
                <Text>团购</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
                <Text>客栈/公寓</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        borderColor:'red',
        flexDirection:'row'
    },
    item:{
        flex: 1,
        height: 80,
        borderColor: 'blue',
        borderWidth: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    }
});