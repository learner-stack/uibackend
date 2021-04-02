
import 'react-native-gesture-handler';
import React,{Component,useState,setState} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert,Platform} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
 
class LoginModule extends Component {
   
    
    constructor(props) {
        super(props) ;
        this.state = {
            email:"",
            password:"",
            loading:false,
            message:'',
            emailError:'',
        }
        
       // this.authenticate(email,password) = this.authenticate(email,password).bind(this);
     }
     login=async ()=>{
        const email = await AsyncStorage.getItem("email")
        //console.log(email);
        const password = await AsyncStorage.getItem("password")
        if(email && password){
            this.setState({email,password})
            this.authenticate(email, password)
        }
    }

    componentDidMount(){
        this.login();
    }
    validates_email = () => {
        
        if(!this.state.email){
            this.setState({emailError:'Email is required!'});
        }
        else{
            this.setState({emailError:null})
        }
    }
    validates_pass = () => {
        
        if(!this.state.email){
            this.setState({Error:'Password is required!'});
        }
        else{
            this.setState({Error:null})
        }
    }
    authenticate=(email, password) => {
        const currentContext = this;
       
        this.setState({loading:true,message:""});
        this.message = null;
        const { navigate } = this.props.navigation;
        fetch('http://127.0.0.1:8000/api/auth/login',{
                method:'POST',
                body:JSON.stringify({        
                    "email" : this.state.email,
                    "password" : this.state.password,
            }),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8'
                }
            })
            
            .then(function(response){
                response.json()
                .then(async res=>{
           // this.setState({loading:false})
                    if(res.status==="success"){
                        await AsyncStorage.setItem("email",email)
                        await AsyncStorage.setItem("password",password)
                        navigate("Dashboard")


            }else {
              //  setErrortext(res.error);
              currentContext.setState({message:"Invalid username and password!",loading:false});
              //  alert("Invalid username and password!");

            }
        })
        .catch(err=>{
            currentContext.setState({message:"Error connecting to the server, Please try again later.",loading:false});
            //console.log(err);
            
            //this.setState({message:"Invalid username and password!",loading:false});
            alert("Error connecting to the server, Please try again later.")

        })
    })
}

render(){
    return(
        
     <View style={styles.MainContainer}>
 
     <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Student Registration Form </Text>
 
    <TextInput
       
       placeholder="Enter UserEmail"
      onBlur ={()=>this.validates_email()}
       onChangeText={ email=> this.setState({email  }) }
       keyboardType="email-address"
       returnKeyType="next"
       underlineColorAndroid='transparent'
       style={styles.TextInputStyleClass}
     />
  <Text style={styles.errorTextStyle}>
            {this.state.emailError}
 </Text>
    <TextInput
       
       placeholder="Enter the User Password"
       onBlur ={()=>this.validates_pass()}
       onChangeText={ password => this.setState({password}) }
        secureTextEntry = {true}
       underlineColorAndroid='transparent'
 
       style={styles.TextInputStyleClass}
     />
     <Text style={styles.errorTextStyle}>
            {this.state.Error}
 </Text>
    
    <Text style={styles.errorTextStyle}>
            {this.state.message}
 </Text>



 <Button rounded style={styles.loginBtn} onPress={()=>this.authenticate(this.state.email,this.state.password)}>
                
                </Button>
 
    
 
 </View>
    );
 
  }
 
 }
 

 //export RegisterScreen;

 

 


export default LoginModule;

const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'
   
    },
   
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#00BCD4'
   
    },
   
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },

    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }
   
  });
