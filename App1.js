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
  PixelRatio,
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
        <View style={styles.flex}>
            <View style={styles.container}>
                <View style={[styles.item,styles.center]}>
                    <Text style={styles.font}>酒店</Text>
                </View>
                <View style={[styles.item,styles.lineLsftRight]}>
                    <View style={[styles.center,styles.flex,styles.lineCenter]}>
                        <Text style={styles.font}>海外酒店</Text>
                    </View>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.font}>特惠酒店</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={[styles.flex,styles.center,styles.lineCenter]}>
                        <Text style={styles.font}>团购</Text>
                    </View>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.font}>客栈/公寓</Text>
                    </View>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        matginTop: 200,
        marginLeft: 5,
        matrginRight:5,
        height: 84,
        flexDirection: 'row',
        borderRadius:5,
        padding:2,
        backgroundColor: '#FF0067',
    },
    item:{
        flex: 1,
        height: 80,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lineLeftRight: {
        borderLeftWidth: 1/PixelRatio.get(),
        borderRightWidth: 1/PixelRatio.get(),
        borderColor: '#fff',
    },
    lineCenter:{
        borderBottomWidth: 1/PixelRatio.get(),
        borderColor:'#fff',
    },
});

// AppRegistry.registerComponent('App', () => App)