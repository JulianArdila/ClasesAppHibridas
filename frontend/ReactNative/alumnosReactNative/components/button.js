import React from 'react';
import { StyleSheet, Button, Dimensions, View } from 'react-native';

export default function ButtonCustom(props) {
    let action = props.action;
    let color = props.color;
    let title = props.title;
    return (
        <View style={styles.button}>
            <Button color={color} title={title} onPress={action} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      width: Dimensions.get('window').width * 0.85,
      padding: 8,
      marginTop: 10,
    },
  });