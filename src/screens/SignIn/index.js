import React, {Component} from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View,TouchableOpacity,Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Color from '../../utils/Color'
import {InputContainer,OrSection,SubmitButton,Label,SocialButton} from '../../component'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils'
import Routes from '../../router/routes'
import CommonStyle from '../../utils/CommonStyle'

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError:''
    };
  }
 

  handleOnSubmit=()=>{
    this.setState({emailError:validation('email',this.state.email)})
    if (this.state.email == '') {
      alert('please fill email ');
     
    }
    else if (this.state.emailError!=null){
     
      // alert(this.state.emailError)
      this.props.navigation.navigate(Routes.SignIn);
    }
    else{
      login_data = 'login';
      AsyncStorage.setItem('login_data', JSON.stringify(login_data));
      console.log('login_data from :', login_data);
  
      this.props.navigation.navigate(Routes.Auth, {email: this.state.email});
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
                {/* <Text style={styles.welcomeText}>Welcome</Text> */}
                <Label color={Color.BLACK} xxlarge>Welcome</Label>
                {/* <Text style={styles.infoText}>
                  Enter your email id to proceed
                </Text> */}
                <Label color={Color.DARK_GRAY} mt={5} small>
                  Enter your email id to proceed
                </Label>

                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  onChangeText={text => this.setState({email: text})}
                />
              
                  {/* <Text style={CommonStyle.errorMsg}>{this.state.emailError}</Text> */}
                  <Label color={Color.ERROR} ms={20} xsmall>{this.state.emailError}</Label>
             

                <SubmitButton
                  onPress={() => {
                    // this.check_IsNull();
                    this.handleOnSubmit()
                  }}
                  buttonText="Sign In"
                />
                <OrSection/>
{/*              
                  <TouchableOpacity style={styles.btnPrimary}>
                    <Image style={styles.btnImage} source={require('../../assets/images/facebook.png')}/>
                    <Text style={styles.btnName}>Sign In with FaceBook</Text>
                  </TouchableOpacity> */}
                  <SocialButton buttonText='Sign In with Facebook' backgroundColor='red' image={require('../../assets/images/facebook.png')}/>
                  <View style={{margin:5}}></View>
                  {/* <TouchableOpacity style={styles.btnPrimary}>
                    <Image style={styles.btnImage} source={require('../../assets/images/google.png')}/>
                    <Text style={styles.btnName}>Sign In with Google</Text>
                  </TouchableOpacity> */}
                  <SocialButton buttonText='Sign In with Google' image={require('../../assets/images/google.png')}/>
                  
              </View>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SignIn;
