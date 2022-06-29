import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'


export default function Register({navigation}) {
  const [nameError, setNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [MobileNumberError, setMobileNumberError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [ConfirmPasswordError, setConfirmPasswordError] = useState('');

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState(''); 

  const isNameValid=(value)=>{
    console.log(value);
    console.log(name);
    if(value!=''){
      setNameError('');
      return true;
    }
    else{
      setNameError('Please enter your name!');
      return false;
    }
  }

  const isUserNameValid=(value)=>{
    if(value!=''){
      setUserNameError('');
      return true;
    }
    else{
      setUserNameError('Please enter your user name!');
      return false;
    }
  }

  const isMobileNumberValid=(value)=>{
    if(value!=''){
      setMobileNumberError('');
      return true;
    }
    else{
      setMobileNumberError('Please enter your mobile number!');
      return false;
    }
  }

  const isEmailValid=(value)=>{
    if(value!=''){
      setEmailError('');
      return true;
    }
    else{
      setEmailError('Please enter your email address!');
      return false;
    }
  }

  const isPasswordValid=(value)=>{
    if(value!=''){
      setPasswordError('');
      return true;
    }
    else{
      setPasswordError('Please enter your password!');
      return false;
    }
  }

  const isConfirmPasswordValid=(value)=>{
    if(value!=''){
      setConfirmPasswordError('');
      return true;
    }
    else{
      setConfirmPasswordError('Please re-enter your password!');
      return false;
    }
  }

  const isAllValid =()=>{
    
    if(isNameValid(name) && isUserNameValid(userName) && isMobileNumberValid(MobileNumber) && isEmailValid(Email) && isPasswordValid(Password) && isConfirmPasswordValid(ConfirmPassword)){
      Alert.alert('Registered Successfuly!');
      navigation.replace('Login')
      return true;
    }
    else{
      isUserNameValid(userName);
      isMobileNumberValid(MobileNumber);
      isEmailValid(Email);
      isPasswordValid(Password);
      isConfirmPasswordValid(ConfirmPassword);
      Alert.alert('Please enter all the details!');
      return false;
    }
  }

  return (
    <ScrollView style={styles.body}>
      <View style={styles.form}>
        <Image style={styles.tinyLogo} source={require('./assets/MainLogo.png')}/>
        
        <View style={styles.Inp_1}>
            <TextInput style={styles.Inp} placeholder="enter your name" value={name} 
            onChangeText={(inpValue)=>{
              isNameValid(inpValue),
              setName(inpValue) 
            }}

              />
            <Text style={{paddingLeft:25, color:'red'}}>{nameError}</Text>
        </View>
        <View style={styles.Inp_1}>
            <TextInput style={styles.Inp} placeholder="set a username" value={userName} 
            onChangeText={(inpValue)=>{
              isUserNameValid(inpValue),
              setUserName(inpValue)
              }} />
            <Text style={{paddingLeft:25, color:'red'}}>{userNameError}</Text>
        </View>
        <View style={styles.Inp_1}>
            <TextInput style={styles.Inp} keyboardType='number-pad' placeholder="enter mobile number" value={MobileNumber} 
            onChangeText={(inpValue)=>{
              isMobileNumberValid(inpValue),
              setMobileNumber(inpValue)
              }} />
            <Text style={{paddingLeft:25, color:'red'}}>{MobileNumberError}</Text>
        </View>
        <View style={styles.Inp_1}>
            <TextInput style={styles.Inp} placeholder="enter your email id" value={Email} 
            onChangeText={(inpValue)=>{
              isEmailValid(inpValue),
              setEmail(inpValue)
              }} />
            <Text style={{paddingLeft:25, color:'red'}}>{EmailError}</Text>
        </View>
        <View style={styles.Inp_1}>
          <TextInput style={styles.Inp} secureTextEntry={true} placeholder='set your password' value={Password} 
          onChangeText={(inpValue)=>{
            isPasswordValid(inpValue),
            setPassword(inpValue)
            }} />
            <Text style={{paddingLeft:25, color:'red'}}>{PasswordError}</Text>
        </View>
        <View style={styles.Inp_1}>
          <TextInput style={styles.Inp} secureTextEntry={true} placeholder='re-set your password' value={ConfirmPassword} 
          onChangeText={(inpValue)=>{
            isConfirmPasswordValid(inpValue),
            setConfirmPassword(inpValue)
            }} />
            <Text style={{paddingLeft:25, color:'red'}}>{ConfirmPasswordError}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>isAllValid()}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginLinkView}>
          <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.replace('Login')}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  body:{
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  form:{
    paddingHorizontal: 5,
    paddingVertical: 25
  },
  tinyLogo:{
    width: 100,
    height: 100,
    marginVertical: 25,
    marginHorizontal:100
  },
  Inp_1: {
    marginBottom: 15,
  },
  Inp: {
    borderRadius: 25,
    backgroundColor: '#f91a4017',
    paddingHorizontal: 23,
    fontFamily:'Raleway-Regular',
    height: 50,
    width:300
  },
  button: {
    borderRadius: 25,
    backgroundColor: '#f91a40',
    padding: 15,
    height: 50,
    width:300
  },
  btnText: {
    textAlign: 'center',
    fontFamily:'Raleway-Bold',
    color: 'white',
    fontSize:15
  },
  loginLinkView:{
    marginVertical:15,
    marginHorizontal:115,
    width:70,
  },
  loginBtnText:{
    color:'black',
    fontFamily:'Raleway-Bold',
    textAlign:'center',
    fontSize:15
  },
  errorName:{
    marginHorizontal:20
  }
})