import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Pagesatu from '../pagesatu'
import Pagedua from '../pagedua'
import Detail from '../detail';
import DetailKonten from '../detail_konten';
import Konten from '../konten';

export default function Root() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Satu" component={Pagesatu} />
            <Stack.Screen name="Dua" component={Pagedua} />
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Konten" component={Konten}/>
            <Stack.Screen name="DetailKonten" component={DetailKonten}/>
        </Stack.Navigator>
    )
}
