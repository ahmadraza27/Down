import { View, Text, Button, StatusBar } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View className='flex flex-row '>
      
        
      <Text>tiktok</Text>
      <Link href="/tiktok/one"  asChild>
                <Button  title='one'></Button>

            </Link>
            
            <Text className= 'text-red-800 text-xl '>
                hi
            </Text>
            
    </View>
  )
}

export default index