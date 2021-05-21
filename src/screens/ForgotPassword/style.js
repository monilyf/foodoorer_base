import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
  
    otpContainer:{
        flex:1,
        justifyContent:'space-evenly',
        flexDirection:'row',
        // marginVertical:30,

    },
    otpBox:{
        backgroundColor:Color.WHITE_SMOKE,
        fontWeight:'600',
        alignSelf:'center',
        paddingHorizontal:18,
        // justifyContent:'center'        ,
        fontSize:20,
        height:52,
        width:'15%',
        borderRadius:10,
        borderWidth:0.5,
        borderColor:Color.DARK_GRAY

    }
})
export default styles