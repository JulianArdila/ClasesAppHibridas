import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, View, Text, TextInput, AsyncStorage } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ServiceUser from "../../conections/user";

export default class Register extends Component {

  service = new ServiceUser();

  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      is_active: 1,
      phone: null,
      birthday: new Date(),
      mode: 'date',
      show: false,
      cc: null
    }
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
    return true
  }

  redirectToLogin() {
    console.log('redirectToLogin')
    this.props.navigation.navigate('Login')
  }

  async saveData() {
    console.log('saveData')
    console.log(this.state)
    
    var mm = this.state.birthday.getMonth() + 1;
    var dd = this.state.birthday.getDate();
    var yy = this.state.birthday.getFullYear();
    data = await this.service.register({
      password: this.state.password,
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      is_active: this.state.is_active,
      phone: this.state.phone,
      birthday: dd + "/" + mm + "/" + yy,
      cc: this.state.cc,
    })
    data = await this.service.login({
      password: this.state.password,
      username: this.state.username,
    })
    await AsyncStorage.setItem(
      'token',
      data['key']
    );
    console.log(data);
    this.props.navigation.navigate('Login')
  }

  showDateTimePicker() {
    if (this.show) {
      this.setState({
        show: false,
      })
    } else {
      this.setState({
        show: true,
      })
    }
  }

  render() {
    return (
      <View>
        <Text>Registro!</Text>
        <StatusBar style="auto" />
        <ScrollView>
          <View>
            <Text> Password: {this.state.password}</Text>
            <TextInput textContentType="newPassword" value={this.state.password} onChangeText={(val) => this.setState({ password: val })} />
          </View>
          <View>
            <Text> User Name: {this.state.username}</Text>
            <TextInput textContentType="username" value={this.state.username} onChangeText={(val) => this.setState({ username: val })} />
          </View>
          <View>
            <Text> Email: {this.state.email}</Text>
            <TextInput textContentType="emailAddress" value={this.state.email} onChangeText={(val) => this.setState({ email: val })} />
          </View>
          <View>
            <Text> Nombre: {this.state.first_name}</Text>
            <TextInput textContentType="name" value={this.state.first_name} onChangeText={(val) => this.setState({ first_name: val })} />
          </View>
          <View>
            <Text> Apellido: {this.state.last_name}</Text>
            <TextInput textContentType="name" value={this.state.last_name} onChangeText={(val) => this.setState({ last_name: val })} />
          </View>
          <View>
            <Text> Cedula: {this.state.cc}</Text>
            <TextInput textContentType="name" value={this.state.cc} onChangeText={(val) => this.setState({ cc: val })} />
          </View>
          <View>
            <Text> Teléfono: {this.state.phone}</Text>
            <TextInput textContentType="name" value={this.state.phone} onChangeText={(val) => this.setState({ phone: val })} />
          </View>
          <View>
            <Text> Fecha de naciento: </Text>
            <Button title="Selecionar Fecha" onPress={() => this.showDateTimePicker()}></Button>
            {this.state.show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.birthday}
                mode={this.state.mode}
                is24Hour={true}
                display="default"
                onChange={(val) => {
                  this.setState({
                    birthday: val['nativeEvent']['timestamp'],
                    show: false,
                  })
                }}
              />
            )}
          </View>
        </ScrollView>
        <Button title="Guargar" onPress={() => { this.saveData() }} />
        <Button title="Regresar" onPress={() => { this.redirectToLogin() }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
});