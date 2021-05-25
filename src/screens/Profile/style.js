import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
  container:{
    backgroundColor:Color.WHITE,
    paddingBottom:8,
    borderBottomStartRadius:15,
    borderBottomEndRadius:15

  },
  profileHeader: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer:{
      flexDirection:'column'
  },
  subContainerData:{
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomStartRadius:12
  }
});

export default styles