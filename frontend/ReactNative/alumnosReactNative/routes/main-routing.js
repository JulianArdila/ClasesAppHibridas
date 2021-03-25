import React from 'react';
import Home from '../screens/home';
import Estudiantes from '../screens/alumnos/alumnos';
import EstudiantesStack from './student-routing'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export default function MainTabs() {
    let options = {
        tabBarLabel: 'Updates',
        tabBarBadge: 3,
      }
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Estudiantes" options={options} component={Estudiantes} />
            <Tabs.Screen name="Alumnos" component={EstudiantesStack} />
        </Tabs.Navigator>
    );
}