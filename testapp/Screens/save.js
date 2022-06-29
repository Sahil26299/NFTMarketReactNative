// import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'

// export default function Welcome({navigation}) {
//   return (
//     <View style={styles.body}>
//         <View style={styles.headingImage}>
//             <Image style={styles.logo} source={require('./assets/RPC-JP_Logo.png')}/>
//             <Text style={styles.heading}>Welcome to NFT Market</Text>
//             <Text style={styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quis quod nam optio esse, illo fugit, numquam inventore, necessitatibus rem ex. Quis expedita corrupti maiores!</Text>
//         </View>
//         <View style={styles.buttonsView}>
//             <TouchableOpacity style={styles.loginBTN} onPress={()=>navigation.navigate('Login')}><Text style={styles.btn1Text}>Login</Text></TouchableOpacity>
//             <TouchableOpacity style={styles.signupBTN} onPress={()=>navigation.navigate('Register')}><Text style={styles.btn2Text}>Sign Up</Text></TouchableOpacity>
//         </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     body:{
//         alignItems:'center',
//         paddingVertical:50
//     },
//     logo:{
//         width:250,
//         height:250,
//     },
//     headingImage:{
//         alignItems:'center',
//     },
//     heading:{
//         marginTop:25,
//         fontSize:30,
//         fontWeight:'700',
//         color:'#f91a40'
//     },
//     para:{
//         color:'black',
//         textAlign:'center',
//         marginTop:10,
//         marginHorizontal:35,
//         fontSize:15
//     },
//     buttonsView:{
//         width:'100%',
//         height:'40.4%',
//         justifyContent:'flex-end'
//     },
//     loginBTN:{
//         height:50,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'powderblue',
        
//     },
//     signupBTN:{
//         height:50,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#f91a40',
//     },
//     btn1Text:{
//         color:'black',
//         fontWeight:'800',
//         fontSize:16
//     },
//     btn2Text:{
//         color:'white',
//         fontWeight:'800',
//         fontSize:16
//     }    
// })