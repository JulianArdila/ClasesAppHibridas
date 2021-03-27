import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import ServiceStudent from '../../conections/students';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { ItemComponent } from '../../components/list/items';

export default class Estudiantes extends Component {
    service = new ServiceStudent();
    data = [];
    next = true;
    pg = 1;
    constructor(props) {
        super(props);
        this.loadData();
        
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
  
    render() {
        const Item = ({ title }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{title}</Text>
            </View>
          );
        const renderItem = ({ item }) => <Item title={item.title} />;
        /*
        let Content = () => ( 
            <View>
                <Text>No Hay Información</Text>
            </View>
        );
        if (this.data) {
            Content = () => (
                <SafeAreaView>
                    <FlatList 
                            keyExtractor={(item) => item.id}
                            data={this.data['results']}
                            renderItem={({ item }) => (
                            <Text style={styles.item}>{item.nombre}</Text>
                            )}
                            />
                </SafeAreaView>
            )
        }
        return (<Content />);
        */

        /*
        return (
            <div>
                
            {this.data != undefined && (
                <SafeAreaView>
                    <FlatList 
                            keyExtractor={(item) => item.id}
                            data={this.data['results']}
                            renderItem={({ item }) => (
                            <Text style={styles.item}>{item.nombre}</Text>
                            )}
                            />
                </SafeAreaView>
                ) 
            }
            </div>
        );
        */

        if (this.data){
            return (
                <SafeAreaView style={styles.container}>
                    <Button title="Refresh" onPress={() => this.refresh()}></Button>
                    <Button title="Crear Alumno" onPress={() => this.props.navigation.navigate('FormEstudiantes')}></Button>
                    <FlatList 
                            keyExtractor={(item) => item.id.toString()}
                            data={this.data}
                            renderItem={({ item }) => (
                                <ItemComponent key={item.id.toString()} title={item.nombre} subtitle={item.id} />
                            )}
                            onEndReachedThreshold={10}
                            onEndReached={
                                (data) => {
                                    console.log(data);
                                    this.loadData();
                                }
                            }
                            />
                </SafeAreaView>
            );
        }
        return (
            <View>
                <Text>No Hay Información</Text>
            </View>
        );
    }

    refresh() {
        this.pg = 1;
        this.data = [];
        this.next = true;
        this.loadData();
    }

    async loadData() {
        if(this.next) {
            let data = await this.service.getListStudents({
                page: this.pg,
                camp1: 'valor1',
                camp2: 'valor2',
            });
            console.log(data)
            console.log(this.data)
            this.data = this.data.concat(data['results'])
            console.log(this.data)
            if(!data.next) this.next = false;
            this.forceUpdate();
            this.pg++;
        }
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        color: 'white'

    }
});