import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Routes from '../../router/routes';
import Color from '../../utils/Color';
import {Label} from '../../component'
import ThemeUtils from '../../utils/ThemeUtils';




const Onboarding = ({navigation}) => {
    const slides = [
        {
          key: 's1',
          text: "Order to Keep Stomach Happy & Healthy",
          title: "Select a Restaurant\nOrder Your Food",
          image: require('../../assets/images/Orderfood.png'),
        },
        {
          key: 's2',
          title: 'Add Address and\nChoose Payment Method',
          text: 'Secure Payment & Food at your door step',
          image : require('../../assets/images/img2.png'),
        },
        {
          key: 's3',
          title: 'Food Delivered\nTo your home',
          text: 'Get food delivery in the fastest time ',
          image : require('../../assets/images/FoodDelivery.png')
        },
       
      ];

  const onDone = () => {
    props.onDone();
  };

  const RenderNextButton = () => {
    return (
     
      <View style={styles.buttonCircle}>

      <Icon name="arrow-right" style={{ fontSize: 25, color: Color.WHITE }} />

    </View>
    );
  };

  const RenderDoneButton = () => {
    return (
  
      <TouchableOpacity onPress={() => navigation.navigate(Routes.SignIn)}>
        <View style={styles.buttonCircle}>
          <Icon name="thumbs-up" style={{ fontSize: 25, fontWeight: 'bold', color: Color.WHITE }} />

        </View>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={styles.container}>
     <Label large bolder color={Color.DARK_MODERATE_BLUE} align='center'>{item.title}</Label>

        <Image
          style={styles.introImageStyle}
          source={item.image} resizeMode='contain' />
      
      <Label align='center' normal color={Color.DARK_MODERATE_BLUE}>{item.text}</Label>

      </View>
    );
  };

  return (
   
       <View style={{flex:1}}>
       <StatusBar hidden={true}/>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
          dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        />
        </View>
   
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: 
    {
      flex: 1,                
      backgroundColor:Color.WHITE,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingBottom: 100,
    
  }, 
  buttonCircle: {
    marginTop: 4,
    width: 40,
    height: 40,
    backgroundColor: Color.APPLE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  introImageStyle: {
    // width: '100%',
    // height: 200,
    width:ThemeUtils.relativeWidth(90),
    height:ThemeUtils.relativeHeight(30)
  },
  dotStyle: {
    backgroundColor: Color.DARK_GRAY,
  },
  activeDotStyle: {
    backgroundColor: Color.APPLE,
  },
 
});