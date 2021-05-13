
// Intro slider with Custom Buttons

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import AppIntroSlider to use it
// import Icon from 'react-native-ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Routes from '../../router/routes';
import Color from '../../utils/Color';
import {Label} from '../../component'





const AppIntroScreen = ({navigation}) => {
    const slides = [
        {
          key: 's1',
          text: "Order to Keep Stomach Happy & Healthy",
          title: "Select a Restaurant\nOrder Your Food",
          image: require('../../assets/images/Orderfood.png'),
          // backgroundColor: '#20d2bb' // '#20d2bb',
        },
        {
          key: 's2',
          title: 'Add Address and\nChoose Payment Method',
          text: 'Secure Payment & Food at your door step',
          image : require('../../assets/images/payment.png'),
          // backgroundColor: '#20d2bb',
        },
        {
          key: 's3',
          title: 'Food Delivered\nTo your home',
          text: 'Get food delivery in the fastest time ',
          image : require('../../assets/images/FoodDelivery.png')
          // backgroundColor: '#22bcb5',
        },
       
      ];
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
      {/* <Text style={{color: '#28388f',fontSize:18,marginTop:10}}>Next</Text> */}
        
        <FeatherIcon
          name="arrow-right"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{color: 'red'}}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.SignIn)} >
      <View style={styles.buttonCircle}>
      {/* <FeatherIcon name='eye-off' size={20} style={styles.showIcon}  /> */}
      
        <FeatherIcon
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{color: 'green'}}
        />
      </View>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:Color.WHITE,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        {/* <Text style={styles.introTitleStyle}>
          {item.title}
        </Text> */}
        <Label style={styles.introTitleStyle}>{item.title}</Label>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        {/* <Text style={styles.introTextStyle}>
          {item.text}
        </Text> */}
        <Label style={styles.introTextStyle}>{item.text}</Label>

      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        null
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
        />
      )}
    </>
  );
};

export default AppIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: '100%',
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    // color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    color:'#28388f'

  },
  introTitleStyle: {
    fontSize: 25,
    // color: 'white',
    color:'#28388f',

    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  buttonCircle: {
    marginTop:4,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

