import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../utils/Color';
import {
  InputContainer,
  SubmitButton,
  Label,
  Logo,
  ToastMessage,Error,
  StatusBars
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import * as Animatable from 'react-native-animatable'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import ThemeUtils  from '../../utils/ThemeUtils';

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
      // showToast: false,
    };
  }

  handleOnSubmit=()=>{
    let emailError,nameError,phoneError;
    let isValid;
    emailError = validation('email',this.state.email);
    nameError = validation('name',this.state.name);
    phoneError = validation('phoneNo',this.state.phone)

    if (emailError!=null || nameError!=null || phoneError!=null ){
      console.log("validation Error in Sign Up")
      this.setState(
        {
          emailError:emailError,
          nameError:nameError,
          phoneError:phoneError,
          // showToast: true
        },  
    //      () => {
    //            setTimeout(() => {
    //              this.setState({showToast: false});
    //            }, 2500);
    //  }
      );
      isValid = false;
    }
    else{
      console.log('Sign Up Done')
      this.setState({
        emailError:'',
        nameError:'',
        phoneError:'',
      });
      isValid=true;
    }
    if(isValid){
      let register_data = {name:this.state.name,email:this.state.email,phone:this.state.phone}
      AsyncStorage.setItem('register_data',JSON.stringify(register_data))
      AsyncStorage.setItem('OnBoarding','true')
      console.log('register_data:',register_data)
      this.props.navigation.navigate(Routes.SignIn)
    }
  }
 
  render(props) {
    return (
      <SafeAreaView style={CommonStyle.container}>
      <StatusBars hidden={true}/>

        <LinearGradient
          // colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
<KeyboardAwareScrollView
          style={{flex:1}}
          // contentContainerStyle={{height:150}}
          resetScrollToCoords={{x: 0, y: 0}}
          scrollEnabled={true}
          enableResetScrollToCoords={false}
          keyboardVerticalOffset={0}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="always">
          {/* <KeyboardAvoidingView
          
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}> */}
            <View style={{marginTop: 50,alignItems:'center'}}>
            
            <Animatable.View animation="fadeInLeft" iterationDelay={400}>

             <Logo/>
              <Label xxlarge align="center" bolder color={Color.WHITE}>
                Welcome to All
              </Label>
              </Animatable.View>
              <Animatable.View animation="fadeInUpBig" iterationDelay={400}>

              <View style={CommonStyle.boxContainer}>
              <View
                style={CommonStyle.tabScreen}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.push(Routes.SignIn);
                  }}>
                  <Label large ph={30}  bolder color={Color.DARK_MODERATE_BLUE}>
                    Sign In
                  </Label>
                </TouchableOpacity>
                  <Label large ph={30} border={4} pb={5} borderColor={Color.APPLE} bolder color={Color.DARK_BLUE}>
                    Sign Up
                  </Label>
               
              </View>
              {/* <KeyboardAwareScrollView
          // style={{height:210}}
          // contentContainerStyle={{height:150}}
          resetScrollToCoords={{x: 0, y: 1}}
          scrollEnabled={true}
          enableResetScrollToCoords={false}
          keyboardVerticalOffset={0}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="always"> */}
          <View>
                <InputContainer
                  iconName="person"
                  placeholder="Enter name"
                  iconColor={Color.PRIMARY}
                  // borderColor={this.state.nameError!=null ? Color.Error : Color.WHITE}
                  // style={{borderColor: this.state.nameError!=null ? Color.Error : Color.WHITE}}
                  onChangeText={text => this.setState({name: text})}
                />
                {this.state.nameError != null ? (
                  <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                    {this.state.nameError}
                  </Label>
                ) : <Label></Label>}
                  {/* <Error>{this.state.nameError}</Error> */}

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
                ) : <Label></Label>}

                <InputContainer
                  iconName="phone-android"
                  placeholder="Enter mobile "
                  iconColor={Color.PRIMARY}
                  // maxLength={10}
                  keyboardType='phone-pad'
                  onChangeText={text => this.setState({phone: text})}
                />
                {this.state.phoneError != null ? (
                  <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                    {this.state.phoneError}
                  </Label>
                ) : <Label></Label>}
                
                </View>
                {/* </KeyboardAwareScrollView> */}

                <SubmitButton
                  onPress={() => {
                    this.handleOnSubmit();
                  }}
                  buttonText="Sign Up"
                />
               
              </View>
              </Animatable.View>
            </View>
            {/* <View >
              {this.state.showToast ? (
                <ToastMessage text="Please fill all the Fields Properly" />
              ) : (
                null
              )}
            </View> */}
            {/* <BottomSheet/> */}
          {/* </KeyboardAvoidingView> */}
          {/* </TouchableWithoutFeedback> */}
          </KeyboardAwareScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SignUp;
// npm i react-native-keyboard-aware-view --save