import {StyleSheet} from 'react-native'
const styles = StyleSheet.create(
    {
      container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      SplashScreen_RootView:
      {     
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
      },
     
      logo: {
        height:200,
        width:'80%',
        // marginTop:40,
        // marginLeft:30,
        alignItems:'center'
  
      },
     footer:{
       position:'absolute',
   
       bottom:50,
       
     },
     footerText:{
     
      color: '#6f6e92',
   
     }
    });  
export default styles;