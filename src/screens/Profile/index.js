import React, {useState, Component} from 'react';
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {StatusBars, Label, InputContainer, SubmitButton} from '../../component';
import Color from '../../utils/Color';
import CommonStyle from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Routes from '../../router/routes'
import ThemeUtils from '../../utils/ThemeUtils';
import {validation} from '../../utils/ValidationUtils';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
    };

    handleOnSubmit = () => {
      let emailError, phoneError;
      let isValid;
      emailError = validation('email', this.state.email);
      phoneError = validation('phoneNo', this.state.phone);

      if (emailError != null || phoneError != null) {
        console.log('validation Error in Edit Account');
        this.setState({
          emailError: emailError,
          phoneError: phoneError,
        });
        isValid = false;
      } else {
        console.log('Edit Account Done');
        this.setState({
          emailError: '',
          phoneError: '',
        });
        isValid = true;
      }
      if (isValid) {
        // update code herte to save changes
        this.setState({modalVisible:!this.state.modalVisible})
        // this.props.navigation.push(Routes.Profile);
      }
    };
  }
  render() {
    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE}
        />
        <View
          style={[
            styles.container,
            {
              backgroundColor: this.state.modalVisible
                ? Color.DARK_GRAY
                : Color.WHITE,
            },
          ]}>
          <View style={styles.profileHeader}>
            <View>
              <Label bolder large color={Color.BLACK}>
                Steve Smith
              </Label>
              <Label color={Color.DARK_GRAY} small>
                stevesmith@gmail.com
              </Label>
            </View>
            <View style={{alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({modalVisible: !this.state.modalVisible})
                }>
                <Label small color={Color.ERROR} align="right">
                  {' '}
                  EDIT
                </Label>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.subContainer}>
            {/* <ProfileNavItem/> */}
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Color.HIGHLIGHT_COLOR}
              onPress={() => alert('Pressed!')}
              style={{marginHorizontal: 30, padding: 12}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* <Icon name="home" color={Color.DARK_GRAY} size={30} /> */}
                <Image
                  source={require('../../assets/icons/profile_screen_icon/order.png')}
                />
                <Label small color={Color.PRIMARY} ms={25}>
                  My Orders
                </Label>
              </View>
            </TouchableHighlight>
            <View style={CommonStyle.endLine}></View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Color.HIGHLIGHT_COLOR}
              onPress={() => alert('Pressed!')}
              style={{marginHorizontal: 30, padding: 12}}>
              <View style={styles.subContainerData}>
                {/* <Icon name="home" color={Color.DARK_GRAY} size={30} /> */}
                <Image
                  source={require('../../assets/icons/profile_screen_icon/address.png')}
                />

                <Label small color={Color.PRIMARY} ms={25}>
                  Manage Addresses
                </Label>
              </View>
            </TouchableHighlight>
            <View style={CommonStyle.endLine}></View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Color.HIGHLIGHT_COLOR}
              onPress={() => alert('Pressed!')}
              style={{marginHorizontal: 30, padding: 12}}>
              <View style={styles.subContainerData}>
                {/* <Icon name="home" color={Color.DARK_GRAY} size={30} /> */}
                <Image
                  source={require('../../assets/icons/profile_screen_icon/payment.png')}
                />

                <Label small color={Color.PRIMARY} ms={25}>
                  Payments
                </Label>
              </View>
            </TouchableHighlight>
            <View style={CommonStyle.endLine}></View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Color.HIGHLIGHT_COLOR}
              onPress={() => alert('Pressed!')}
              style={{marginHorizontal: 30, padding: 12}}>
              <View style={styles.subContainerData}>
                {/* <Icon name="home" color={Color.DARK_GRAY} size={30} /> */}
                <Image
                  source={require('../../assets/icons/profile_screen_icon/favourite.png')}
                />

                <Label small color={Color.PRIMARY} ms={25}>
                  Favourites
                </Label>
              </View>
            </TouchableHighlight>
            <View style={CommonStyle.endLine}></View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Color.HIGHLIGHT_COLOR}
              onPress={() => alert('Pressed!')}
              style={{marginHorizontal: 30, padding: 12}}>
              <View style={styles.subContainerData}>
                <Image
                  source={require('../../assets/icons/profile_screen_icon/help.png')}
                />
                <Label small color={Color.PRIMARY} ms={25}>
                  Help
                </Label>
              </View>
            </TouchableHighlight>
            <View style={CommonStyle.endLine}></View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Color.HIGHLIGHT_COLOR}
              onPress={() => alert('Pressed!')}
              style={{marginHorizontal: 30, padding: 12}}>
              <View style={styles.subContainerData}>
                <Image
                  source={require('../../assets/icons/profile_screen_icon/logout.png')}
                />

                <Label small color={Color.PRIMARY} ms={25}>
                  Logout
                </Label>
              </View>
            </TouchableHighlight>
            {/* <View style={CommonStyle.endLine}></View> */}
            {/* <ProfileNavItem name='?My Order'/> */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() =>
                this.setState({modalVisible: !this.state.modalVisible})
              }>
              <View style={styles.editAccount}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Label color={Color.PRIMARY} bolder mb={12} large>
                    EDIT ACCOUNT
                  </Label>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({modalVisible: !this.state.modalVisible})
                    }>
                    <Icon
                      name="close"
                      size={25}
                      style={{alignSelf: 'center'}}
                      color={Color.PRIMARY}
                    />
                  </TouchableOpacity>
                </View>

                <InputContainer
                  label="Mobile number"
                  iconName="phone-android"
                  placeholder="9898656656"
                  iconColor={Color.PRIMARY}
                  // maxLength={10}
                  keyboardType="phone-pad"
                  onChangeText={text => this.setState({phone: text})}
                />
                {this.state.phoneError != null ? (
                  <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                    {this.state.phoneError}
                  </Label>
                ) : <Label></Label>}
                <InputContainer
                  label="Email"
                  iconName="email"
                  placeholder="loremipsum@email.com"
                  keyboardType="email-address"
                  iconColor={Color.PRIMARY}
                  onChangeText={text => this.setState({email: text})}
                />
                {this.state.emailError != null ? (
                  <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                    {this.state.emailError}
                  </Label>
                ) : <Label></Label>}
                <SubmitButton
                  onPress={() => 
                    handleOnSubmit()
                  }
                  buttonText="SAVE"
                />
              </View>
            </Modal>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Profile;
