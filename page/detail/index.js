import React from 'react'
import { View, Text } from 'react-native'

const Detail = ({navigation, route}) => {

    const {nama} = route.params
    const {jurusan} = route.params

    return (
        <View>
            <Text>Detail</Text>
            <Text>Nama: {nama}</Text>
            <Text>Jurusan: {jurusan}</Text>

        </View>
    )
}

export default Detail
