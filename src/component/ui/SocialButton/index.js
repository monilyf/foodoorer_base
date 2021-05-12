import React from 'react';
import {View, Text,TouchableOpacity,Image} from 'react-native';
import styles from './styles'

const SocialButton = (props) => {
  return (
        <TouchableOpacity style={styles.btnPrimary} onPress={props.onPress}>
      <Image
        style={styles.btnImage}
        source={props.image}
      />
      <Text style={styles.btnName}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;


