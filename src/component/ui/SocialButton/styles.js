import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color'

const styles = StyleSheet.create({
    btnPrimary: {
        flexDirection:'row',
        // backgroundColor: Color.DARK_MODERATE_BLUE,
        height: 50,
        width:325,
        borderRadius: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        borderWidth:1,
        borderColor:Color.DARK_GRAY
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