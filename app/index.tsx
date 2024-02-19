import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
const index = () => {
    const [fontLoaded] = useFonts({
        'PNOVE':require('../assets/fonts/FontsFree-Net-Proxima-Nova-Sbold.otf')
    })
    return (
        <View>
            <StatusBar style="dark"/>
            <Redirect  href='/tiktok'/>
            {/* <Text>main-content</Text>
            <Link href="/tiktok" replace asChild>
                <Button title='tiktok'></Button>
            </Link> */}
            {/* <Link href="/tiktok/one" asChild>
                <Button title='tiktok1'></Button>
            </Link> */}
            {/* <Link href="/twitter" replace asChild>
                <Button title='twitter'></Button>

            </Link>
            <Link href="/history"  asChild>
                <Button title='his'></Button>

            </Link> */}
            {/* <Link href="/twitter/one" asChild>
                <Button title='twitter1'></Button>

            </Link> */}
        </View>
    )
}

export default index