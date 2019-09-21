import React, { Component } from 'react';
import {  View,  StyleSheet,Image } from 'react-native';

import Mybutton from './components/Mybutton';
import MybuttonOne from './components/MybuttonOne';


export default class App extends Component {
    
  render() {
    return (
      <View style={styles.container} >
        <Image resizeMode='center' style={{width:450, height: 300 }} source={require('./img/67965303_483689192365680_4909989690616053760_n.png')} />
       
           <Mybutton
          title="รายชื่อเด็กนักเรียน"
          customClick={() => this.props.navigation.navigate('Listchi')}
        />
         <Mybutton
            title="สรุปข้อมูล"
            customClick={() => this.props.navigation.navigate('graf')}
        />
        
        <Mybutton
          title="ติดต่อครู"
          customClick={() => this.props.navigation.navigate('TellTeacher')}
        />
       
        <Mybutton
            title="ติดต่อรถฉุกเฉิน"
            customClick={() => this.props.navigation.navigate('Tellcarac')}
        />

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8EE5EE'
    },
    button: {
      marginBottom: 20,
      width: 100,
      height:30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF9999',
      borderRadius:10
    },
    
    input: {
      margin: 8,
      height: 40,
      width: 260,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius:6
    },
  });