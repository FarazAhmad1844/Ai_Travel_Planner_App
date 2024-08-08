import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {  useRouter } from 'expo-router';

const Login = () => {
    const router=useRouter();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View
        >
            <Image
                source={require('./../assets/images/Login.png')}
                style={{
                    height: 500,
                    width: '100%',      

                }} />
            <View
                style={{
                    marginTop: -20,
                    
                    borderTopLeftRadius: 23,
                    borderTopRightRadius: 23,
                    backgroundColor: Colors.white
                    ,height:500

                }}>
                <Text
                    style={{
                        fontSize: 28,
                        fontFamily: 'outfit-bold',
                        textAlign: 'center',
                        marginTop: 40

                    }}>
                    AI TRAVEL PLANNER
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: 'outfit',
                        textAlign: 'center',
                        marginTop: 20,
                        color: 'grey'
                    }}>
                    Discover Your Next Adventure with AI-Powered Precision , Effortlessly Plan, Book, and Explore with AI-driven Insights!
                </Text>

                <TouchableOpacity
                    style={{
                        marginTop: 50,
                        backgroundColor: Colors.primary,
                        height: 50,
                        marginHorizontal: 40,
                        borderRadius: 12,
                        justifyContent: 'center',

                    }}>
                    <Text
                        style={{
                            color: Colors.white,
                            textAlign: 'center',
                            fontFamily: 'outfit',
                            fontSize: 18,


                        }}
                        onPress={() => router.push('/auth/Sign-in')}>   
                        Sign In With Google 
                    </Text>
                </TouchableOpacity>
            </View>


        </View>

        </GestureHandlerRootView>
    )
}

export default Login