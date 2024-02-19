import { View, Text, Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const one = () => {
  return (
    <>
    <StatusBar style="light" />
    <View>
      <Text>one</Text>
      <Link href="/"   replace asChild>
                <Button title='main-ontent'></Button>
            </Link>
    </View>
    </>
  )
}

export default one