import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
const _layout = () => {
  return (
    <>
            

    <Tabs screenOptions={{
        headerShown:false,
        tabBarStyle:{

          borderColor:'black',
          borderTopColor:'black',
          backgroundColor:"black",
        },
      
        tabBarHideOnKeyboard:true,
        tabBarIconStyle:{
          color:'#00f2ea'
          
        },
        tabBarLabelStyle:{
          color:'#00f2ea'
        }

       
    }}>
        <Tabs.Screen name ="tiktok" options={{
            tabBarIcon({color,size}) {
                
                return <Ionicons name="musical-note-outline" size={size} color='#00f2ea' /> 
            },
        }}
        />
        <Tabs.Screen name ="twitter" options={{
            tabBarIcon({color,size}) {
                
              return <Ionicons name="ios-logo-twitter" size={size} color='#00f2ea' /> 
          },
        }}
        />
        <Tabs.Screen name ="instagram" options={{
            tabBarIcon({color,size}) {
                
              return <Ionicons name="md-logo-instagram" size={size} color='#00f2ea' /> 
          },
        }}
        />
    </Tabs>
    </>
  )
}

export default _layout