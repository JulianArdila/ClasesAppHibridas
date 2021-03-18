import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import WorkFlow from './routes/routing';
import { NavigationContainer } from '@react-navigation/native';
// import ButtonCustom from './components/button';

export default class App extends Component {

  /*
  render() {
    const VariableButton = ButtonCustom;
    return (
      <View style={styles.container}>
        <VariableButton nombre="Camilo"/>
        <VariableButton nombre="Diana"/>
        <Text><h1>Hola Mundo! 2</h1></Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  */
  render() {
    return (
      <NavigationContainer>
        <WorkFlow />
      </NavigationContainer>
    );
  }
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


}
/*

export default function App() {
  let bienvenida = "Hola Mundo! 2";
  
  return (
    <View style={styles.container}>
      <Text><h1>{bienvenida}</h1></Text>
      <StatusBar style="auto" />
    </View>
  );
}

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
