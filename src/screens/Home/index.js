import React, {Component} from 'react';
import {FlatList, Image, SafeAreaView, View} from 'react-native';
import {Label, StatusBars} from '../../component';
import Color from '../../utils/Color';
import styles from './style';
import ThemeUtils from '../../utils/ThemeUtils';
import Icon from 'react-native-vector-icons/Feather';
import CommonStyle from '../../utils/CommonStyle';

const category_Item = [
  {id: 1, title: 'Burger', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 2, title: 'Dosa', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 3, title: 'Pizza', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 4, title: 'Pasta', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 5, title: 'Khaman', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 6, title: 'Bhel', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 7, title: 'Diet', image: require('../../assets/images/home_screen/diet.jpg')},
];

const popular_Item = [
  {
    id: 1,
    title: 'Grilled Chicken',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 2,
    title: 'Burger',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 3,
    title: 'Pizza',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 4,
    title: 'Pasta',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 5,
    title: 'Khaman',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 6,
    title: 'Bhel',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 7,
    title: 'Diet',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/diet.jpg'),
  },
];

export class Home extends Component {
  keyExtractor = (item, index) => item.id;

  renderTopCategories = item => {
    return (
      <View style={{flexDirection: 'column', marginHorizontal: 5}}>
        <Image
          style={{
            borderRadius: 6,
            height: ThemeUtils.relativeHeight(9),
            width: ThemeUtils.relativeWidth(24),
          }}
          // resizeMode="contain"
          source={item.image}
        />
        <Label small bolder mt={5} ms={30} color={Color.PRIMARY}>
          {item.title}
        </Label>
      </View>
    );
  };

  renderPopularItems = item => {
    return (
      <View
        style={{
          backgroundColor: Color.BOX_BG,
          flexDirection: 'row',
          padding: 10,
          borderRadius: 6,
          marginHorizontal: 5,
        }}>
        <Image
          style={{
            borderRadius: 6,
            height: ThemeUtils.relativeHeight(12),
            width: ThemeUtils.relativeWidth(22),
          }}
          // resizeMode="contain"
          source={item.image}
        />
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'flex-start',
            marginHorizontal: 16,
          }}>
          <Label color={Color.PRIMARY} bolder>
            {item.title}
          </Label>
          <Label xsmall bolder color={Color.DARK_GRAY}>
            {item.by}
          </Label>
          <View
            style={{
              width: ThemeUtils.relativeWidth(12),
              borderWidth: 1,
              opacity: 0.3,
              borderColor: Color.DARK_GRAY,
              marginVertical: 10,
            }}></View>
          <Label small bolder color={Color.PRIMARY}>
            {item.price}
          </Label>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE}
        />
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Label large bolder color={Color.PRIMARY} mb={20}>
              Top Categories
            </Label>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Icon name="filter" size={20} color={Color.DARK_GRAY} />
              <Label color={Color.DARK_GRAY} ms={10} small>
                Filter
              </Label>
            </View>
          </View>
          <View style={{width: '100%', flexDirection: 'row', marginLeft: 15}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={category_Item}
              renderItem={({item}) => this.renderTopCategories(item)}
              keyExtractor={this.keyExtractor}
            />
          </View>

          <View
            style={{
              width: '100%',
              borderWidth: 0.2,
              borderColor: Color.DARK_GRAY,
              marginVertical: 15,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Label large bolder color={Color.PRIMARY} mb={20}>
              Popular Items
            </Label>
            <Label color={Color.DARK_GRAY} ms={10} mt={7} small>
              View all
            </Label>
          </View>
          <View style={{width: '100%', flexDirection: 'row', marginLeft: 15}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={popular_Item}
              renderItem={({item}) => this.renderPopularItems(item)}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
