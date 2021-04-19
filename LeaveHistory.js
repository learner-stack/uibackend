import React,{Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image} from 'react-native'
import { Card, Divider} from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class LeaveRequest extends Component {

  render(){
    return(
      <View>
        <Card containerStyle={styles.card}>
          <Text>Applied on</Text>
          <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10}} />
          <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5}}>
              <Text style={styles.note}>Cause</Text>
               <View style={{flexDirection:'column', justifyContent:'flex-end',marginTop:5}}>
                          <Text>From</Text>
                         <Text style={{justifyContent:'space-between'}}>09-10-2021</Text>
				      </View>  
              
				 </View>
         
          <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5}}>
              <Text style={{width:100,height:40,borderBottomColor:"black"}}>Hello THIS IS 123456 </Text>
               <View style={{flexDirection:'column', justifyContent:'flex-end',marginTop:5}}>
                          <Text>To</Text>
                         <Text style={{justifyContent:'space-between'}}>09-10-2021</Text>
				      </View>  
              
				 </View>

           <View style={{flexDirection:'column', justifyContent:'flex-start',marginTop:50}}>
              <Text style={{borderBottomColor:"black"}}>NO OF DAYS</Text>
              <Text style={{borderBottomColor:"black"}}>14</Text>
				 </View>
				<Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10}} />
				
				<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					<Button title="Status" style={{width:80,height:40,marginTop:0}} onPress={()=>alert("clicked approve")}/>
          <Button title="Edit" style={{width:80,height:40,marginTop:0}} onPress={()=>alert("clicked discard")}/>
         
				</View>




			  </Card>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 
card:{
    marginTop:80,
    //flex:1,
    backgroundColor:'white',
    borderWidth:0,
    borderRadius:20

	},
  buttonContainerRight: {
    //flex: 1,
    //justifyContent: 'center',
    //  alignItems: 'center',
    backgroundColor: '#ffffff',
    height:60,
    width:50,
    borderRadius:8,
   //shadowColor: "#000",
    
    //shadowOffset: {
   //   width: 0,
   //   height: 0,
   // },
   // shadowOpacity: 0.50,
   // shadowRadius: 12.35,
  //  elevation: 10,
},
	time:{
		fontSize:38,
		color:'black'
	},
	notes: {
		fontSize: 18,
		color:'black',
		textTransform:'capitalize'
	},
  note: {
		fontSize: 15,
		color:'black',
		textTransform:'capitalize'
	}
});


export default LeaveRequest;
