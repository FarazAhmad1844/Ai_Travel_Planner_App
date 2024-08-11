import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({ option }) {
    return (
        <View 
            style={{
                padding: 15,
                display: 'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                backgroundColor: 'lightgrey'
                ,borderRadius:15,
                marginTop:20,
                height:120
            }}>
            <View>
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 20,
                        textAlign: 'left'
                    }}>{option.title}</Text>
                     <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 15,
                        textAlign: 'left',
                        color:'grey'
                    }}>{option.desc}</Text>
            </View>
            <View>   
             <Text
                style={{
                     fontSize: 40,
                        textAlign: 'left'
                }}>{option.icon}</Text>
            </View>
         


        </View >
    )
}