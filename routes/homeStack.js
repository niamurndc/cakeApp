import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Review from '../screens/review';
import Order from '../screens/order';
import Header from '../shared/header';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="CakePion" navigation={navigation} />
      }
    },
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: 'Cake Details'
    }
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: 'Order Cake'
    }
  }
}


const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;