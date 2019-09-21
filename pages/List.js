import React, { Component } from 'react';
import { Text,  View, StyleSheet, ScrollView } from 'react-native';
import { CheckBox} from 'native-base';
import MybuttonOne from './components/MybuttonOne';
import Mybutton from './components/Mybutton';

class IScroll extends Component {
   stateC={
   one:false
   }
   onePressed(){
   //alert('one');
   this.setStateC({one:true});
   }

      state = {
      names: [
      {'name': 'ด.ญ.ชาเขียว เรืองรอง', 'id': 1},
      {'name': 'ด.ญ.พิมาย สังเกต', 'id': 2},
      {'name': 'ด.ญ.น้อย บัวขาว', 'id': 3},
      {'name': 'ด.ช.เกียงไกร ถาวร', 'id': 4},
      {'name': 'ด.ช.มานพ บุญสา', 'id': 5},
      {'name': 'ด.ช.เชิด ชูดี', 'id': 6},
      ]
      }
   render() {
      return (
   <View>
      <Text style={{fontSize:15}}>รถรับส่งคันที่ 1</Text>
         <ScrollView>
            {
            this.state.names.map((item, index) => (
            <Text key = {item.id} style = {styles.item}>{item.name}
           
               <CheckBox checked={this.stateC.one}
               onPress={()=> this.onePressed()}
                />
           
            </Text>
          ))
          }
       </ScrollView>
      <Mybutton
      title="ติดต่อครูประจำรถ"
      customClick={() => this.props.navigation.navigate('TellTeacher')}
      />
      <Mybutton
      title="ติดต่อรถฉุกเฉิน"
      customClick={() => this.props.navigation.navigate('Tellcarac')}
      />
      <MybuttonOne
      title="เพิ่มรายชื่อนักเรียน"
      customClick={() => this.props.navigation.navigate('RegisTerChil')}
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
      backgroundColor: '#FFFACD',
      borderRadius: 6
   }
})