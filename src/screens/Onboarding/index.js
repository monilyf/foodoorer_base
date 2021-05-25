import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
// import EntypoIcon from 'react-native-vector-icons/Entypo'
import Routes from '../../router/routes';
import {Label,StatusBars} from '../../component'
import ThemeUtils from '../../utils/ThemeUtils';
import Color from '../../utils/Color';

const Onboarding = ({navigation}) => {
    const slides = [
        {
          key: 's1',
          title: "Find Foods You Want",
          text: "Discover the best foods from nearest restaurants.",
          image: require('../../assets/images/Orderfood.png'),
        },
        {
          key: 's2',
          title: 'Live Tracking',
          text: 'Real time tracking of your food order on the app.',
          image : require('../../assets/images/img2.png'),
        },
        {
          key: 's3',
          title: 'Fast Delivery',
          text: 'Fast delivery to your home, office and wherever you are. ',
          image : require('../../assets/images/FoodDelivery.png')
        },
       
      ];

  const onDone = () => {
    props.onDone();
  };

  const RenderNextButton = () => {
    return (
     
      <View style={styles.buttonCircle}>

      <Icon name="arrow-right" style={{ fontSize: 25, color:Color.WHITE }} />

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
     {/* <Label large bolder color={Color.DARK_MODERATE_BLUE} align='center'>{item.title}</Label> */}
        <Image
          style={styles.introImageStyle}
          source={item.image} 
            resizeMode='contain'
          />
     <Label xlarge bolder color={Color.DARK_MODERATE_BLUE} align='center' letterSpacing={1}  >{item.title}</Label>
         
      <View style={{marginHorizontal:20}}>
      <Label align='center' large color={Color.DARK_MODERATE_BLUE} mb={10}  >{item.text}</Label>
      </View>
      </View>
    );
  };

  return (  
       <View style={{flex:1}}>
       <StatusBars hidden={true}/>
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
    width:ThemeUtils.relativeWidth(75),
    height:ThemeUtils.relativeHeight(30),
    marginTop:40
  },
  dotStyle: {
    // marginBottom:'0%',
    backgroundColor: Color.DARK_GRAY,
  },
  activeDotStyle: {
    // marginBottom:'0%',
    backgroundColor: Color.APPLE,
  },
 
});