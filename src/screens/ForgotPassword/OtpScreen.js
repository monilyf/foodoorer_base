import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import otpStyle from './style'
import Color from '../../utils/Color';
import {
  Label,
  RoundButton,StatusBars
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';


export class OtpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: '',
      otpError: '',
      showToast: false,
    };
  }

  handleOnSubmit = () => {
  
    let otpError ;
        let isValid ;
        otpError = validation("otp",this.state.otp)
       
        if(otpError !=null){
            console.log("error")
            this.setState({
                otpError:otpError,
                showToast:true,
                
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
                otpError:""
            })
            isValid=true;
        }
        if(isValid){
            this.props.navigation.navigate(Routes.ResetPassword)
        }
      

  };

  render(props) {
    return (
      <SafeAreaView style={CommonStyle.container}>
      <StatusBars hidden={true}/>
        <LinearGradient
          // colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
          colors={[Color.GRADIENT3,Color.GRADIENT4 ]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View>
              <View style={CommonStyle.boxContainer}>
                {/* <Image
                  source={logo}
                  style={{
                    alignSelf: 'center',
                    marginBottom: 15,
                    height: ThemeUtils.relativeHeight(12),
                    width: ThemeUtils.relativeWidth(50),
                  }}
                /> */}
                <Label color={Color.BLACK} xlarge>
                  Enter 4 Digits Code
                </Label>

                <Label color={Color.DARK_GRAY} mt={10} mb={10} small>
                  Enter the 4 digits code that you received on your email.
                </Label>
                
                <View style={{marginVertical:40}}>
                 <View style={otpStyle.otpContainer}>
                   <TextInput 
                     maxLength={1}
                     style={otpStyle.otpBox}
                     onChangeText={(text)=>{
                      // console.log('this.state.otp==',text,this.state.otp)

                       this.setState({otp:this.state.otp+text})
                      //  console.log('new this.state.otp=',this.state.otp)
                       }}
                   />
                   <TextInput 
                    maxLength={1}
                    style={otpStyle.otpBox}
                    onChangeText={(text)=>{
                      // console.log('this.state.otp==',text,this.state.otp)
                       this.setState({otp:this.state.otp+text})
                      //  console.log('new this.state.otp=',this.state.otp)
                       }}
                    />
                    <TextInput
                      maxLength={1}
                      style={otpStyle.otpBox}
                      onChangeText={(text)=>{
                      //  console.log('this.state.otp==',text,this.state.otp)
                       this.setState({otp:this.state.otp+text})
                      //  console.log('new this.state.otp=',this.state.otp)
                       }}
                    />
                    <TextInput
                      maxLength={1}
                      style={otpStyle.otpBox}
                      onChangeText={(text)=>{
                      //  console.log('this.state.otp==',text,this.state.otp)
                       this.setState({otp:this.state.otp+text})
                      //  console.log('new this.state.otp=',this.state.otp)
                       }}
                      />
                     </View>
                     <TouchableOpacity style={{marginTop:50,alignSelf:'center'}} onPress={()=>this.setState({otp:''})}>
                  <Label color={Color.PRIMARY} large>Reset</Label>
                 </TouchableOpacity>
                </View>

                <RoundButton
                  onPress={() => {
                    this.handleOnSubmit();
                  }}
                  // mt={20}
                  backgroundColor={Color.DARK_CYAN}>
                  Continue
                </RoundButton>
              </View>
            </View>
            {/* <View style={{marginVertical: 30}}>
              {this.state.showToast ? (
                <ToastMessage text={this.state.otpError} />
              ) : null}
            </View> */}
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default OtpScreen;

