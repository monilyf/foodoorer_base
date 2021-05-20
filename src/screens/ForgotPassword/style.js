import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center',
    // },
    // subContainer:{
    //     flex:2
    // },
    // footer:{
    //     flex:4,
    //     height:500,
    //     width:'100%',
    //     paddingHorizontal:20,
    //     backgroundColor:Color.WHITE,
    //     // borderRadius:12,
    //     marginTop:40,
    //     borderTopStartRadius:20,
    //     borderTopEndRadius:20
    // },
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