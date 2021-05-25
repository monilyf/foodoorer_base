import {StyleSheet} from 'react-native'
import Color from '../../utils/Color'
import ThemeUtils from '../../utils/ThemeUtils'

const styles = StyleSheet.create({
    container: 
      {
        flex: 1,                
        backgroundColor:Color.WHITE,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 100, 
    }, 
    buttonCircle: {
      marginTop: 4,
      width: 40,
      height: 40,
      backgroundColor: Color.APPLE,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    introImageStyle: {
    //   width:ThemeUtils.relativeWidth(75),
      width:ThemeUtils.relativeHeight(75),
      height:ThemeUtils.relativeHeight(30),
      marginTop:40
    },
    dotStyle: {
      // marginBottom:'0%',
      backgroundColor: Color.DARK_GRAY,
    },
    activeDotStyle: {
      // marginBottom:'0%',
      backgroundColor: Color.APPLE,
    },
   
  });

  export default styles