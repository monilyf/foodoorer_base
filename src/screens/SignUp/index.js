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
  OrSection,
  SubmitButton,
  Label,
  SocialButton,
  ToastMessage,
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
// import Toast from 'react-native-toast-message'

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name:'',
        nameError:'',
      email: '',
      emailError: '',
      phone:'',
      phoneError:'',
      showToast: false,
    };
  }

 
  handleOnSubmit = () => {
   
    let emailError, nameError, phoneError;
    let isValide = true;

    nameError = validation('name', this.state.name);
    emailError = validation('email', this.state.email);
    phoneError = validation('phone', this.state.phone);
    
    if(nameError!=null || emailError!=null || phoneError!=null){
        console.log('errors ')
        this.setState({
            nameError:nameError,
            emailError:emailError,
            phoneError:phoneError,
            showToast:true
        },() => {
            setTimeout(() => {
              this.setState({showToast: false});
            }, 2500);
          },)
    }
  
}

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
             
              <View style={styles.loginContainer}>
              <View style={styles.tabScreen}>
        <Label bolder color={Color.DARK_MODERATE_BLUE} >Sign In</Label>
        <Label bolder color={Color.DARK_BLUE} border>Sign Up</Label>
        {/* <View></View> */}
      </View>
                <Label color={Color.BLACK} xlarge>
                  Welcome to all
                </Label>

                <Label color={Color.DARK_GRAY} mt={5} small>
                  Enter your email id to proceed
                </Label>

                <InputContainer
                  iconName="person"
                  placeholder="Enter Your Name"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({name: text})}
                />

                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({email: text})}
                />

<InputContainer
                  iconName="phone"
                  placeholder="Enter Mobile Number"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({phone: text})}
                />

                <SubmitButton
                  onPress={() => {
                    // this.check_IsNull();
                    this.handleOnSubmit();
                  }}
                  buttonText="Sign Up"
                />
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate(Routes.SignIn)}>
                    <Label
                      mt={15}
                      color={Color.BLUE_MAGENTA}
                      small>
                      Already have an account?{' '}
                    </Label>
                    <Label  color={Color.DARK_BLUE}
                      small mt={15}>
                      SIGN IN
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

export default SignUp;
