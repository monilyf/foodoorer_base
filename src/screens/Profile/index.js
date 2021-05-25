import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {StatusBars, Label} from '../../component';
import Color from '../../utils/Color';
import CommonStyle from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const Profile = () => {
  return (
    <SafeAreaView>
      <StatusBars
        hidden={false}
        barStyle="dark-content"
        backgroundColor={Color.WHITE}
      />
      <View style={styles.container}>
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
            <Label small color={Color.ERROR} align="right">
              EDIT
            </Label>
          </View>
        </View>

        <View style={styles.subContainer}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')} 
            style={{marginHorizontal:30,padding:12}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="home" color={Color.DARK_GRAY} size={30} />
              <Label small color={Color.PRIMARY} ms={25}>
                My Orders
              </Label>
            </View>
          </TouchableHighlight>
         <View style={CommonStyle.endLine}></View>
         <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')} 
            style={{marginHorizontal:30,padding:12}}>
           <View style={styles.subContainerData}>
              <Icon name="home" color={Color.DARK_GRAY} size={30} />
              <Label small color={Color.PRIMARY} ms={25}>
                Manage Addresses
              </Label>
            </View>
          </TouchableHighlight>
         <View style={CommonStyle.endLine}></View>
         <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')} 
            style={{marginHorizontal:30,padding:12}}>
            <View style={styles.subContainerData}>
              <Icon name="home" color={Color.DARK_GRAY} size={30} />
              <Label small color={Color.PRIMARY} ms={25}>
                Payments
              </Label>
            </View>
          </TouchableHighlight>
         <View style={CommonStyle.endLine}></View>
         <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')} 
            style={{marginHorizontal:30,padding:12}}>
            <View style={styles.subContainerData}>
              <Icon name="home" color={Color.DARK_GRAY} size={30} />
              <Label small color={Color.PRIMARY} ms={25}>
                Favourites
              </Label>
            </View>
          </TouchableHighlight>
         <View style={CommonStyle.endLine}></View>
         <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')} 
            style={{marginHorizontal:30,padding:12}}>
            <View style={styles.subContainerData}>
              <Icon name="home" color={Color.DARK_GRAY} size={30} />
              <Label small color={Color.PRIMARY} ms={25}>
                Help
              </Label>
            </View>
          </TouchableHighlight>
         <View style={CommonStyle.endLine}></View>
         <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')} 
            style={{marginHorizontal:30,padding:12}}>
            <View style={styles.subContainerData}>
              <Icon name="home" color={Color.DARK_GRAY} size={30} />
              <Label small color={Color.PRIMARY} ms={25}>
                Logout
              </Label>
            </View>
          </TouchableHighlight>
         {/* <View style={CommonStyle.endLine}></View> */}
         {/* <ProfileNavItem name='My Order'/> */}
         
         
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
