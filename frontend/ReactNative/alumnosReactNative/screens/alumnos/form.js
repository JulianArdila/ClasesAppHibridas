
import React, { Component } from 'react';
import ServiceStudent from '../../conections/students';
import { Image, View, Dimensions, ScrollView, Button, Text, TextInput, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CameraScreen from '../../components/camera/camera';


const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
    },
    scrollView: {
        marginHorizontal: 5,
        marginVertical: 10,
    },

    select: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: Dimensions.get('window').width * 0.85,
    },
    foto: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        width: Dimensions.get('window').width * 0.85,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.80,
    },
    capture: {
        flex: 0,
        alignSelf: 'center',
        maxHeight: '100%',
        padding: 10,
        marginBottom: 20,
        height: imageHeight,
        width: imageWidth
    },
});
export default class FormEstudiantes extends Component {
    service = new ServiceStudent();

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            codigo: null,
            fecha_nacimiento: new Date(),
            curso: null,
            estatura: null,
            id: null,
            mode: 'date',
            show: false,
            camera_show: false,
            image: ''
        }
    }

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        this.setState(Platform.OS === 'ios');
        this.setState(currentDate);
    };

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
    showCameraScreen() {
        if (this.camera_show) {
            this.setState({
                camera_show: false,
            })
        } else {
            this.setState({
                camera_show: true,
            })
        }
    }

    async saveStudent() {
        var mm = this.state.fecha_nacimiento.getMonth() + 1;
        var dd = this.state.fecha_nacimiento.getDate();
        var yy = this.state.fecha_nacimiento.getFullYear();
        let data = await this.service.saveStudent({
            nombre: this.state.nombre,
            codigo: this.state.codigo,
            fecha_nacimiento: dd + "/" + mm + "/" + yy,
            curso: this.state.curso,
            estatura: this.state.estatura,
        });
        console.log(data);
    }

    saveImage(data) {
        console.log(data);
        this.setState({
            image: 'data:image/png;base64,' + data['base64'],
            camera_show: false,
        });
        console.log(!this.state.image);
        this.forceUpdate();
    }

    render() {
        if (this.state.camera_show) return (<CameraScreen action={(data) => this.saveImage(data)} />);
        return (
            <View>
                <ScrollView>
                    <Text>Formulario Creación</Text>
                    <View>
                        <Text> Nombre: {this.state.nombre}</Text>
                        <TextInput textContentType="name" value={this.state.nombre} onChangeText={(val) => this.setState({ nombre: val })} />
                    </View>
                    <View>
                        <Text> Codigo: {this.state.codigo}</Text>
                        <TextInput keyboardType="number-pad" value={this.state.codigo} onChangeText={(val) => this.setState({ codigo: val })} />
                    </View>
                    <View>
                        <Text> Fecha de naciento: </Text>
                        <Button title="Selecionar Fecha" onPress={() => this.showDateTimePicker()}></Button>
                        {this.state.show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={this.state.fecha_nacimiento}
                                mode={this.state.mode}
                                is24Hour={true}
                                display="default"
                                onChange={(val) => {
                                    this.setState({
                                        fecha_nacimiento: val['nativeEvent']['timestamp'],
                                        show: false,
                                    })
                                }}
                            />
                        )}
                    </View>
                    <View>
                        <Text> Curso: {this.state.curso}</Text>
                        <TextInput keyboardType="number-pad" value={this.state.curso} onChangeText={(val) => this.setState({ curso: val })} />
                    </View>
                    <View>
                        <Text> Estatura: {this.state.estatura}</Text>
                        <TextInput keyboardType="decimal-pad" value={this.state.estatura} onChangeText={(val) => this.setState({ estatura: val })} />
                    </View>

                    <Image
                        style={{
                            width: 200,
                            height: 300,
                            resizeMode: 'contain'
                        }}
                        source={{
                            uri: this.state.image
                        }}
                    />
                    <Button title="Guardar Estudiante" onPress={() => this.saveStudent()}></Button>
                    <Button title="Tomar Foto" onPress={() => this.showCameraScreen()}></Button>

                </ScrollView>

            </View>
        )
    }
}
