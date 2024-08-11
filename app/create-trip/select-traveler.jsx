import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import OptionCard from '../../components/CreateTrip/OptionCard'

export default function SelectTraveler() {
 
 const navigation= useNavigation()
 navigation.setOptions({
  headerShown: true,
  headerTransparent: true,
  headerTitle:'',

 })

 const list = [
    {
      id:1,
      title: 'Just Me',
      desc: 'A Sole Traveles In Exploration',
      icon: '🧑🏻‍✈️',
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
      icon: '👨🏻‍👩🏻‍👧🏻‍👧🏻',
      people:"3 To 5 People"
    },
    {
      id:4,
      title: 'Friends',
      desc: 'A Bunch of Thrill-Seekes',
      icon: '',
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
  <View>
    <OptionCard option={item}/>
    </View>
 )} 
  />
    </View>
  )
}