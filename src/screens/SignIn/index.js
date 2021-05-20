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
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Color from '../../utils/Color';
import {
  InputContainer,
  OrSection,
  SubmitButton,
  Label,
  SocialButton,
  ToastMessage,
  TabNav,
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import ThemeUtils from '../../utils/ThemeUtils';
import logo from '../../assets/images/foodoorer2.png';

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
    this.setState(
      {
        emailError: validation('email', this.state.email),
        showToast: true,
        passwordError: validation('password', this.state.password),
      },
      () => {
        setTimeout(() => {
          this.setState({showToast: false});
        }, 2500);
      },
    );
    if (this.state.email == '') {
      alert('please fill email ');
    } else if (this.state.emailError != null || this.state.passwordError !=null) {
      // alert(this.state.emailError)
      this.props.navigation.navigate(Routes.SignIn);
    } else {
      login_data = 'login';
      AsyncStorage.setItem('login_data', JSON.stringify(login_data));
      console.log('login_data from :', login_data);

      this.props.navigation.navigate(Routes.Auth, {email: this.state.email});
    }
  };

  render(props) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#6DC999', '#73BFC9']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View style={{marginTop:-20}}>

                <Image source={logo} style={{alignSelf:'center',marginBottom:15,height:ThemeUtils.relativeHeight(12),width:ThemeUtils.relativeWidth(50)}}/>
                <Label align='center' color={Color.WHITE} bolder xxlarge>
                  Welcome
                </Label>

              <View style={CommonStyle.boxContainer}>
                {/* <TabNav/> */}
                <View style={styles.tabScreen}>
                  <View
                    style={{
                      borderBottomWidth: 4,
                      borderBottomColor: Color.APPLE,
                      width: '50%',
                    }}
                    >
                    <Label bolder  color={Color.DARK_BLUE} align="center" mb={5}>
                      Sign In
                    </Label>
                  </View>
                  {/* <Label bolder color={Color.DARK_MODERATE_BLUE} >Sign Up</Label> */}
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(Routes.SignUp)
                    }>
                    <Label
                      bolder
                      color={Color.DARK_MODERATE_BLUE}
                      align="right">
                      Sign Up
                    </Label>
                  </TouchableOpacity>
                </View>
               

                {/* <Label color={Color.DARK_GRAY} mt={5} small>
                  Enter your email id to proceed
                </Label> */}

                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  iconColor={Color.PRIMARY}
                  onChangeText={text => this.setState({email: text})}
                />
                {this.state.emailError!=null?<Label small mt={5} mb={5} color={Color.ERROR}>{this.state.emailError}</Label>:null}
                <InputContainer
                  iconName="lock"
                  placeholder="Enter Password"
                  iconColor={Color.PRIMARY}
                  onChangeText={text => this.setState({passwod: text})}
                  extraIconName={this.state.toggleIcon}
                  secureText={this.state.isSecurePassword}
                  onToggle={() => this.handleToggle()}
                />
                {this.state.passwordError!=null?<Label small mt={5} mb={5} color={Color.ERROR}>{this.state.passwordError}</Label>:null}


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

                <View style={{flexDirection: 'row'}}>
                  <SocialButton
                    buttonText="Facebook"
                    backgroundColor="red"
                    image={require('../../assets/images/facebook.png')}
                  />
                  <View style={{margin: 5}}></View>

                  <SocialButton
                    buttonText="Google    "
                    image={require('../../assets/images/google.png')}
                  />
                </View>

                {/* <TouchableOpacity
                  style={{flexDirection: 'row', justifyContent: 'center'}}
                  onPress={() => this.props.navigation.navigate(Routes.SignUp)}>
                  <Label mt={15} color={Color.BLUE_MAGENTA} small>
                    Don't have an account?{' '}
                  </Label>
                  <Label color={Color.DARK_BLUE} small mt={15}>
                    SIGN UP
                  </Label>
                </TouchableOpacity> */}
              </View>
            </View>
            {/* <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text="Please fill all the Fields Properly" />
              ) : null}
            </View> */}
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SignIn;
