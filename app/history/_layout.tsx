import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerTitle:'History',
        headerTitleStyle:{
          fontFamily:'PNOVE'
        }
      }}/>
    </Stack>
  )
}

export default _layout