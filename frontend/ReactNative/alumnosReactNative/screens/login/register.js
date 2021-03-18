import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Register extends Component {
    componentDidMount() {
      console.log('componentDidMount')
    }
  
    componentDidUpdate() {
      console.log('componentDidUpdate')
    }
  
    componentDidUpdate() {
      console.log('componentDidUpdate')
    }
  
    shouldComponentUpdate() {
      console.log('shouldComponentUpdate')
    }
  
    render() {
        return (
            <View style={styles.container}>
                <Text>Registro!</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});