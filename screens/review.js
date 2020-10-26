import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


export default function Review({navigation}) {

  const sendOrder =() => {
    navigation.navigate('Order');
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/coffee.jpg')} style={{ width: '100%', height: 120 }}/>
      <View style={styles.desc}>
          <Text style={styles.name}>{navigation.getParam('title')}</Text>
          <Text style={styles.price}>Price: {navigation.getParam('price')} BDT</Text>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe mollitia beatae, aspernatur labore libero quod asperiores fugiat dicta aliquam atque unde eaque deserunt sequi totam veritatis, porro, sapiente animi earum.</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={sendOrder}>
          <Text>Order Cake</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  desc: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#888',
    width: 100,
    borderRadius: 5,
    padding: 7,
    textAlign: 'center',
    marginTop: 40,
  }
});