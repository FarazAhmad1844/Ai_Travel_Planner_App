import { View, Text, FlatList, TouchableOpacityBase } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { TouchableOpacity } from 'react-native'

export default function SelectTraveler() {
 const router=useRouter();
 const navigation= useNavigation()
 navigation.setOptions({
  headerShown: true,
  headerTransparent: true,
  headerTitle:'',

 })
 const [selectTraveler,setSelectTraveler]=useState(null);
//  const [tripdata,setTripData]=useContext(CreateTripContext);
// useEffect(() => {
//   setTripData(...tripdata,{
//     traveler:SelectTraveler
//   })
// },[selectTraveler])

 const list = [
    {
      id:1,
      title: 'Just Me',
      desc: 'A Sole Traveles In Exploration',
      icon: '🧑🏻',
      people:"1"
    },
    { id:2,
      title: 'Couple',
      desc: 'Two Travels In Tandem',
      icon: '💑🏻',
      people:"2 People"
    },
    {
      id:3,
      title: 'Family',
      desc: 'A  Group Of Fun Loving Adventurers',
      icon: '🏡',
      people:"3 To 5 People"
    },
    {
      id:4,
      title: 'Friends',
      desc: 'A Bunch of Thrill-Seekes',
      icon: '🚢',
      people:"5 to 10 People"
    }
 
  ];
  return (

    <View
    style={{
      padding:20,
      paddingTop:80,
      backgroundColor:"white",  
      height:'100%'
    }}>
      <Text
      style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20
      }}>Who's Traveling</Text>

      <View>
      <Text
      style={{
        fontSize:23,
        fontFamily:'outfit-bold',
        marginTop:20
      }}>Choose Your Travels</Text>
        
      </View>
  <FlatList
  data={list}
 renderItem={({item,index})=>(
  <TouchableOpacity
  onPress={()=>setSelectTraveler(item)}>
    <OptionCard option={item} selectTraveler={selectTraveler}/>
    </TouchableOpacity>
 )} 
  />
  <View>
    <TouchableOpacity
    style={{
      marginTop:0,
      padding:15,
      backgroundColor:'#000',
      borderRadius:15,
      marginHorizontal:15,
      marginBottom:50

    }}
    onPress={()=>router.push('/create-trip/select-dates')}>
      <Text
      style ={{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontFamily:'outfit-medium'
      }}>
Continue
    </Text>

    </TouchableOpacity>
  </View>
    </View>
  )
}