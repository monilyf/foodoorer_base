import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color'
import ThemeUtils from '../../../utils/ThemeUtils'


const styles = StyleSheet.create({
    btnPrimary: {
        flexDirection:'row',
        // backgroundColor: Color.DARK_MODERATE_BLUE,
        // height: 50,
        // width:ThemeUtils.relativeWidth(80),
        width:320,       
        borderRadius: 14,
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 10,
        borderWidth:1,
        borderColor:Color.DARK_GRAY,
        // paddingHorizontal: 20, 
        paddingVertical: 14
      }, 
      btnImage: {
        width: 25,
        height: 20,
        marginLeft: 0,
      },
      btnName: {
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing:1,
        color:Color.BLACK,
         paddingRight:50
      },
});

export default styles;