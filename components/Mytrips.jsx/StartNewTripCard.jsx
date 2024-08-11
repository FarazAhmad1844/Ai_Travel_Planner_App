import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {
  const router =useRouter();
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:"flex",
        alignItems:'center',
        gap:19
    }}>
      <Ionicons name="location" size={30} color="black" />
      <Text
      style={{
        fontSize:25,
        fontFamily:'outfit-bold'
      }}>
        No Trips Planned yet  
      </Text>
      <Text
      style={{
        fontSize:20,
        fontFamily:'outfit',
      textAlign:'center',
      color:'grey'

      }}>
     Looks like its time to plan a new travel experience! Get Started Below 
      </Text>
      <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor:'#000',
              height: 50,
              width:'50%',
              marginHorizontal: 5,
              borderRadius: 15,
              justifyContent: 'center',

            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'outfit-medium',
                fontSize: 15,


              }}
           onPress={()=>router.push('/create-trip/search-place') }
            >
        Start a New Trip
            </Text>
          </TouchableOpacity>
    </View>
  )
}