import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Pagesatu from '../pagesatu'
import Pagedua from '../pagedua'

export default function Root() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Satu" component={Pagesatu} />
            <Stack.Screen name="Dua" component={Pagedua} />
        </Stack.Navigator>
    )
}
