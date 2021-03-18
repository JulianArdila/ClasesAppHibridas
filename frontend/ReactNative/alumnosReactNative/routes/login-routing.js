import React from 'react';
import Login from '../screens/login/login';
import Registro from '../screens/login/register';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro} />
        </Stack.Navigator>
    );
}