
import React, { Component } from 'react';
import ServiceStudent from '../../conections/students'
import { View, Button, Text, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default class FormEstudiantes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            codigo: null,
            fecha_nacimiento: '',
            curso: null,
            estatura: null,
            id: null,
            mode: 'date'
        }
    }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState(Platform.OS === 'ios');
    this.setState(currentDate);
  };


    render() {
        return (
            <View>
                <Text>Formulario Creación</Text>
                <div>
                    <label> Nombre: {this.state.nombre}</label>
                    <TextInput textContentType="name" value={this.state.nombre} onChangeText={(val) => this.setState({nombre: val})}/>
                </div>
                <div>
                    <label> Codigo: {this.state.codigo}</label>
                    <TextInput keyboardType="number-pad" value={this.state.codigo} onChangeText={(val) => this.setState({codigo: val})}/>
                </div>
                {/*
                
                <div>
                    <label> Fecha de naciento: {this.state.nombre}</label>
                    <DateTimePicker 
                        testID="dateTimePicker"
                        value={this.state.fecha_nacimiento}
                        mode={this.state.mode}
                        is24Hour={true}
                        display="default"
                        onChange={(val) => this.setState({fecha_nacimiento: val})}

                     value={this.state.nombre} onChangeText={(val) => this.setState({nombre: val})}/>
                </div>
                */}
                <div>
                    <label> Curso: {this.state.curso}</label>
                    <TextInput keyboardType="number-pad" value={this.state.curso} onChangeText={(val) => this.setState({curso: val})}/>
                </div>
                <div>
                    <label> Estatura: {this.state.estatura}</label>
                    <TextInput keyboardType="decimal-pad" value={this.state.estatura} onChangeText={(val) => this.setState({estatura: val})}/>
                </div>
            </View>
        )
    }
}