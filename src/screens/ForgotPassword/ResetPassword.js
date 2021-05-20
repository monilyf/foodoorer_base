import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  LogBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../SignIn/style';
import Color from '../../utils/Color';
import {
  InputContainer,
  SubmitButton,
  Label,
  ToastMessage,
  BottomSheet,
  RoundButton,
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation,PasswordValidate} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
// import Toast from 'react-native-toast-message'
import logo from '../../assets/images/foodoorer2.png';
import ThemeUtils from '../../utils/ThemeUtils';

export class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',

      showToast: false,
    };
  }

  handleOnSubmit = () => {
    let passwordError,confirmPasswordError;
    let isValide = true;

    passwordError = validation('password', this.state.password);
    confirmPasswordError = PasswordValidate(this.state.password,this.state.confirmPassword)

    if (passwordError != null||confirmPasswordError!=null) {
      console.log('errors ');
      this.setState(
        {
          passwordError: passwordError,
          confirmPasswordError:confirmPasswordError,
          showToast: true,
        },
        () => {
          setTimeout(() => {
            this.setState({showToast: false});
          }, 2500);
        },
      );
    } else {
        alert('Password reset successfully!')
      this.props.navigation.navigate(Routes.SignIn);
    }
  };

  render(props) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          // colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
          colors={[Color.GRADIENT1, Color.GRADIENT2]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View>
              <View style={CommonStyle.boxContainer}>
                {/* <Image
                  source={logo}
                  style={{
                    alignSelf: 'center',
                    marginBottom: 15,
                    height: ThemeUtils.relativeHeight(12),
                    width: ThemeUtils.relativeWidth(50),
                  }}
                /> */}
                <Label color={Color.BLACK} xlarge>
                  Reset Password
                </Label>

                <Label color={Color.DARK_GRAY} mt={10} mb={10} small>
                  Set the new password for your account so you can login and enjoy taste.
                </Label>

                <InputContainer
                  iconName="lock"
                  placeholder="Enter Password"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({password: text})}
                  extraIconName='eye'
                />

              {this.state.passwordError!=null?<Label small mt={5} mb={5} color={Color.ERROR}>{this.state.passwordError}</Label>:<Label></Label>}


                <InputContainer
                    iconName='lock'
                    placeholder='Re-type Password'
                    iconColor={Color.BLACK}
                    onChangeText={text => this.setState({confirmPassword:text})}
                    extraIconName='eye'
                />
            {this.state.confirmPasswordError!=null?<Label small mt={5} mb={50} color={Color.ERROR}>{this.state.confirmPasswordError}</Label>:null}

                <RoundButton
                  onPress={() => {
                    this.handleOnSubmit();
                  }}
                  mt={10}
                  backgroundColor={Color.DARK_CYAN}>
                  Reset Password
                </RoundButton>
              </View>
            </View>
            <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text={this.state.confirmPasswordError} />
              ) : null}
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default ResetPassword;
