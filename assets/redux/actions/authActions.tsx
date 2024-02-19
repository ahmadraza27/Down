// import axios from "axios";
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios';
import { Alert } from 'react-native';

const data = {"code": 0, "data": {"anchors": null, "anchors_extras": "", "author": {"avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310048624166535211~c5_300x300.jpeg?lk3s=45126217&x-expires=1703955600&x-signature=ItzCM5H3F%2F3g2RDzskO93GKFEtg%3D", "id": "107955", "nickname": "TikTok", "unique_id": "tiktok"}, "aweme_id": "v12044gd0000cafum43c77u65l2kj0jg", "collect_count": 651, "comment_count": 1255, "commerce_info": {"adv_promotable": false, "auction_ad_invited": false, "branded_content_type": 0, "with_comment_filter_words": false}, "commercial_video_info": "", "cover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/4f940b4be2814fc6993f7807ecefcd16_1654647989?lk3s=d05b14bd&x-expires=1703955600&x-signature=R56tCxDbOAZXc8qT8fz40XPPZjA%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=202312291708311E3C22C312C177A65CF9", "create_time": 1654647988, "digg_count": 21119, "download_count": 95, "duration": 22, "hd_size": 1957413, "hdplay": "https://v16m-default.akamaized.net/3f9b12dcc464daaa069b5f9eb6a2245c/658f5187/video/tos/maliva/tos-maliva-ve-0068c799-us/4c875ae630294556bd3dd3810fd55c56/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C1&cv=1&br=1366&bt=683&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12mzByR3wUX73yKMeF~O5&mime_type=video_mp4&qs=13&rc=ajNubzk6Zjd4ZDMzZzczNEBpajNubzk6Zjd4ZDMzZzczNEBnZy8ycjQwamNgLS1kMS9zYSNnZy8ycjQwamNgLS1kMS9zcw%3D%3D&l=20231229170831A717F7A5448708A2AF9C&btag=e00048000", "id": "7106658991907802411", "is_ad": false, "music": "https://sf16-ies-music-va.tiktokcdn.com/obj/ies-music-ttp-dup-us/7106658973058599722.mp3", "music_info": {"album": "", "author": "TikTok", "cover": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310048624166535211~c5_1080x1080.jpeg?lk3s=45126217&x-expires=1703955600&x-signature=y4YB4mTG7X7xest15XURttvwmr8%3D", "duration": 22, "id": "7106658961021225774", "original": true, "play": "https://sf16-ies-music-va.tiktokcdn.com/obj/ies-music-ttp-dup-us/7106658973058599722.mp3", "title": "original sound - tiktok"}, "origin_cover": "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/8d1f933115514abbab4e3ce6a4d2b836_1654647988~tplv-tiktokx-360p.jpeg?lk3s=d05b14bd&x-expires=1703955600&x-signature=%2FTGfp4vLYazBplpYJSiC%2F8BWF2g%3D&s=AWEME_DETAIL&se=false&sh=&sc=feed_cover&l=202312291708311E3C22C312C177A65CF9", "play": "https://v16m-default.akamaized.net/5822d2478fc4c269075944c66f69039c/658f5186/video/tos/maliva/tos-maliva-ve-0068c799-us/4c875ae630294556bd3dd3810fd55c56/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1366&bt=683&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12MzByR3wUX73yKMeF~O5&mime_type=video_mp4&qs=0&rc=aTU6NWQ5Z2lmaWU4N2hkOEBpajNubzk6Zjd4ZDMzZzczNEAvYl8wMzQxNV8xNDZjLjFiYSNnZy8ycjQwamNgLS1kMS9zcw%3D%3D&l=202312291708311E3C22C312C177A65CF9&btag=e00088000", "play_count": 634307, "region": "US", "share_count": 195, "size": 1957413, "title": "which biome style are you? 🛶🐠🕯🏔 #Minecraft", "wm_size": 2383250, "wmplay": "https://v16m-default.akamaized.net/e9d07d99706067bf042e7d44993d913c/658f5186/video/tos/maliva/tos-maliva-ve-0068c799-us/02cb5475032c4631bf85b05d0822b05f/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1418&bt=709&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12MzByR3wUX73yKMeF~O5&mime_type=video_mp4&qs=0&rc=OGg7NzY3OzVmZ2g6OGQ2OUBpajNubzk6Zjd4ZDMzZzczNEBiNjQwMl8uXi4xMjAvNTEvYSNnZy8ycjQwamNgLS1kMS9zcw%3D%3D&l=202312291708311E3C22C312C177A65CF9&btag=e00088000"}, "msg": "success", "processed_time": 0.3106}
const dat1={
    "tweetResult": {
      "result": {
        "__typename": "Tweet",
        "core": {
          "user_results": {
            "result": {
              "__typename": "User",
              "affiliates_highlighted_label": {},
              "id": "VXNlcjoyNzU1NjQ0OTM=",
              "is_blue_verified": true,
              "legacy": {
                "created_at": "Fri Apr 01 14:49:59 +0000 2011",
                "default_profile": true,
                "default_profile_image": false,
                "description": "Son of Pakistan, father to 2 princesses, honored servant of the Pakistan Cricket team (@ + 147km/hr) #iBleedGreen 🇵🇰 Represented by @agentHAQ",
                "entities": {
                  "description": {
                    "urls": []
                  },
                  "url": {
                    "urls": [
                      {
                        "display_url": "wahabviki.com",
                        "expanded_url": "http://wahabviki.com",
                        "indices": [
                          0,
                          23
                        ],
                        "url": "https://t.co/rWwKprP6NN"
                      }
                    ]
                  }
                },
                "fast_followers_count": 0,
                "favourites_count": 3501,
                "followers_count": 2977063,
                "friends_count": 150,
                "has_custom_timelines": true,
                "is_translator": false,
                "listed_count": 0,
                "location": "Pakistan",
                "media_count": 622,
                "name": "Wahab Riaz",
                "normal_followers_count": 2977063,
                "pinned_tweet_ids_str": [
                  "1147266422298558464"
                ],
                "possibly_sensitive": false,
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/275564493/1636636292",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1459908039700582407/cRXxmOkr_normal.jpg",
                "profile_interstitial_type": "",
                "screen_name": "WahabViki",
                "statuses_count": 4168,
                "translator_type": "none",
                "url": "https://t.co/rWwKprP6NN",
                "verified": false,
                "withheld_in_countries": []
              },
              "profile_image_shape": "Circle",
              "rest_id": "275564493"
            }
          }
        },
        "edit_control": {
          "edit_tweet_ids": [
            "1745465418649858506"
          ],
          "editable_until_msecs": "1704989959000",
          "edits_remaining": "5",
          "is_edit_eligible": true
        },
        "is_translatable": false,
        "legacy": {
          "bookmark_count": 19,
          "bookmarked": false,
          "conversation_id_str": "1745465418649858506",
          "created_at": "Thu Jan 11 15:19:19 +0000 2024",
          "display_text_range": [
            0,
            34
          ],
          "entities": {
            "hashtags": [
              {
                "indices": [
                  20,
                  34
                ],
                "text": "Alhamdulillah"
              }
            ],
            "media": [
              {
                "display_url": "pic.twitter.com/H4NuHBkKty",
                "expanded_url": "https://twitter.com/WahabViki/status/1745465418649858506/photo/1",
                "ext_media_availability": {
                  "status": "Available"
                },
                "features": {
                  "large": {
                    "faces": [
                      {
                        "h": 45,
                        "w": 45,
                        "x": 336,
                        "y": 334
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 446,
                        "y": 419
                      },
                      {
                        "h": 51,
                        "w": 51,
                        "x": 403,
                        "y": 68
                      },
                      {
                        "h": 56,
                        "w": 56,
                        "x": 623,
                        "y": 156
                      },
                      {
                        "h": 63,
                        "w": 63,
                        "x": 416,
                        "y": 132
                      },
                      {
                        "h": 58,
                        "w": 58,
                        "x": 252,
                        "y": 214
                      },
                      {
                        "h": 49,
                        "w": 49,
                        "x": 493,
                        "y": 384
                      },
                      {
                        "h": 104,
                        "w": 104,
                        "x": 487,
                        "y": 174
                      }
                    ]
                  },
                  "medium": {
                    "faces": [
                      {
                        "h": 45,
                        "w": 45,
                        "x": 336,
                        "y": 334
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 446,
                        "y": 419
                      },
                      {
                        "h": 51,
                        "w": 51,
                        "x": 403,
                        "y": 68
                      },
                      {
                        "h": 56,
                        "w": 56,
                        "x": 623,
                        "y": 156
                      },
                      {
                        "h": 63,
                        "w": 63,
                        "x": 416,
                        "y": 132
                      },
                      {
                        "h": 58,
                        "w": 58,
                        "x": 252,
                        "y": 214
                      },
                      {
                        "h": 49,
                        "w": 49,
                        "x": 493,
                        "y": 384
                      },
                      {
                        "h": 104,
                        "w": 104,
                        "x": 487,
                        "y": 174
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "h": 45,
                        "w": 45,
                        "x": 336,
                        "y": 334
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 446,
                        "y": 419
                      },
                      {
                        "h": 51,
                        "w": 51,
                        "x": 403,
                        "y": 68
                      },
                      {
                        "h": 56,
                        "w": 56,
                        "x": 623,
                        "y": 156
                      },
                      {
                        "h": 63,
                        "w": 63,
                        "x": 416,
                        "y": 132
                      },
                      {
                        "h": 58,
                        "w": 58,
                        "x": 252,
                        "y": 214
                      },
                      {
                        "h": 49,
                        "w": 49,
                        "x": 493,
                        "y": 384
                      },
                      {
                        "h": 104,
                        "w": 104,
                        "x": 487,
                        "y": 174
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "h": 29,
                        "w": 29,
                        "x": 223,
                        "y": 221
                      },
                      {
                        "h": 27,
                        "w": 27,
                        "x": 296,
                        "y": 278
                      },
                      {
                        "h": 33,
                        "w": 33,
                        "x": 267,
                        "y": 45
                      },
                      {
                        "h": 37,
                        "w": 37,
                        "x": 413,
                        "y": 103
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 276,
                        "y": 87
                      },
                      {
                        "h": 38,
                        "w": 38,
                        "x": 167,
                        "y": 142
                      },
                      {
                        "h": 32,
                        "w": 32,
                        "x": 327,
                        "y": 255
                      },
                      {
                        "h": 69,
                        "w": 69,
                        "x": 323,
                        "y": 115
                      }
                    ]
                  }
                },
                "id_str": "1745465415831355392",
                "indices": [
                  35,
                  58
                ],
                "media_key": "3_1745465415831355392",
                "media_url_https": "https://pbs.twimg.com/media/GDkjjD5bgAAJqg4.jpg",
                "original_info": {
                  "focus_rects": [
                    {
                      "h": 573,
                      "w": 1024,
                      "x": 0,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 768,
                      "x": 51,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 674,
                      "x": 98,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 384,
                      "x": 243,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 1024,
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "height": 768,
                  "width": 1024
                },
                "sizes": {
                  "large": {
                    "h": 768,
                    "resize": "fit",
                    "w": 1024
                  },
                  "medium": {
                    "h": 768,
                    "resize": "fit",
                    "w": 1024
                  },
                  "small": {
                    "h": 510,
                    "resize": "fit",
                    "w": 680
                  },
                  "thumb": {
                    "h": 150,
                    "resize": "crop",
                    "w": 150
                  }
                },
                "type": "photo",
                "url": "https://t.co/H4NuHBkKty"
              }
            ],
            "symbols": [],
            "urls": [],
            "user_mentions": []
          },
          "extended_entities": {
            "media": [
              {
                "display_url": "pic.twitter.com/H4NuHBkKty",
                "expanded_url": "https://twitter.com/WahabViki/status/1745465418649858506/photo/1",
                "ext_media_availability": {
                  "status": "Available"
                },
                "features": {
                  "large": {
                    "faces": [
                      {
                        "h": 45,
                        "w": 45,
                        "x": 336,
                        "y": 334
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 446,
                        "y": 419
                      },
                      {
                        "h": 51,
                        "w": 51,
                        "x": 403,
                        "y": 68
                      },
                      {
                        "h": 56,
                        "w": 56,
                        "x": 623,
                        "y": 156
                      },
                      {
                        "h": 63,
                        "w": 63,
                        "x": 416,
                        "y": 132
                      },
                      {
                        "h": 58,
                        "w": 58,
                        "x": 252,
                        "y": 214
                      },
                      {
                        "h": 49,
                        "w": 49,
                        "x": 493,
                        "y": 384
                      },
                      {
                        "h": 104,
                        "w": 104,
                        "x": 487,
                        "y": 174
                      }
                    ]
                  },
                  "medium": {
                    "faces": [
                      {
                        "h": 45,
                        "w": 45,
                        "x": 336,
                        "y": 334
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 446,
                        "y": 419
                      },
                      {
                        "h": 51,
                        "w": 51,
                        "x": 403,
                        "y": 68
                      },
                      {
                        "h": 56,
                        "w": 56,
                        "x": 623,
                        "y": 156
                      },
                      {
                        "h": 63,
                        "w": 63,
                        "x": 416,
                        "y": 132
                      },
                      {
                        "h": 58,
                        "w": 58,
                        "x": 252,
                        "y": 214
                      },
                      {
                        "h": 49,
                        "w": 49,
                        "x": 493,
                        "y": 384
                      },
                      {
                        "h": 104,
                        "w": 104,
                        "x": 487,
                        "y": 174
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "h": 45,
                        "w": 45,
                        "x": 336,
                        "y": 334
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 446,
                        "y": 419
                      },
                      {
                        "h": 51,
                        "w": 51,
                        "x": 403,
                        "y": 68
                      },
                      {
                        "h": 56,
                        "w": 56,
                        "x": 623,
                        "y": 156
                      },
                      {
                        "h": 63,
                        "w": 63,
                        "x": 416,
                        "y": 132
                      },
                      {
                        "h": 58,
                        "w": 58,
                        "x": 252,
                        "y": 214
                      },
                      {
                        "h": 49,
                        "w": 49,
                        "x": 493,
                        "y": 384
                      },
                      {
                        "h": 104,
                        "w": 104,
                        "x": 487,
                        "y": 174
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "h": 29,
                        "w": 29,
                        "x": 223,
                        "y": 221
                      },
                      {
                        "h": 27,
                        "w": 27,
                        "x": 296,
                        "y": 278
                      },
                      {
                        "h": 33,
                        "w": 33,
                        "x": 267,
                        "y": 45
                      },
                      {
                        "h": 37,
                        "w": 37,
                        "x": 413,
                        "y": 103
                      },
                      {
                        "h": 41,
                        "w": 41,
                        "x": 276,
                        "y": 87
                      },
                      {
                        "h": 38,
                        "w": 38,
                        "x": 167,
                        "y": 142
                      },
                      {
                        "h": 32,
                        "w": 32,
                        "x": 327,
                        "y": 255
                      },
                      {
                        "h": 69,
                        "w": 69,
                        "x": 323,
                        "y": 115
                      }
                    ]
                  }
                },
                "id_str": "1745465415831355392",
                "indices": [
                  35,
                  58
                ],
                "media_key": "3_1745465415831355392",
                "media_url_https": "https://pbs.twimg.com/media/GDkjjD5bgAAJqg4.jpg",
                "original_info": {
                  "focus_rects": [
                    {
                      "h": 573,
                      "w": 1024,
                      "x": 0,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 768,
                      "x": 51,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 674,
                      "x": 98,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 384,
                      "x": 243,
                      "y": 0
                    },
                    {
                      "h": 768,
                      "w": 1024,
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "height": 768,
                  "width": 1024
                },
                "sizes": {
                  "large": {
                    "h": 768,
                    "resize": "fit",
                    "w": 1024
                  },
                  "medium": {
                    "h": 768,
                    "resize": "fit",
                    "w": 1024
                  },
                  "small": {
                    "h": 510,
                    "resize": "fit",
                    "w": 680
                  },
                  "thumb": {
                    "h": 150,
                    "resize": "crop",
                    "w": 150
                  }
                },
                "type": "photo",
                "url": "https://t.co/H4NuHBkKty"
              }
            ]
          },
          "favorite_count": 5889,
          "favorited": false,
          "full_text": "My support system❤️\n#Alhamdulillah https://t.co/H4NuHBkKty",
          "id_str": "1745465418649858506",
          "is_quote_status": false,
          "lang": "en",
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "quote_count": 28,
          "reply_count": 279,
          "retweet_count": 73,
          "retweeted": false,
          "user_id_str": "275564493"
        },
        "rest_id": "1745465418649858506",
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "unmention_data": {},
        "views": {
          "count": "250723",
          "state": "EnabledWithCount"
        }
      }
    }
  }


const requestCameraRollPermission = async () => {
  // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  const { status } = await Camera.requestCameraPermissionsAsync();

  if (status !== 'granted') {
    console.error('Camera roll permission denied');
    return false;
  }

  return true;
};
// export const SET_VIDEO_LIST = () => async (dispatch:any) => {
const downloadAndSaveVideo =  (url:string,fileName:string) => async (dispatch:any) => {
  console.log('Downloading video premisssion---------------------------------')
    const permissionGranted = await requestCameraRollPermission();
    
    if (!permissionGranted) {
      return;
    }
  const downloadsDirectory = `${FileSystem.documentDirectory}downloads/`
  const directoryInfo = await FileSystem.getInfoAsync(downloadsDirectory);
  if (!directoryInfo.exists) {
    console.log("directory does not exists ... creating one...");
    await FileSystem.makeDirectoryAsync(downloadsDirectory, { intermediates: true });
    console.log("directory created")
  }
  
  
  try {
    const videoUrl = url // Replace with your video URL
    const fileUri = `${FileSystem.documentDirectory}downloads/`+fileName+`.mp4`;
    // const fileUri = `${FileSystem.documentDirectory}downloads/`+fileName+`.mp4`;
    
    // Download the video
    console.log('Downloading video')
    const {uri} =await FileSystem.downloadAsync(videoUrl, fileUri)
      console.log('Downloading video completed')
      // Save to the device's gallery
         await MediaLibrary.saveToLibraryAsync(uri)
         
             dispatch({
               type: "INSTALL_FINISHED",
               
             });
           
         console.log('Video downloaded to:', uri);
         Alert.alert('Video Downloaded', 'The video has been saved to your device.');

    
  } catch (error) {
    console.error('Error downloading video:', error);
    Alert.alert('Error', 'Failed to download the video. Please try again.');
    dispatch({
      type: "INSTALL_FINISHED",
      
    });
  }
};

export const SET_URL_TIKTOK = (url:string) => async (dispatch:any) => {
  console.log("logging action ");

  dispatch({
    type: "SET_URL_TIKTOK",
    payload: {url: url},
  });
};
export const SET_URL_TWITTER = (url:string) => async (dispatch:any) => {
  console.log("logging action ");

  dispatch({
    type: "SET_URL_TWITTER",
    payload: {url: url},
  });
};
export const SET_VIDEO_LIST = () => async (dispatch:any) => {
  console.log('1111111111111')
  const { status } = await MediaLibrary.requestPermissionsAsync();

  if (!status) {
    return;
  }

  try {
    const mediaAssets = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.video,
    });
    console.log("video list ===========================")
    console.log(mediaAssets,"setting video list ")
    dispatch({
      type: "SET_VIDEO_LIST",
      payload: {mediaAssets:mediaAssets}
    });

    // setVideoList(mediaAssets);
  } catch (error) {
    console.error('Error getting video list:', error);
    Alert.alert('Error', 'Failed to get the video list. Please try again.');
  }
};

async function deleteAllVideosAsync() {
  const directory = `${FileSystem.documentDirectory}downloads/`;

  try {
    // Get the list of files in the directory
    const files = await FileSystem.readDirectoryAsync(directory);

    // Delete each file in the directory
    const deletePromises = files.map(async (file) => {
      const filePath = `${directory}${file}`;
      await FileSystem.deleteAsync(filePath, { idempotent: true });
      console.log('Deleted:', filePath);
    });

    // Wait for all delete operations to complete
    await Promise.all(deletePromises);

    console.log('All videos deleted successfully.');
  } catch (error) {
    console.error('Error deleting videos:', error);
  }
}
export const INSTALL =  (url_tiktok:string) => async (dispatch:any) => {
  const options = {
    method: 'GET',
    url: 'https://tiktok-download-video1.p.rapidapi.com/getVideo',
    params: {
      url: url_tiktok,
      hd: '1'
    },
    headers: {
      'X-RapidAPI-Key': '108855b2femsha140236ecc32189p1cb2acjsn6e5f1b9cd140',
      'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com'
    }
  };
  
  
  console.log("logging action ");

  dispatch({
    type: "INSTALL_START",
    
  });
  
    
    
    axios.request(options).then((response:any)=>{
      const data = response.data;
      const regex = /[^a-zA-Z\s]/g;
      const regex1 =/ {2,}/g;
  
    
      console.log("the data is ")
      // console.log("data -----------",data["data"]['hdplay']);
      console.log("data -----------",data["data"]['title'].replace(regex, '').replace(regex1, ' ').trim());
      const url = data["data"]['hdplay']
      // const url = "https://v16m-default.akamaized.net/afab389dd5b1c45159d6988a5d3da92b/65a341ab/video/tos/alisg/sde/tos-alisg-pv-0037c001/oAXJWAzLxqA3oiEyBqifAAwMbIkAByEEIAB0CO/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C1&cv=1&br=792&bt=396&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12j6D7R3wUSx3yKMeF~O5&mime_type=video_mp4&qs=13&rc=M3U2OG45cjo1bzMzODczNEBpM3U2OG45cjo1bzMzODczNEBtM3EvMmRjLl9gLS1kMTFzYSNtM3EvMmRjLl9gLS1kMTFzcw%3D%3D&l=2024011320005687EA1147457CEBDE7C13&btag=e00060000&dpk=Lx%2BTKoofd2RwO3wAsMq78W6BwO4fFrDIis0K1kQuGUfPHrh4BjEFuKNL5LpRfvWjdAv6bZQzQszs%2FVMlzleBeYJZvvaOBC5OGpgAuA%3D%3D&dpm=aes-256-cfb&l=2024011320005687EA1147457CEBDE7C13"
      const fileName = data["data"]['title'].replace(regex, '').replace(regex1, ' ').trim()
      // console.log(response.data);

      // deleteAllVideosAsync()
      dispatch(downloadAndSaveVideo(url,fileName))
      console.log("setting");
      console.log("url------------",url_tiktok)
      dispatch(SET_VIDEO_LIST())



      // dispatch({
      //   type: "INSTALL_FINISHED",
        
      // });
    }).catch((err:any)=>{
      Alert.alert("Invalid Url","Enter A Valid Url")
    
      dispatch({
        type: "INSTALL_FINISHED",
        
      });

      console.log(err);
    });
 
    
    
  
};



// export const INSTALL_TWITTER = (url_tiktok:string) => async (dispatch:any) => {
//   const encodedParams = new URLSearchParams();
// encodedParams.set('url', 'https://x.com/WahabViki/status/1745465418649858506?s=20');

//   const options = {
//     method: 'POST',
//     url: 'https://all-media-downloader.p.rapidapi.com/rapid_download/download',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'X-RapidAPI-Key': '108855b2femsha140236ecc32189p1cb2acjsn6e5f1b9cd140',
//       'X-RapidAPI-Host': 'all-media-downloader.p.rapidapi.com'
//     },
//     data: encodedParams,
//   };
//   // const options = {
//   //   method: 'GET',
//   //   url: 'https://tiktok-download-video1.p.rapidapi.com/getVideo',
//   //   params: {
//   //     url: url_tiktok,
//   //     hd: '1'
//   //   },
//   //   headers: {
//   //     'X-RapidAPI-Key': '108855b2femsha140236ecc32189p1cb2acjsn6e5f1b9cd140',
//   //     'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com'
//   //   }
//   // };
  
  
//   console.log("logging action ");

//   dispatch({
//     type: "INSTALL_START",
    
//   });
  
    
    
//     // axios.request(options).then((response:any)=>{
//     //   const data = response.data;
//       const regex = /[^a-zA-Z\s]/g;
//       const regex1 =/ {2,}/g;
  
    
//       console.log("the data is ")
//       console.log("data -----------",data["data"]['hdplay']);
//       console.log("data -----------",data["data"]['title'].replace(regex, '').replace(regex1, ' ').trim());
//       const url = data["data"]['hdplay']
//       const fileName = data["data"]['title'].replace(regex, '').replace(regex1, ' ').trim()
//       // console.log(response.data);

//       deleteAllVideosAsync()
//       // downloadAndSaveVideo(url,fileName)
//       console.log("setting");
//       console.log("url------------",url_tiktok)
//       dispatch(SET_VIDEO_LIST())



//       dispatch({
//         type: "INSTALL_FINISHED",
        
//       });
//     // }).catch((err:any)=>{
//     //   console.log(err);
//     // });
 
    
    
  
// };
