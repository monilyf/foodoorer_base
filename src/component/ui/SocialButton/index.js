import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Theme from '../../../utils/ThemeUtils';
import PropTypes from 'prop-types';

const SocialButton = (props) => {
  onClick = () => {
    if (props.onPress) {
      props.onPress();
    }
  };

  // let btnContainerStylesArray = [];
  // let btnTextStylesArray = [];
  // if (props.btn)

  return (
    <TouchableOpacity style={styles.btnPrimary} onPress={onClick}>
      <Image style={styles.btnImage} source={props.image} />
      <Text style={styles.btnName}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

{
  /*              
                  <TouchableOpacity style={styles.btnPrimary}>
                    <Image style={styles.btnImage} source={require('../../assets/images/facebook.png')}/>
                    <Text style={styles.btnName}>Sign In with FaceBook</Text>
                  </TouchableOpacity> */
}
