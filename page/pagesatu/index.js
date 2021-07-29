import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Pagesatu({navigation}) {
    return (
        <View>
            <Button title="Go to page 2" onPress={()=> navigation.navigate('Dua')}/>
        </View>
    )
}
