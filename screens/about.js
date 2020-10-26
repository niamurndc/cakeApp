import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function About({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Version: 1.0.0</Text>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos beatae pariatur consectetur modi accusamus quisquam soluta delectus reiciendis aliquam excepturi voluptatem similique magnam fugiat perferendis esse laboriosam ratione dignissimos a ipsa, ullam consequatur voluptates! Id recusandae laborum, sed culpa autem, iure velit harum consectetur excepturi aut blanditiis accusantium asperiores dolorum repellat modi eveniet iusto perferendis quod sapiente tempora quos quas ratione cumque? Deserunt, nobis earum facilis natus nesciunt facere quos sit amet numquam deleniti nihil corrupti libero tempora. Error excepturi unde veritatis nemo eveniet natus a quo voluptatibus laboriosam perspiciatis voluptate, culpa corrupti vero sit nesciunt tempora iure molestiae.</Text>
      <Text style={styles.title}>Developed By: Niamur Rahman</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'start',
    padding: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
  }
});