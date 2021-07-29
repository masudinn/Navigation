import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Pagedua({navigation}) {
    return (
        <View>
            <Button title='Go Page satu'onPress={()=>navigation.navigate('Satu')}/>
        </View>
    )
}
