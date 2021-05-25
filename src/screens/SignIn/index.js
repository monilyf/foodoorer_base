import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Keyboard,TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../utils/Color';
import {
  InputContainer,
  OrSection,
  SubmitButton,
  Label,
  SocialButton,
  ToastMessage,
  Logo,
  StatusBars,

} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import * as Animatable from 'react-native-animatable';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      showToast: false,
      toggleIcon: 'eye',
      isSecurePassword: true,
    };
  }

  handleToggle = () => {
    this.state.isSecurePassword
      ? this.setState({isSecurePassword: false, toggleIcon: 'eye-closed'})
      : this.setState({isSecurePassword: true, toggleIcon: 'eye'});
  };

  handleOnSubmit = () => {
    let emailError, passwordError;
    let isValid;
    emailError = validation('email', this.state.email);
    passwordError = validation('password', this.state.password);

    if (emailError != null || passwordError != null) {
      console.log('validation Error in Sign In',this.state.password);
      this.setState({
        emailError:emailError,
        passwordError:passwordError,
        showToast:true,}
            // ,() => {
            //     setTimeout(() => {
            //       this.setState({showToast: false});
            //     }, 2500);
      //  }
    )
    isValid=false;

    } else {
      console.log('Sign In Done');
      this.setState({
        emailError: '',
        passwordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      this.props.navigation.navigate(Routes.Auth,{email:this.state.email,password:this.state.password});
    }
  };

  render(props) {
    return (
      <SafeAreaView style={CommonStyle.container} >
        <StatusBars hidden={true} />
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View style={{marginTop: -20}}>
              <Animatable.View animation="fadeInLeft" iterationDelay={400}>
                <Logo />
                <Label align="center" color={Color.WHITE} bolder xxlarge>
                  Welcome
                </Label>
              </Animatable.View>
              <Animatable.View animation="fadeInUpBig" iterationDelay={400}>
                <View style={CommonStyle.boxContainer}>
                  {/* <TabNav/> */}

                  <View style={CommonStyle.tabScreen}>
                    <Label
                      large
                      ph={30}
                      bolder
                      border={4}
                      pb={5}
                      borderColor={Color.APPLE}
                      color={Color.DARK_BLUE}>
                      Sign In
                    </Label>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.push(Routes.SignUp);
                      }}>
                      <Label
                        large
                        ph={30}
                        bolder
                        color={Color.DARK_MODERATE_BLUE}>
                        Sign Up
                      </Label>
                    </TouchableOpacity>
                  </View>

                  <InputContainer
                    iconName="email"
                    placeholder="Enter email"
                    keyboardType='email-address'
                    iconColor={Color.PRIMARY}
                    onChangeText={text => this.setState({email: text})}
                  />
                  {this.state.emailError != null ? (
                    <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                      {this.state.emailError}
                    </Label>
                  ) : (
                    <Label></Label>
                  )}
                  <InputContainer
                    iconName="lock"
                    placeholder="Enter password"
                    iconColor={Color.PRIMARY}
                    onChangeText={text => this.setState({password: text})}
                    extraIconName={this.state.toggleIcon}
                    secureText={this.state.isSecurePassword}
                    onToggle={() => this.handleToggle()}
                  />
                  {this.state.passwordError != null ? (
                    <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                      {this.state.passwordError}
                    </Label>
                  ) : (
                    <Label></Label>
                  )}

                  <SubmitButton
                    onPress={() => {
                      // this.check_IsNull();
                      this.handleOnSubmit();
                    }}
                    buttonText="Sign In"
                  />
                  <TouchableOpacity
                    style={{marginTop: 10, alignSelf: 'flex-end'}}
                    onPress={() =>
                      this.props.navigation.navigate(Routes.ForgotPassword)
                    }>
                    <Label small color={Color.DARK_BLUE} align="right" me={5}>
                      Forgot Password ?
                    </Label>
                  </TouchableOpacity>
                  <OrSection />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <SocialButton
                      buttonText="Facebook"
                      image={require('../../assets/images/facebook.png')}
                    />

                    <SocialButton
                      buttonText="Google   "
                      image={require('../../assets/images/google.png')}
                    />
                  </View>
                </View>
              </Animatable.View>
            </View>
            {/* <View >
              {this.state.showToast ? (
                <ToastMessage text="Please fill all the Fields Properly" />
              ) : null}
            </View> */}
          </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SignIn;
