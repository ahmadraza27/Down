import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { midHeaderStyle } from '../../../assets/styles'

const _layout = () => {
  return (
    <Stack>
       <Stack.Screen name="index" options={{
            headerTitle:'TWITTER',
            headerStyle:midHeaderStyle,
        }}
        />
        <Stack.Screen name="one" options={{
            headerTitle:'TWITTER 2'
        }}
        />
    </Stack>
  )
}

export default _layout