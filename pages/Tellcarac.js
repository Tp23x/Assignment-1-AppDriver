import React, { Component } from 'react';
import { Text,  View, StyleSheet, ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';

class IScroll extends Component {
   state = {
      names: [
         {'name': 'รถกู้ภัย    1669', 'id': 1},
         {'name': 'ตำรวจทางหลวง     1193', 'id': 2},
         {'name': 'ศูนย์คุ้มครองผู้โดยสารสาธารณะ   1584', 'id': 3},
         {'name': 'ศูนย์สวัสดิภาพเด็ก เยาวชนและสตรี 0-2282-3892', 'id': 4},
        
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                        <Text key = {item.id} style = {styles.item}>{item.name}</Text>                   
                  ))
               }
            </ScrollView>

            <Mybutton
          title="ข้อมูลเพิ่มเติม"
          customClick={() => this.props.navigation.navigate('Web')}
        />
         </View>
      )
   }
}
export default IScroll


const styles = StyleSheet.create ({
    item: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 20,
       margin: 2,
       borderColor: '#2a4944',
       borderWidth: 1,
       backgroundColor: '#48D1CC',
       borderRadius: 6
    }
 })