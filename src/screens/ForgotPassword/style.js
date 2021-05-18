import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    subContainer:{
        flex:2
    },
    footer:{
        flex:4,
        height:500,
        width:'100%',
        paddingHorizontal:20,
        backgroundColor:Color.WHITE,
        // borderRadius:12,
        marginTop:40,
        borderTopStartRadius:20,
        borderTopEndRadius:20
    },
})
export default styles