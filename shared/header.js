import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Header({navigation, title}) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View>
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu}>
          <Image source={require('../assets/coffee.jpg')} style={styles.logo} />
      </TouchableOpacity>

      <View><Text style={styles.title}>{title}</Text></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 21,
  },
  logo: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  }
});