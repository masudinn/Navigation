import React,{useState} from 'react'
import { View, Text } from 'react-native'

const DetailKonten = ({route}) => {

    const {user} = route.params

    return (
        <View>
            <Text style={{textAlign:'center',fontWeight:'bold', fontSize:17, marginBottom:20}}>{user.title}</Text>
            <Text>Body:</Text>
            <Text style={{}}>{user.body}</Text>

        </View>
    )
}

export default DetailKonten
