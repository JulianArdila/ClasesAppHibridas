import React from 'react';
import Estudiantes from '../screens/alumnos/alumnos';
import FormEstudiantes from "../screens/alumnos/form";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function EstudiantesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Estudiantes" component={Estudiantes} />
            <Stack.Screen name="FormEstudiantes" component={FormEstudiantes} />
        </Stack.Navigator>
    );
}