import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const one = () => {
  return (
    <View>
      <Text>one</Text>
      <Link href="/"   replace asChild>
                <Button title='main-ontent'></Button>
            </Link>
    </View>
  )
}

export default one