import React from 'react';
import LoginStack from './login-routing'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function WorkFlow() {
    const optionsScreen = {
        'headerShown': false
    }
    return (
        <Stack.Navigator>
            <Stack.Screen options={optionsScreen} name="LoginWorkFlow" component={LoginStack}></Stack.Screen>
        </Stack.Navigator>
    );
}