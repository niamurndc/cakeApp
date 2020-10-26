import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default function Order({navigation}) {

  const sendOrder =() => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Your Cake</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Type Your Name.." />
        <TextInput style={styles.input} placeholder="Type Your Mobile No.." />
        <TextInput style={styles.input} placeholder="Type Your Address.." />
      </View>
      <TouchableOpacity style={styles.btn} onPress={sendOrder}>
          <Text>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'start',
    padding: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 7,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
  btn: {
    backgroundColor: '#888',
    width: 100,
    borderRadius: 5,
    padding: 7,
    textAlign: 'center',
    marginTop: 10,
  }
});