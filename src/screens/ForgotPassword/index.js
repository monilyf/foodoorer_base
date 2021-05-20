// import React, { Component } from 'react'
// import { Text, View,Image } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
// import { SubmitButton, InputContainer, Label } from '../../component'
// import  Color  from '../../utils/Color'
// import styles from './style'
// import * as Animatable from 'react-native-animatable'
// import Routes from '../../router/routes'
// import CommonStyle from '../../utils/CommonStyle'

// export class ForgotPassword extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <LinearGradient 
//                colors={['#29B76D', '#2A97A6']}
//                     start={{x: 0, y: 1}}
//                     end={{x: 1, y: 0}}
//                     style={CommonStyle.linerGradient}>

//                 <View style={styles.subContainer}>
//                     <Label></Label>
//                 </View>        
//                 <Animatable.View 
//                  style={styles.footer}    

//                  animation="fadeInUpBig"
//                  iterationDelay={400}> 
//                 <Image source={require("../../assets/images/foodoorer2.png")} style={{width:100,height:100,marginTop:20,marginLeft:125}}/>  
//                 <Label xxlarge ms={75} mt={20} mb={10}>Forgot Password</Label>    
//                 <Label small ms={25}>Enter Your Email For the Verification Process We Will send 4 Digits code to Your Email</Label>
//                 <View style={{marginTop:20,marginLeft:15}}>
//                 <InputContainer
//                     iconName='email'
//                     placeholder='Enter Email'
//                     iconColor={Color.BLACK}
//                 //   onChangeText={text => this.setState({email: text})}
                    
//                 />


//                 </View>
//                 <View style={{marginTop:20}}>
//                 <SubmitButton buttonText="Continue" onPress={()=>{navigation.navigate(Routes.SignIn)}}/>
//                 </View>
//                 </Animatable.View> 
//                 </LinearGradient>
//             </View>
//         )
//     }
// }

// export default ForgotPassword

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
  RoundButton,
  Label,
  ToastMessage,
 
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
// import Toast from 'react-native-toast-message'
import logo from '../../assets/images/foodoorer2.png'
import ThemeUtils from '../../utils/ThemeUtils';

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
   
    let emailError ;
        let isValid ;
        emailError = validation("email",this.state.email)
       
        if(emailError !=null){
            console.log("error")
            this.setState({
                emailError:emailError,
                showToast:true
                    },() => {
                        setTimeout(() => {
                          this.setState({showToast: false});
                        }, 2500);
               
            })
            isValid=false;
        }
        else{
          console.log('done')
            this.setState({
                emailError:""
            })
            isValid=true;
        }
        if(isValid){
            // this.props.navigation.navigate(Routes.OtpScreen)
            this.props.navigation.navigate(Routes.ResetPassword)
        }
      
       
    }


  render(props) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Color.GRADIENT2, Color.GRADIENT1]}

          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View >
             
              <View style={CommonStyle.boxContainer}>
                {/* <Image source={logo} style={{alignSelf:'center',marginBottom:15,height:ThemeUtils.relativeHeight(12),width:ThemeUtils.relativeWidth(50)}}/> */}
                <Label color={Color.BLACK} align='center' xlarge>
                  Forgot your password?
                </Label>

                <Label color={Color.DARK_GRAY} mt={10} mb={15}  small>
                  Enter your email for the verfication process.
                  we will send 4 digits code to your email.
                </Label>

                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  iconColor={Color.BLACK}
                  onChangeText={text => this.setState({email: text})}
                />
                {this.state.emailError!=null?<Label small mt={5} mb={5} color={Color.ERROR}>{this.state.emailError}</Label>:null}

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
