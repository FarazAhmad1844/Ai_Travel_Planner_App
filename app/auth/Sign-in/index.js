import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { TextInput } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';
import { useEffect, useState } from 'react';
export default function SignIn() {
  const router=useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  useEffect(() => {
    navigation.setOptions(
      {
        headerShown: false
      }
    )
  }, []);
 
  
  const login=()=>{
    if(email!==""&& password!==""){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    ToastAndroid.show("WELCOME",ToastAndroid.BOTTOM)
    router.replace('/mytrip')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    ToastAndroid.show(error.message,ToastAndroid.BOTTOM)
  });
  }else{
    ToastAndroid.show("Enter Email and Password",ToastAndroid.BOTTOM)
  }
}
  return (
    <KeyboardAwareScrollView
    style={{
        padding: 20,
        marginTop: 60,
        height: '100%',
        backgroundColor: Colors.white
      }}>
    <View
      >
        <TouchableOpacity
        onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          marginTop:15
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
 onChangeText={(Text) => setEmail(Text)}
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
 onChangeText={(Text) => setPassword(Text)}
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

                    }}
                    >
                    <Text
                        style={{
                            color: Colors.white,
                            textAlign: 'center',
                            fontFamily: 'outfit',
                            fontSize: 20,


                        }}

                       
                       onPress={login} >   
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
    </KeyboardAwareScrollView>
  )
}