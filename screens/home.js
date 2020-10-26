import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';


export default function Home({navigation}) {

  const [cakes, setCakes] = useState([
    {title: 'Special Cake', pic: require('../assets/coffee.jpg'), price: 600, desc: 'Lorem ipsum doller sit ammet', key: '1'},
    {title: 'Ponge Cake', pic: require('../assets/coffee.jpg'), price: 500, desc: 'Lorem ipsum doller sit ammet', key: '2'},
    {title: 'Butter Cake', pic: require('../assets/coffee.jpg'), price: 300, desc: 'Lorem ipsum doller sit ammet', key: '3'},
    {title: 'Choocolate Cake', pic: require('../assets/coffee.jpg'), price: 120, desc: 'Lorem ipsum doller sit ammet', key: '4'},
    {title: 'Normal Cake', pic: require('../assets/coffee.jpg'), price: 100, desc: 'Lorem ipsum doller sit ammet', key: '5'}
  ]);
  
  return (
    <View style={styles.container}>

      <FlatList data={cakes} renderItem={({ item }) => (

        <TouchableOpacity style={styles.cake} onPress={() => navigation.navigate('Review', item)}>
        <Image source={item.pic} style={{ width: 70, height: 70 }}/>
          <View style={styles.innerCake}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.desc}>Lorem ipsum dolor sit amet con.</Text>
            <Text style={styles.price}>Price: {item.price} BDT</Text>
          </View>
        </TouchableOpacity>
        
      )} />

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
  cake: {
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    borderColor: '#aaa',
    borderRadius: 5,
    borderWidth: 2,
  },
  innerCake: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
  },

});