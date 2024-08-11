import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/Mytrips.jsx/StartNewTripCard';
export default function mytrip() {


const [userTrips,setUserTrip]=useState(null);

  return (
    <View
    style={{
        padding:25,
        paddingTop:55,
        backgroundColor:"white",
        height:'100%'
    }}>
        <View
        style={{
            display:'flex',
            flexDirection:'row',
            alignContent:'center',
            justifyContent:'space-between'
        }}>
      <Text
      style={{
        fontFamily:"outfit-bold",
        fontSize:35

      }}>MyTrip</Text>
      <Ionicons name="add-circle" size={40} color="black" />
    </View>
    
<StartNewTripCard/>
    </View>
  )
}