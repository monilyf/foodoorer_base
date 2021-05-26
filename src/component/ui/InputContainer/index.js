import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconError from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEye from 'react-native-vector-icons/Octicons';
import styles from './style'
import Color from '../../../utils/Color'
import Label from '../Label';

const InputContainer = (props) => {
  return (
    <View>
     {/* <Label color={Color.PRIMARY} ms={22} xsmall>{props.label}</Label> */}
      <View style={[styles.inputContainer,props.style]}>
        <Icon
          name={props.iconName} //"person-outline"
          color={props.iconColor}
          size={20}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          // style={[
          // styles.input,
          //  props.style ,
        // ]}
          
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
            color={props.iconColor}
            size={20}
            
            style={styles.errorIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onToggle}>
          <IconEye
            name={props.extraIconName} //"person-outline"
            color={props.iconColor}
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



