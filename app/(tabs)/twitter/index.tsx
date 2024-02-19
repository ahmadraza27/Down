import { View, Text, Button, SafeAreaView, Pressable, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native'
import React, { useState,useRef, useEffect } from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import LottieView from 'lottie-react-native';


import { SET_URL_TWITTER ,INSTALL_TWITTER} from './../../../assets/redux/actions/authActions';
const index = ({SET_URL_TWITTER,INSTALL,url_twitter,loading}:{INSTALL:any,SET_URL_TWITTER:any,url_twitter:string,loading:boolean}) => {
    const [urlss, setUrlss] = useState("")
    // const urlBoxRef = useRef(null);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    
    const textInputRef = useRef(null);
 
   
    const handleScreenPress = () => {
        // Dismiss the keyboard when clicking outside TextInput
        Keyboard.dismiss();
      };
    
    const handleTextInputPress = () => {
        // Focus on TextInput when clicking on it
        if(textInputRef != null) {
        textInputRef.current.focus();
        }
      };
  
    useEffect(() => {
        // Update the height when the screen dimensions change
        const updateHeight = () => {
          setScreenHeight(Dimensions.get('window').height);
          setScreenWidth(Dimensions.get('window').width);
        };
    
        Dimensions.addEventListener('change', updateHeight);
        
        
    
        // Cleanup event listener on component unmount
        return () => {
            
        //   Dimensions.removeEventListener('change', updateHeight);
        };
      }, []); 

    return (
        <SafeAreaView>

            <StatusBar style="dark"  />
            <TouchableWithoutFeedback onPress={handleScreenPress}>
            <View className='flex flex-col relative  w-full h-full items-center justify-start bg-[#000000] overflow-hidden  '>
                <View className='absolute w-full h-full '>
                    <LottieView style={{ display:'flex' , height: screenHeight, width:screenWidth }} source={require('../../../assets/anime/night.json')} autoPlay  />

                </View>

                {true && <Text className='text-[19px] font-bold justify-center m-2  text-gray-100 py-4'>Enter Url Of Any Tiktok Content</Text>}
                <TouchableWithoutFeedback className=' w-screen ' onPress={handleTextInputPress}>
                <TextInput
                    ref={textInputRef}
                    className="border-2 bg-gray-800 w-[90%] m-2 p-2 px-4 rounded-full text-white mx-[5%]"
                    onChangeText={(val)=>{
                        SET_URL_TWITTER(val)
                        setUrlss(val)
                    }}
                    value={url_twitter}
                    multiline
                    
                    
                    
                    
                />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback className=" bg-[#ff0050]  px-4 py-1 rounded-lg my-4 " 
                onPress={()=>{
                    console.log("helllo")
                    console.log(urlss)
                    INSTALL_TWITTER(urlss);

                }}>
                    <Text className="text-white  ">Get</Text>
                </TouchableWithoutFeedback>
                <KeyboardAvoidingView className=''>
                <View className='   mx-auto mt-[10%]  '>

                    <LottieView style={{ display:'flex' , height:300, width:300 }} source={require('../../../assets/anime/loading.json')} autoPlay={loading} loop={loading} />
                </View>
                </KeyboardAvoidingView>

            </View>
            </TouchableWithoutFeedback>
        </SafeAreaView> 
    )
}
const mapStateToProps = (state:{url:{url_twitter:string,loading:boolean}}) => {
    return {
        url_twitter: state.url.url_twitter,
        loading: state.url.loading,
        

    };
};  
export default connect(mapStateToProps,{SET_URL_TWITTER,INSTALL_TWITTER})(index);