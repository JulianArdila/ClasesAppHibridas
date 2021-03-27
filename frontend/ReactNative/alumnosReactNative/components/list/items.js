import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';

const style = StyleSheet.create({
    item: {
        // Funciona en Expo CLI, pero no en React Native CLI
        //width: '-webkit-fill-available',
        backgroundColor: 'rgb(213, 213, 213)',
        padding: 9
    },
    title: {
    },
    subtitle: {
    }
});

export function ItemComponent(props) {
    var title = props.title;
    var subtitle = props.subtitle;

    return (
        <View style={style.item}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.subtitle}>ID: {subtitle}</Text>
        </View>
    )
} 

