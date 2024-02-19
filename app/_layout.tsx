import React ,{useEffect, useRef, useState} from 'react'
import { router } from 'expo-router';
import { Stack } from 'expo-router'
import { topHeaderStyle } from '../assets/styles'
// import redux provider
import { Provider } from 'react-redux';
import store from '../assets/redux/store';
import { Alert, Text } from 'react-native';
// for icons 
import { Ionicons } from '@expo/vector-icons';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
//https://www.youtube.com/watch?v=Wu1-A890rx8
//https://www.youtube.com/watch?v=EaVG6wVZPyY&t=70s
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const _layout = () => {


  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    Alert.alert(`push tokens are ${expoPushToken}`)
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  



  return (
    
    <Provider store={store}>

    <Stack>
        
        <Stack.Screen name = 'index'  options={{
            
        }}/>
        <Stack.Screen name = '(tabs)'  options={{
                        headerTitle:'TikDown',
                        headerStyle:topHeaderStyle,
                        headerRight(props): React.JSX.Element {
                          
                          return <Ionicons name="videocam-outline" size={20} color={props.tintColor} onPress={
                            ()=>{
                              router.push('/history')
                            }
                          } /> 
                        },

                        


        }}/>
        <Stack.Screen name = 'history'  options={{
            headerShown:false,
            presentation:'transparentModal',
            
        }}/>
    </Stack>
    </Provider>
  )
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
export default _layout