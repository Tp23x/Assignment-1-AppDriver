import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,Image,Alert,TextInput,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Mybutton from './components/Mybutton';


export default class App extends Component {


  constructor() {
    super()
    this.state = {
      showME: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 1000)
  }


  render() {
    return (

      <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          this.state.showME ?
          //<Image source={pic} style={{width: 300, height: 300}}/>
          <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/67965303_483689192365680_4909989690616053760_n.png')} />
            :
             <View>
                <View style={styles.container} >
                  <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/67965303_483689192365680_4909989690616053760_n.png')} />
                  
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
          </View>
        }
      </View>
     
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8EE5EE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});