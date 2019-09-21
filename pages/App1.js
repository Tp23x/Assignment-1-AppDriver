/*Example of Pre-Populated SQLite Database in React Native*/
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Login from './Login';
import UpdateUser from './Login';
import ViewUser from './ViewUser';
import ViewAllUser from './ViewAllUser';
import DeleteUser from './DeleteUser';
import List from './List';
import TellTeacher from './TellTeacher';
import Tellcarac from './Tellcarac';
import RegisTerChil from './RegisTerChil';
import RegisterSeting from './RegisterSeting';
import RegisterUser from './RegisterUser';
import Listchi from './Listchi';
import Web from './Web';
import graf from './graf';



const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Care Your Heart',
      headerStyle: { backgroundColor: '#8EE5EE' },
      headerTintColor: '#ffffff',
    },
  },
  Listchi: {
    screen: Listchi,
    navigationOptions: {
      title: 'รายชื่อเด็ก',
      headerStyle: { backgroundColor: '#008B8B' },
      headerTintColor: '#000000',
    },
  },
  TellTeacher: {
    screen: TellTeacher,
    navigationOptions: {
      title: 'ติดต่อครูประจำรถ',
      headerStyle: { backgroundColor: '#008B8B' },
      headerTintColor: '#000000',
    },
  },
  Tellcarac: {
    screen: Tellcarac,
    navigationOptions: {
      title: 'ติดต่อรถฉุกเฉิน',
      headerStyle: { backgroundColor: '#008B8B' },
      headerTintColor: '#000000',
    },
  },
  RegisTerChil: {
    screen: RegisTerChil,
    navigationOptions: {
      title: 'เพิ่มสมาชิก',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
 
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAllUser: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'เข้าสู่ระบบ',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'สมัครสมาชิก',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  RegisterSeting: {
    screen: RegisterSeting,
    navigationOptions: {
      title: 'ตั้งค่าระบบ',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Web: {
    screen: Web,
    navigationOptions: {
      title: 'สายด่วน',
      headerStyle: { backgroundColor: '#008B8B' },
      headerTintColor: '#ffffff',
    },
  },
  graf: {
    screen: graf,
    navigationOptions: {
      title: 'สรุปข้อมูล',
      headerStyle: { backgroundColor: '#008B8B' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);