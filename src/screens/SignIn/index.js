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
// import Toast from 'react-native-toast-message'

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      password:'',
      passwordError:'',
      showToast: false,
    };
  }

 

  handleOnSubmit = () => {
    this.setState(
      {emailError: validation('email', this.state.email), showToast: true,
      passwordError: validation('password', this.state.password)
    },
      () => {
        setTimeout(() => {
          this.setState({showToast: false});
        }, 2500);
      },
    );
    if (this.state.email == '') {
      alert('please fill email ');
    } else if (this.state.emailError != null) {
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
          colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View>
              
              <View style={CommonStyle.boxContainer}>
              {/* <TabNav/> */}
              <View style={styles.tabScreen}>
        <View style={{borderBottomWidth:4,borderBottomColor:'#62b34c',width:'50%'}}>
        <Label bolder color={Color.DARK_BLUE} align='center'  mb={5}>Sign In</Label>

        </View>
        {/* <Label bolder color={Color.DARK_MODERATE_BLUE} >Sign Up</Label> */}
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(Routes.SignUp)}><Label bolder color={Color.DARK_MODERATE_BLUE} align='right'>Sign Up</Label></TouchableOpacity>

      </View>
                <Label color={Color.BLACK} xlarge>
                  Welcome
                </Label>

                <Label color={Color.DARK_GRAY} mt={5} small>
                  Enter your email id to proceed
                </Label>

                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({email: text})}
                />
                <InputContainer
                  iconName="lock"
                  placeholder="Enter Password"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({passwod: text})}
                />

                <SubmitButton
                  onPress={() => {
                    // this.check_IsNull();
                    this.handleOnSubmit();
                  }}
                  buttonText="Sign In"
                />
                <TouchableOpacity style={{marginTop:10, alignSelf:'flex-end'}} onPress={()=>this.props.navigation.navigate(Routes.ForgotPassword)}>
                  <Label small color={Color.DARK_BLUE} align='right' me={5}>Forgot Password ?</Label>
                </TouchableOpacity> 
                <OrSection />

                <View style={{flexDirection:'row'}}>
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
               
                  <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate(Routes.SignUp)}>
                    <Label
                      mt={15}
                      color={Color.BLUE_MAGENTA}
                      small>
                      Don't have an account?{' '}
                    </Label>
                    <Label  color={Color.DARK_BLUE}
                      small mt={15}>
                      SIGN UP
                    </Label>
                  </TouchableOpacity>
                
              </View>
            </View>
            <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text="Please fill all the Fields Properly" />
              ) : (
                null
              )}
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SignIn;
