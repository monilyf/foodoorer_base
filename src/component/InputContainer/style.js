import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      marginTop: 10,
      borderColor: '#FFF',
      // borderWidth: 0.5,
      borderRadius: 14,
     borderBottomWidth:1,
      backgroundColor: '#fff',
    },
    input: {
      color: '#6f6e92',
      paddingLeft: 60,
      flex: 1,
      fontSize: 20,
    },
    extraIcon: {marginTop: 15, marginRight: 20, color: '#a5a5a5'},
    errorIcon: {marginTop: 15, marginRight: 20, color: 'red'},
    inputIcon: {
      marginTop: 15,
      marginLeft: 20,
      position: 'absolute',
      fontSize: 20,
      color: '#28388f',
    },
  });

  export default styles