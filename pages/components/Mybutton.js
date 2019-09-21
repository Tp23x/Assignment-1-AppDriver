/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#008B8B',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  text: {
    color: '#ffffff',
  },
});
export default Mybutton;