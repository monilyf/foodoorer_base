import React from 'react';
import {Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ThemeUtils from '../../../utils/ThemeUtils';
import PropTypes from 'prop-types';
import Label from '../Label';
import Color from '../../../utils/Color';

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
      <Label color={Color.PRIMARY} bolder ph={20} small>{props.buttonText}</Label>
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
