import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { TextInput } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'

export default function SignUp() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);


  // Signup


  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const Signup=()=>{
    if(email!==""&& password!==""){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  ToastAndroid.show("Account created successfull",ToastAndroid.BOTTOM)
  router.replace('/mytrip')   
})
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      ToastAndroid.show(error.message,ToastAndroid.BOTTOM)
    
    });
  }
  else{
    alert('Enter Email And Password')
  }


  }
  

  return (
    <KeyboardAwareScrollView style={{
      padding: 20,
      marginTop: 60,
      height: '100%',
      backgroundColor: Colors.white
    }}>
      <View
       >
        <TouchableOpacity
          onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text
          style={{

            fontFamily: 'outfit-bold',
            fontSize: 30,
            marginTop: 15
          }}>
          Create New Account
        </Text>


        <View>

          <View
            style={{
              marginTop: 20,
              alignSelf: "center"
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
              onChangeText={(Text) => setEmail(Text)}
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
              onChangeText={(Text) => setPassword(Text)}
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
            onPress={Signup}
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
            onPress={() => router.push('/auth/Sign-in')}
            >
              Sign In
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </KeyboardAwareScrollView>

  )
}