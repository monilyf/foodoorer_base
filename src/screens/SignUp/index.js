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
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
// import Toast from 'react-native-toast-message'
import logo from '../../assets/images/foodoorer2.png';
import ThemeUtils from '../../utils/ThemeUtils';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      showToast: false,
    };
  }

  handleOnSubmit = () => {
    let emailError, nameError, phoneError;
    let isValide = true;

    nameError = validation('name', this.state.name);
    emailError = validation('email', this.state.email);
    phoneError = validation('phoneNo', this.state.phone);

    if (nameError != null || emailError != null || phoneError != null) {
      console.log('errors ');
      this.setState(
        {
          nameError: nameError,
          emailError: emailError,
          phoneError: phoneError,
          showToast: true,
        },
        () => {
          setTimeout(() => {
            this.setState({showToast: false});
          }, 2500);
        },
      );
    }
  };

  render(props) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          // colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
          colors={['#6DC999', '#73BFC9']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View style={{marginTop: -50}}>
              <Image
                source={logo}
                style={{
                  alignSelf: 'center',
                  marginBottom: 15,
                  height: ThemeUtils.relativeHeight(12),
                  width: ThemeUtils.relativeWidth(50),
                }}
              />
              <Label xxlarge align="center" bolder color={Color.WHITE}>
                Welcome to All
              </Label>
              <View style={CommonStyle.boxContainer}>
                <View style={styles.tabScreen}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(Routes.SignIn)
                    }>
                    <Label
                      bolder
                      color={Color.DARK_MODERATE_BLUE}
                      align="right">
                      Sign In
                    </Label>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 4,
                      borderBottomColor: Color.APPLE,
                      width: '45%',
                    }}>
                    <Label bolder color={Color.DARK_BLUE} align="center" mb={5}>
                      Sign Up
                    </Label>
                  </View>
                </View>

                <InputContainer
                  iconName="person"
                  placeholder="Enter Your Name"
                  iconColor={Color.PRIMARY}
                  onChangeText={text => this.setState({name: text})}
                />
                {this.state.nameError != null ? (
                  <Label small mt={5} mb={5} color={Color.ERROR}>
                    {this.state.nameError}
                  </Label>
                ) : null}

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

                <InputContainer
                  iconName="phone"
                  placeholder="Enter Mobile Number"
                  iconColor={Color.PRIMARY}
                  onChangeText={text => this.setState({phone: text})}
                />
                {this.state.phoneError != null ? (
                  <Label small mt={5} mb={5} color={Color.ERROR}>
                    {this.state.phoneError}
                  </Label>
                ) : null}

                <SubmitButton
                  onPress={() => {
                    // this.check_IsNull();
                    this.handleOnSubmit();
                  }}
                  buttonText="Sign Up"
                />
                {/* <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate(Routes.SignIn)}>
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
                  </TouchableOpacity> */}
              </View>
            </View>
            {/* <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text="Please fill all the Fields Properly" />
              ) : (
                null
              )}
            </View> */}
            {/* <BottomSheet/> */}
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SignUp;
