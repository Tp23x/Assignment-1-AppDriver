import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "ด.ช.เกียงไกร ถาวร",   image:"https://www.img.in.th/images/d59d23666f0e37c0ae34e815290c6a6d.png",   count:124.711},
        {id:2,  name: "ด.ญ.พิมาย สังเกต",    image:"https://www.img.in.th/images/e6f0cda6d6ac7de2817a4a34bdfc2739.png",    count:234.722},
        {id:3,  name: "ด.ช.มานพ บุญสา",       image:"https://www.img.in.th/images/d59d23666f0e37c0ae34e815290c6a6d.png", count:324.723} ,
        {id:4,  name: "ด.ญ.น้อย บัวขาว",   image:"https://www.img.in.th/images/e6f0cda6d6ac7de2817a4a34bdfc2739.png",    count:154.573} ,
        {id:5,  name: "ด.ช.เชิด ชูดี",   image:"https://www.img.in.th/images/d59d23666f0e37c0ae34e815290c6a6d.png",        count:124.678} ,
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert('การเชื่อมต่อ', 'ยืนยันการเชื่อมต่อ. '+item.name);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>ยืนยัน</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#006400",
    fontSize:15,
  },
});  