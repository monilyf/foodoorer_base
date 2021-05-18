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
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
// import Toast from 'react-native-toast-message'
import logo from '../../assets/images/foodoorer2.png';
import ThemeUtils from '../../utils/ThemeUtils';

export class OtpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      showToast: false,
    };
  }

  handleOnSubmit = () => {
    let emailError;
    let isValide = true;

    emailError = validation('email', this.state.email);

    if (emailError != null) {
      console.log('errors ');
      this.setState(
        {
          emailError: emailError,
          showToast: true,
        },
        () => {
          setTimeout(() => {
            this.setState({showToast: false});
          }, 2500);
        },
      );
    } else {
      this.props.navigation.navigate(Routes.ResetPassword);
    }
  };

  render(props) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          // colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
          colors={['#29B76D', '#2A97A6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View>
              <View style={CommonStyle.boxContainer}>
                <Image
                  source={logo}
                  style={{
                    alignSelf: 'center',
                    marginBottom: 15,
                    height: ThemeUtils.relativeHeight(12),
                    width: ThemeUtils.relativeWidth(50),
                  }}
                />
                <Label color={Color.BLACK} xlarge>
                  Enter 4 Digits Code
                </Label>

                <Label color={Color.DARK_GRAY} mt={10} mb={10} small>
                  Enter the digits code that you received on your email.
                </Label>

                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({email: text})}
                />

                <RoundButton
                  onPress={() => {
                    this.handleOnSubmit();
                  }}
                  mt={10}
                  backgroundColor={Color.DARK_CYAN}>
                  Continue
                </RoundButton>
              </View>
            </View>
            <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text="Invalid OTP" />
              ) : null}
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default OtpScreen;
