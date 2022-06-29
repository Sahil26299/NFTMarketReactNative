import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

export default function Login({navigation}){
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const validateAll = () => {
    if (userName!='' && password!='') {
      Alert.alert(`Welcome ${userName}!`);
      navigation.navigate('Home1', {UserName:userName,});
    }
    else{
      Alert.alert(`Please enter your details!`);
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.Form}>
        <Image style={styles.tinyLogo} source={require('./assets/MainLogo.png')} />
        <View style={styles.Inp_1}>
          <TextInput style={styles.Inp} placeholder="enter your username" value={userName} 
          onChangeText={
            (uname)=>setUserName(uname)} />
        </View>
        <View style={styles.Inp_2}>
          <TextInput secureTextEntry={true} style={styles.Inp} placeholder="enter your password"
          value={password} onChangeText={(pass)=>setPassword(pass)}
          />
        </View>
        <TouchableOpacity style={styles.forgotPassword} onPress={()=>navigation.navigate('Forgot Password')}><Text style={styles.forgotPasswordText}>Forgot Password?</Text></TouchableOpacity>
        <View style={{flexDirection:'row', marginVertical:5}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
            <Text style={{paddingTop:5, fontSize:14, fontFamily:'Raleway-Regular', color:'black'}}>
              I agree to the terms and conditions.</Text>
        </View>
        <View>
          <TouchableOpacity style={[styles.button, {backgroundColor : toggleCheckBox?'#f91a40':'grey'}]} 
          disabled={!toggleCheckBox} onPress={()=>validateAll()}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerLinkView}>
          <TouchableOpacity style={styles.registerButton} onPress={()=>navigation.navigate('Register')}>
            <Text style={styles.registerBtnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: '800',
    marginBottom: 25,
    fontSize: 20,
  },
  Inp: {
    borderRadius: 25,
    backgroundColor: '#f91a4017',
    paddingHorizontal: 23,
    fontFamily:'Raleway-Regular',
    height: 50,
    width:300
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginVertical: 25,
    marginHorizontal:80
  },
  body: {
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
  Form: {
    paddingHorizontal: 5,
    paddingVertical: 25,
  },
  Inp_1: {
    marginBottom: 20,
  },
  Inp_2: {
    marginBottom: 5,
  },
  button: {
    borderRadius: 25,
    padding: 15,
    height: 50,
    width:300
  },
  btnText: {
    textAlign: 'center',
    fontFamily:'Raleway-Bold',
    color: 'white',
    fontSize:16
  },
  registerLinkView:{
    marginVertical:15,
    marginHorizontal:115,
    width:70,
  },
  forgotPassword:{
    width:110,
    marginStart:180,
    marginBottom:5
  },
  forgotPasswordText:{
    fontFamily:'Raleway-Medium',
    color:'black',
    fontWeight:'500'
  },
  registerBtnText:{
    color:'black',
    fontFamily:'Raleway-Bold',
    textAlign:'center',
    fontSize:15
  }
});

