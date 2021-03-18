import React from 'react';
import { StyleSheet } from 'react-native';

export default function ButtonCustom(props) {
    console.log(props)
    let action = () => {
        console.log(`Hola ${props.nombre}`)
    }
    return (
        <button onClick={action}>Click me</button>
    );
}
