import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  View,
  Button,
  
  CardItem,
  TouchableOpacity,
  TextInput,ScrollView
} from 'react-native';
import CategoryScreen from './Picker'
import { Container, Header, Label, Content, Item, Input, Textarea,  Body, Title, Text, Icon, Picker, Form } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { Card, Divider} from 'react-native-elements';
//import CardView from 'react-native-cardview'
function App () {
  const [fromdate, setFromDate] = useState('');
  const [todate, setToDate] = useState('');
  //const [color,setColor]=useState('red');
 // const [fullData, setFullData] = useState([]);

  
 
  return(
     <ScrollView style={styles.body}>
     <Text style={{marginTop:30,marginLeft:12,fontSize:30}}>Leave Application</Text>
        <Text style={{marginTop:30,marginLeft:12}}>Choose Leave Type</Text>
        <View style={styles.container1}>
          <View style={ {flexDirection: "row"}}>
           <TouchableOpacity onPress={()=>alert("clicked sick leave")}>
              <Card pointerEvents="none" containerStyle={[styles.buttonContainerRight]}>
              <View style={{alignContent:"center",alignItems:"center"}}>
                <Text>Sick </Text>
                <Text>Leave</Text> 
              </View>
              </Card>
           </TouchableOpacity>


     
              
           <TouchableOpacity onPress={()=>alert("clicked casual leave")}>
          <Card containerStyle={styles.buttonContainerRight}>
           <View style={{alignContent:"center",alignItems:"center"}}>
            <Text>Casual</Text>
            <Text>Leave</Text> 
          </View>
			    </Card>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>alert("clicked annual leave")}>
          <Card containerStyle={styles.buttonContainerRight}>
           <View style={{alignContent:"center",alignItems:"center"}}>
            <Text>Annual</Text>
            <Text>Leave</Text> 
          </View>
			    </Card>
           </TouchableOpacity>
    
          </View>
       
        </View>
         <View style={{flexDirection: 'row',justifyContent:"space-between"}}>
              <Text style={{padding:2,marginLeft:12,marginTop:2}}>Start Date</Text>
              <Text style={{marginTop:2,marginRight:90}}>End Date</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent:"space-between"}}>
             
        <View style={styles.container1}>
        <View style={styles.buttonContainerRight}>
          <DatePicker
                    style={styles.datepickerstyle}       
                     date={fromdate} // Initial date from state
                      mode="date" // The enum of date, datetime and time
                      showIcon={false}
                      placeholder= "Choose the Date"
                      placeHolderTextStyle={{ color: "black" }}
                      format="DD-MM-YYYY"
                      minDate="01-01-2016"
                      modalTransparent={false}
                      animationType={"fade"}
                      customStyles={{
                                  dateInput: {
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderTopWidth: 0,
                                      borderBottomWidth:0,
                                     // fontSize:30
                                  },
                                  dateText: {
                                  color: 'black',
                                   fontSize:20
                                  }
                              }}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      disabled={false}
                      onDateChange={(fromdate) => {
                              setFromDate(fromdate);
                      }}           
              />
            </View>
            </View>

      <View style={styles.container1}>
        <View style={styles.buttonContainerRight}>
          <DatePicker
                    style={styles.datepickerstyle}       
                     date={todate} // Initial date from state
                      mode="date" // The enum of date, datetime and time
                      showIcon={false}
                      placeholder= "Choose the Date "
                      placeHolderTextStyle={{ color: "black" }}
                      format="DD-MM-YYYY"
                      minDate="01-01-2016"
                      modalTransparent={false}
                      animationType={"fade"}
                     
                      customStyles={{
                                  dateInput: {
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderTopWidth: 0,
                                      borderBottomWidth:0,
                                      fontSize:30
                                  },
                                  dateText: {
                                  color: 'black',
                                   fontSize:20
                                  }
                              }}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      disabled={false}
                      onDateChange={(todate) => {
                              setToDate(todate);
                      }}           
              />
            </View>
            </View>

    </View>

      <Text style={{padding:2,marginLeft:12,marginTop:2}}>Description</Text>
        <View style={styles.container}>
            <View style={styles.textinputContainerRight}>
                <TextInput style={styles.taskItemContent} multiline={true} placeholder='Write the reason for leave'>
                </TextInput>
              </View> 
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.buttoncontainer}>
          <View>
            <Body style={styles.bodyStyle}>
              <Text style={styles.buttontemContent} onPress = {() => Alert("Hello") }>APPLY LEAVE</Text>
            </Body>
          </View>
        </TouchableOpacity>
      </View>

        
    </ScrollView>   
  )
 
 
    
    
}





export default App;

const styles = StyleSheet.create({
      container: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    paddingBottom:15,
},

container1: {
  flex: 1,
  flexDirection: 'row',
  alignItems:'center',
  alignContent:'center',
  justifyContent:'center',
  paddingBottom:15,
},


btncontainer: {
  flex: 1,
  flexDirection: 'row',
  alignContent:'center',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom:15,
},

buttoncontainer: {
  flex: 1,
  backgroundColor:'#4444FF',
    alignContent:'center',
    justifyContent:'center',
    marginLeft:15,
    marginTop:0,
    marginRight:15,
    marginBottom:0,
    height:60,
    borderRadius:10,
    shadowColor: "#000",
 
   
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 10,
},



taskItemContent: { 
  color: 'black',
  fontSize: 15,
  marginLeft:10,
},


datepickerstyle:{color:'white',
fontSize:20,
outline:"none",
justifyContent:"center"
},

buttontemContent: { 
  color: 'white',
  fontWeight:'bold',
  fontSize: 15,
  alignItems:'center',
},

bodyStyle:{
  borderWidth:0,
  justifyContent:'center',
},
buttonContainerCard: {
    
    alignContent:'center',
   // justifyContent:'center',
    marginLeft:15,
    marginTop:0,
    marginRight:15,
    marginBottom:0,
    backgroundColor: '#ffffff',
    height:40,
    width:130,
    borderRadius:4,
    elevation: 10,
},

buttonContainerRight: {
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    marginLeft:15,
    marginTop:0,
    marginRight:15,
    marginBottom:0,
    backgroundColor: '#ffffff',
    height:60,
    borderRadius:8,
   shadowColor: "#000",
    
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 10,
},

textinputContainerRight: {
  flex: 1,
  alignContent:'flex-start',
  marginLeft:15,
  marginTop:0,
  marginRight:15,
  marginBottom:0,
  backgroundColor: '#ffffff',
  height:160,
  borderRadius:8,
  shadowColor: "#000",

  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.50,
  shadowRadius: 12.35,
  elevation: 10,
},
body:{
  paddingTop:15,
  paddingBottom:30,
  backgroundColor: '#efefef',
}
});
