import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
  container:{
    backgroundColor:Color.WHITE
  },
  profileHeader: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer:{
      flexDirection:'column'
  }
});

export default styles