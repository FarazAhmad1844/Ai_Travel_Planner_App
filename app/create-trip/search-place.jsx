import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchPlace
() {
    const router=useRouter();
    const navigation =useNavigation();
    useEffect(() => {
    navigation.setOptions({
        headerShown: true,
    headerTitle: 'Search Place',
    headerTransparent: true,    
})
},[])
  return (
    <View
    style   ={{
        padding:20,
        paddingTop:75,
        backgroundColor:"white",
        height:'100%'
    }}>
     <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />

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
           onPress={()=>router.push('/create-trip/select-traveler') }
            >
        Start a New Trip
            </Text>
          </TouchableOpacity>


    </View>
  )
}