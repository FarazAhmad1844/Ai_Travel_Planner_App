import { View, Text, TouchableOpacity, TouchableOpacityBase, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Button, TextInput } from 'react-native-paper'

export default function SignUp() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View
      style={{
        padding: 25,
        marginTop: 40,
        height: '100%',
        backgroundColor: Colors.white
      }}>
      <Text
        style={{

          fontFamily: 'outfit-bold',
          fontSize: 30
        }}>
        Create New Account
      </Text>


      <View>

        <View
        style={{
          marginTop: 20,
         alignSelf:"center"
        }}>

        <Image
                source={require('./../../../assets/images/signup.png')}
                style={{
                    height: 200,
                    width: 200,    

                }} />
        </View>
        <View
          style={{
            marginTop: 3
          }}>
          <TextInput
            style={{
              height: 50,
              backgroundColor: 'white'
            }}
            label={"Full Name"}
            placeholder='Enter Your FullName'
            mode='outlined'
            activeOutlineColor='#000'
          >

          </TextInput>
          <TextInput
            style={{
              height: 50,
              marginTop: 10,
              backgroundColor: 'white'
            }}
            label={"Email"}
            placeholder='Enter Your Email'
            mode='outlined'
            activeOutlineColor='#000'
          >

          </TextInput>
          <TextInput
            style={{
              height: 50,
              marginTop: 10,

              backgroundColor: 'white'
            }}
            label={"Password"}
            placeholder='Enter Password'
            mode='outlined'
            secureTextEntry={true}
            activeOutlineColor='#000'
          >

          </TextInput>
        </View>

        <View>

        </View>



        <TouchableOpacity
          style={{
            marginTop: 40,
            backgroundColor: Colors.primary,
            height: 50,
            marginHorizontal: 5,
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
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: Colors.White,
            height: 50,
            marginHorizontal: 5,
            borderRadius: 15,
            justifyContent: 'center',
            borderColor: Colors.primary,
            borderWidth: 1


          }}>
          <Text
            style={{
              color: Colors.primary,
              textAlign: 'center',
              fontFamily: 'outfit',
              fontSize: 20,



            }}
          // onPress={() => router.push('/auth/Sign-up')}
          >
            Sign In
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}