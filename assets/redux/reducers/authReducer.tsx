

const initialState={
    url_tiktok:null,
    url_twitter:null,
    loading:false,
    video_list:[]
}

function authReducer(state=initialState,action:any){
    const {type,payload} = action
    switch(type){
        case "SET_URL_TIKTOK":
            
            return{
                ...state,
                url_tiktok:payload.url
            }
        case "SET_URL_TWITTER":
            
            return{
                ...state,
                url_twitter:payload.url
            }
       
        case "SET_VIDEO_LIST":
            console.log("video list updates")
            return{
                ...state,
                video_list:payload.mediaAssets
            }
       
        case "INSTALL_START":
            
            return{
                ...state,
                loading:true,
                
            }
        case "INSTALL_FINISHED":
            
            return{
                ...state,
                loading:false,
                
            }
       
        default:
            return{
                ...state
            }
    }
}

export default authReducer