import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function LayOut() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}>
            <Tabs.Screen name='mytrip'
                options={{
                    tabBarActiveTintColor: "#000",
                    tabBarIcon: ({ color, size }) => <Ionicons name='location-sharp' color={color} size={size} />,
                    tabBarLabel: 'My Trip'
                }} />
            <Tabs.Screen name='discover'
                options={{
                    tabBarActiveTintColor: "#000",
                    tabBarIcon: ({ color, size }) => <Ionicons name='globe-sharp' color={color} size={size} />,
                    tabBarLabel: 'Discover'
                }} />
            <Tabs.Screen name='profile'
                options={{
                    tabBarActiveTintColor: "#000",
                    tabBarIcon: ({ color, size }) => <Ionicons name='people-circle' color={color} size={size} />,
                    tabBarLabel: 'Profile'
                }} />

        </Tabs>
    )
}