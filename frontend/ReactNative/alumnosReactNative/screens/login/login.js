import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import ButtonCustom from '../../components/button'
import { StyleSheet, Dimensions, View, TextInput, AsyncStorage } from 'react-native';

import ServiceUser from '../../conections/user';

export default class Login extends Component {
  username = "";
  password = "";
  service = new ServiceUser();

  constructor(props) {
    super(props);
    AsyncStorage.getItem('token').then(
      data => {

        if (data) this.props.navigation.replace('MainWorkFlow');
      }
    );
    // Funciona en Expo CLI, pero no en React Native CLI
    //if (window.localStorage['token']) this.props.navigation.replace('MainWorkFlow');
    this.button_list = [
      {
        id: 1,
        color: "rgb(16, 0, 255)",
        title: "Log in",
        action: () => this.Login(),
      },
      {
        id: 2,
        color: "grey",
        title: "Registro",
        action: () => this.redirectToRegister(),
      }
    ];

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

  redirectToRegister() {
    console.log('redirectToRegister')
    this.props.navigation.navigate('Registro')
  }

  Login() {
    console.log(this['username'])
    console.log(this.password)
    console.log('Login')
    this.service.login({
      password: this.password,
      username: this.username
    }).then(async (data) => {
      if (data['key']) {
        await AsyncStorage.setItem(
          'token',
          data['key']
        );
        // Funciona en Expo CLI, pero no en React Native CLI
        //window.localStorage['token'] = data['key'];
        console.log(data)
        this.props.navigation.replace('MainWorkFlow');
      }
    }).catch((err) => {
      console.error(err)
    });
  }

  modifyVar(key, value) {
    this[key] = value;
    this.forceUpdate();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.username} onChangeText={(val) => this.modifyVar('username', val)}
        textContentType="username" placeholder="Nombre de Usuario" />

        <TextInput style={styles.input} value={this.password} onChangeText={(val) => this.modifyVar('password', val)}
         textContentType="password" secureTextEntry={true} placeholder="Contraseña" />
        {/* 
        <ButtonCustom action={() => this.redirectToRegister()} title="Log in" color="rgb(16, 0, 255)"/>
        
        <ButtonCustom action={() => this.redirectToRegister()} title="Resgitro" color="grey"/>
        */}
        {this.button_list.map((data) => <ButtonCustom key={data.id} action={data.action} title={data.title} color={data.color} />)}
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: Dimensions.get('window').width * 0.85,
  },
  button: {
    width: Dimensions.get('window').width * 0.85,
    padding: 8,
    marginTop: 10,
  },
});