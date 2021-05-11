import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconError from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEye from 'react-native-vector-icons/Octicons';
import styles from './style'

const InputContainer = (props) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Icon
          name={props.iconName} //"person-outline"
          color="#000"
          size={20}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          value={props.value}
          onEndEditing={props.onEndEditing}
          maxLength={props.maxLength}
          onChangeText={props.onChangeText}
          secureTextEntry={Boolean(props.secureText)}
          keyboardType={props.keyboardType}
        />
        <TouchableOpacity onPress={props.onToggle}>
          <IconError
            name={props.errorIcon} //"person-outline"
            color="#000"
            size={20}
            s
            style={styles.errorIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onToggle}>
          <IconEye
            name={props.extraIconName} //"person-outline"
            color="#000"
            size={20}
            style={styles.extraIcon}
          />
        </TouchableOpacity>
        {/* <Text style={styles.errorMsg}>{this.props.errorMsg}</Text> */}
      </View>
      {/* <Text style={errorMsg}>{props.errorMsg}</Text> */}
    </View>
  );
};

export default InputContainer;



