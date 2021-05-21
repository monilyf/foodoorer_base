import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../utils/Color';
import {
  InputContainer,
  Label,
  Logo,
  RoundButton,
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation,PasswordValidate} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import * as Animatable from 'react-native-animatable'

export class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',
      isSecurePassword:true,
      isSecureConfirmPassword:true,
      // showToast: false,
      toggleIcon1:'eye',
      toggleIcon2:'eye'
    };
  }

  handleOnSubmit=()=>{
    let passwordError,confirmPasswordError;
    let isValid;
    passwordError = validation('password',this.state.password);
    confirmPasswordError = PasswordValidate(this.state.password,this.state.confirmPassword)

    if (passwordError!=null || confirmPasswordError!=null){
      console.log("validation Error in Reset password")
      this.setState(
        {
          passwordError:passwordError,
          confirmPasswordError:confirmPasswordError,
        },
      );
      isValid = false;
    }
    else{
      console.log('Reset password Done')
      this.setState({
        passwordError:'',
        confirmPasswordError:'',
      });
      isValid=true;
    }
    if(isValid){
      this.props.navigation.navigate(Routes.SignIn)
    }
  }

  handlePasswordToggle = () => {
    this.state.isSecurePassword
      ? this.setState({isSecurePassword: false, toggleIcon1: 'eye-closed'})
      : this.setState({isSecurePassword: true, toggleIcon1: 'eye'});
  };
  handleConfirmPasswordToggle = () => {
    this.state.isSecureConfirmPassword
      ? this.setState({isSecureConfirmPassword: false, toggleIcon2: 'eye-closed'})
      : this.setState({isSecureConfirmPassword: true, toggleIcon2: 'eye'});
  };

  render(props) {
    return (
      <SafeAreaView style={CommonStyle.container}>
      <StatusBar hidden={false}/>
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
            <Logo/>
            </Animatable.View>
            <Animatable.View animation="fadeInUpBig" iterationDelay={400}>

              <View style={CommonStyle.boxContainer}>
               
                <Label color={Color.PRIMARY} align='center' xlarge>
                  Reset Password
                </Label>

                <Label color={Color.DARK_GRAY} mt={10} mb={10} small>
                  Set the new password for your account so you can login and enjoy taste.
                </Label>

                <InputContainer
                  iconName="lock"
                  placeholder="Enter Password"
                  iconColor={Color.PRIMARY}
                  onChangeText={text => this.setState({password: text})}
                  extraIconName={this.state.toggleIcon1}
                  secureText={this.state.isSecurePassword}
                  onToggle={()=>this.handlePasswordToggle()}
                />

              {this.state.passwordError!=null?<Label small mt={5} mb={5} color={Color.ERROR}>{this.state.passwordError}</Label>:<Label></Label>}


                <InputContainer
                    iconName='lock'
                    placeholder='Re-type Password'
                    iconColor={Color.PRIMARY}
                    onChangeText={text => this.setState({confirmPassword:text})}
                    extraIconName={this.state.toggleIcon2}
                    secureText={this.state.isSecureConfirmPassword}
                    onToggle={()=>this.handleConfirmPasswordToggle()}
                />
            {this.state.confirmPasswordError!=null?<Label small mt={5} mb={5} color={Color.ERROR}>{this.state.confirmPasswordError}</Label>:<Label></Label>}

                <RoundButton
                  onPress={() => {
                    this.handleOnSubmit();
                  }}
                  mt={10}
                  backgroundColor={Color.DARK_CYAN}>
                  Reset Password
                </RoundButton>
              </View>
              </Animatable.View>
            </View>
            {/* <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text={this.state.confirmPasswordError} />
              ) : null}
            </View> */}
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default ResetPassword;
