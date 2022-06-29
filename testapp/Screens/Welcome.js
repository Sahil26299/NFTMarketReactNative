import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Welcome({navigation}) {
  return (
    <View style={styles.body}>
        <StatusBar backgroundColor='#f91a40'/>
        <View style={styles.container1}>
            <Image style={styles.logo} source={require('./assets/RPC-JP_Logo.png')}/>
        </View>
        <View style={styles.container2}>
            <Text style={styles.heading}>Welcome to NFT Market</Text>
            <Text style={styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quis quod nam optio esse, illo fugit, numquam inventore, necessitatibus rem ex. Quis expedita corrupti maiores!</Text>
        </View>
        <View style={styles.container3}>
            <TouchableOpacity style={styles.signupBTN} onPress={()=>navigation.replace('Register')}><Text style={styles.btn2Text}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity style={styles.loginBTN} onPress={()=>navigation.replace('Login')}><Text style={styles.btn1Text}>Login</Text></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    container1:{
        alignItems:'center',
        flex:1.2,
    },
    container2:{
        alignItems:'center',
        flex:1
    },
    container3:{
        flex:1,
        flexDirection:'column-reverse'
    },
    logo:{
        marginTop:50,
        width:200,
        height:200,
    },
    heading:{
        marginTop:25,
        fontSize:30,
        fontFamily:'Raleway-Bold',
        color:'#f91a40'
    },
    para:{
        color:'black',
        textAlign:'center',
        marginTop:10,
        marginHorizontal:35,
        fontFamily:'Raleway-Regular',
        fontSize:15
    },
    loginBTN:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'powderblue',
        
    },
    signupBTN:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f91a40',
    },
    btn1Text:{
        color:'#f91a40',
        fontFamily:'Raleway-Bold',
        fontSize:16
    },
    btn2Text:{
        color:'white',
        fontFamily:'Raleway-Bold',
        fontSize:16
    } 
})