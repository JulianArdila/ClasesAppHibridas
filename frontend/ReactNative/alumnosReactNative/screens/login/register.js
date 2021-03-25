import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Register extends Component {

    constructor(props) {
      super(props);
    }

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
  
    redirectToLogin() {
      console.log('redirectToLogin')
      this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Registro!</Text>
                <StatusBar style="auto" />
                <Button title="Login" onPress={() => {this.redirectToLogin()}}/>
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