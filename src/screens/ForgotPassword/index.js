import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../utils/Color';
import {InputContainer, RoundButton, Label, Logo} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import * as Animatable from 'react-native-animatable';

export class ForgotPassword extends Component {
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
    let isValid;
    emailError = validation('email', this.state.email);

    if (emailError != null) {
      console.log('error');
      this.setState(
        {
          emailError: emailError,
          showToast: true,
        },
        // () => {
        //   setTimeout(() => {
        //     this.setState({showToast: false});
        //   }, 2500);
        // },
      );
      isValid = false;
    } else {
      console.log('done');
      this.setState({
        emailError: '',
      });
      isValid = true;
    }
    if (isValid) {
      // this.props.navigation.navigate(Routes.OtpScreen)
      this.props.navigation.navigate(Routes.ResetPassword);
    }
  };

  render(props) {
    return (
      <SafeAreaView style={CommonStyle.container}>
        <StatusBar hidden={false} />
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View>
              <Animatable.View animation="fadeInLeft" iterationDelay={400}>
                <Logo />
                </Animatable.View>
                <Animatable.View animation="fadeInUpBig" iterationDelay={400}>

                <View style={CommonStyle.boxContainer}>
                  {/* <Image source={logo} style={{alignSelf:'center',marginBottom:15,height:ThemeUtils.relativeHeight(12),width:ThemeUtils.relativeWidth(50)}}/> */}
                  <Label color={Color.PRIMARY} align="center" xlarge>
                    Forgot your password?
                  </Label>

                  <Label color={Color.DARK_GRAY} mt={10} mb={15} small>
                    Enter your email for the verfication process. we will send 4
                    digits code to your email.
                  </Label>

                  <InputContainer
                    iconName="email"
                    placeholder="Enter Email"
                    iconColor={Color.PRIMARY}
                    onChangeText={text => this.setState({email: text})}
                  />
                  {this.state.emailError != null ? (
                    <Label small mt={5} mb={5} color={Color.ERROR}>
                      {this.state.emailError}
                    </Label>
                  ) : null}

                  <RoundButton
                    onPress={() => {
                      this.handleOnSubmit();
                    }}
                    mt={10}
                    backgroundColor={Color.DARK_CYAN}>
                    Continue
                  </RoundButton>
                </View>
              </Animatable.View>
            </View>
            {/* <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text={this.state.emailError} />
              ) : (
                null
              )}
            </View> */}
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default ForgotPassword;
