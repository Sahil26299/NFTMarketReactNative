import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'

export default function ForgPassword({navigation}) {
  return (
    <View style={styles.body}>
      <View style={styles.form}>
        <Image style={styles.tinyLogo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png' }}/>
        <Text style={styles.heading}>Forgot your password?</Text>
        <View style={styles.Inp_1}>
            <TextInput style={styles.Inp} keyboardType='number-pad' placeholder="enter mobile number" />
        </View>
        <View style={styles.registerLinkView}>
          <TouchableOpacity style={styles.SendOTPBtn}>
            <Text style={styles.SendOTP}>Send OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerBtnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    body:{
        paddingHorizontal:10,
        paddingVertical:100
    },
    form:{
        paddingHorizontal:10,
        paddingVertical:10
    },
    Inp:{
        borderRadius: 25,
        backgroundColor: '#f91a4017',
        paddingHorizontal: 23,
        height: 50,
        fontFamily:'Raleway-Regular',
        width:315
    },
    Inp_1:{
        marginBottom:20
    },
    tinyLogo: {
        width: 100,
        height: 100,
        marginVertical: 25,
        marginHorizontal:115
    },
    heading:{
       fontSize:18,
       textAlign:'center',
       color:'black',
      fontFamily:'Raleway-Bold',
       marginBottom:25
    },
    registerLinkView:{
      alignItems:'center'
    },
    SendOTP:{
        textAlign: 'center',
        color: 'white',
        fontFamily:'Raleway-Bold',
        fontSize:15
    },
    SendOTPBtn:{
        borderRadius: 25,
        backgroundColor: '#f91a40',
        padding: 15,
        height: 50,
        width:315,
        marginBottom:10
    },
    registerBtnText:{
      color:'black',
      fontFamily:'Raleway-Bold',
      textAlign:'center',
      fontSize:15
    }

})