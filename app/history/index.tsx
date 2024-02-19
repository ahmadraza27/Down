import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { SET_VIDEO_LIST } from '../../assets/redux/actions/authActions';
import { Connect, connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Camera } from 'expo-camera';
import * as Sharing from 'expo-sharing';
const index = ({SET_VIDEO_LIST,video_list}:any) => {

  async function deleteAllVideosAsync(filePath:string) {
    const permissionGranted = await Camera.requestCameraPermissionsAsync();
  
  if (!permissionGranted) {
    return;
  }
  
    try {
 
        await FileSystem.deleteAsync(filePath, { idempotent: true });
        
      
      
      // Wait for all delete operations to complete
      
  
      
    } catch (error) {
      console.error('Error deleting videos:', error);
    }
  }
  const shareVideo = async (videoFilePath:string,name:string) => {
    try {
      const fileUri = `${FileSystem.documentDirectory}${name}`;

      // Copy the video file to the app's document directory
      await FileSystem.copyAsync({
        from: videoFilePath,
        to: fileUri,
      });

      // Share the video
      await Sharing.shareAsync(fileUri, { mimeType: 'video/mp4', dialogTitle: 'Share this video' });
    } catch (error) {
      console.error('Error sharing video:', error);
      Alert.alert('Error', 'Failed to share video');
    }
  };

  useEffect(() => {
    SET_VIDEO_LIST()
    
  }, []);
  
  return (

    <View className='p-2 '>
      <StatusBar style="dark"  />
      <View className=' flex w-full h-full '>
      <TouchableOpacity onPress={()=>{
    SET_VIDEO_LIST()

      }}>
        <Text>LOAD</Text>
      </TouchableOpacity>
      <ScrollView className=' flex w-full h-screen '>
      {video_list ? (
        
        video_list?.assets?.map((file:any, index:number) => (
          <View key={index}>

            <Video 
            
            className=" w-[90%] mx-auto rounded "
          source={{ uri:file.uri}}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          useNativeControls
          style={{ height: 200 }}
          
          
        />
          <View className="flex felx-col  items-center  rounded-3xl mt-2 mb-4 bg-gray-200">
              <Text className='mx-auto pt-2 pb-4 px-4 uppercase font-medium'>{file.filename.slice(0, -4)}</Text>
              <View className='flex flex-row  w-full justify-around p-1'>
                  <TouchableOpacity onPress={()=>{
                      console.log('yesyesyes')
                      shareVideo(file.uri,file.filename.slice(0, -4));
                    }}>
                                    <Ionicons name="share" size={18} color={`black`} /> 

                    
                  </TouchableOpacity>
              </View>
          </View>

        </View>

        ))
      ) : (
        <Text>Loading...</Text>
      )}
      </ScrollView>
    </View>
    </View>
  )
}
const mapStateToProps = (state:{url:{video_list:any,loading:boolean}}) => {
  return {
      video_list: state.url.video_list,
      loading: state.url.loading,


  };
};  
export default connect(mapStateToProps,{SET_VIDEO_LIST})(index);