import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '@/constants/Colors'
import { TextInput } from 'react-native-paper'

export default function SignIn() {
  const router=useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions(
      {
        headerShown: false
      }
    )
  }, [])
  return (
    <View
      style={{
        padding: 25,
        marginTop: 60
      }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30
        }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 30,
          color: 'grey',
          marginTop: 20
        }}>
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 30
          , color: 'grey',
        }}>
        You have been missed
      </Text>



      {/* TextInput */}



      <View
      style={{ marginTop: 45 }}>
      <TextInput
      style={{
      height:60
      }}
 label={"Full Name"}
 placeholder='Enter Your FullName'
 mode='outlined'
 activeOutlineColor='#000'
>

</TextInput>

<TextInput
 style={{
  height:60,
  marginTop: 10
  }}
 label={"Password"}
 placeholder='Enter Password'
 mode='outlined'
 secureTextEntry={true}
 activeOutlineColor='#000'
>

</TextInput>
      </View>

      {/* Buttons */}

 <TouchableOpacity
                    style={{
                        marginTop: 40,
                 backgroundColor:Colors.primary,
                        height: 50,
                        marginHorizontal: 20,
                        borderRadius: 15,
                        justifyContent: 'center',

                    }}>
                    <Text
                        style={{
                            color: Colors.white,
                            textAlign: 'center',
                            fontFamily: 'outfit',
                            fontSize: 20,


                        }}
                        // onPress={() => router.push('/auth/Sign-in')}
                        >   
                        Sign In 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                 backgroundColor:Colors.White,
                        height: 50,
                        marginHorizontal: 20,
                        borderRadius: 15,
                        justifyContent: 'center',
                        borderColor:Colors.primary,
                        borderWidth:1
                       

                    }}>
                    <Text
                        style={{
                            color: Colors.primary,
                            textAlign: 'center',
                            fontFamily: 'outfit',
                            fontSize: 20,



                        }}
                        onPress={() => router.push('/auth/Sign-up')}
                        >   
                        Create Account
                    </Text>
                </TouchableOpacity>


    </View>
  )
}