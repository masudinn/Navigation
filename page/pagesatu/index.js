import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Pagesatu({navigation}) {

    return (
        <View>
            <Button title="Page Dua" onPress={()=> navigation.navigate('Dua')}/>
            <View style={{margin:5}}/>
            <Button color='red' title="Page Konten" onPress={()=>navigation.navigate('Konten')}/>
        </View>
    )
}
