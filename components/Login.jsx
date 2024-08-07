import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Login = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Image
                source={require('./../assets/images/Login.png')}
                style={{
                    height: 500,
                    width: 500,      

                }} />
            <View
                style={{
                    marginTop: -20,
                    width: 400,
                    height: 450,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    backgroundColor: Colors.white

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

                <View
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


                        }}>
                        Sign In With Google
                    </Text>
                </View>
            </View>


        </View>


    )
}

export default Login