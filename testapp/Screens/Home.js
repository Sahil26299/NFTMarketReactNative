import { View, Text, Dimensions, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import HorizontalSlider from './Components/HorizontalSlider';
import Header from './Components/Header';
import HorizontalSlider2 from './Components/HorizontalSlider2';
import Footer from './Components/Footer';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Home({navigation, route}) {
  return (
    <View>
      <Header Transparency={1} Press={()=>navigation.replace('Login')}/>
      <TouchableOpacity style={styles.menu} onPress={()=>navigation.openDrawer()}>
        <MaterialIcons name="menu" size={25} color="white"/>
      </TouchableOpacity>
      <ScrollView style={styles.verticalScroll}>
        <HorizontalSlider/>
        <View style={styles.portraitView}>
            <Text style={styles.portraitText}>Knights of Degen {route.params.UserName}</Text>
            <Text style={styles.portraitPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa necessitatibus odit ad atque! Corrupti!</Text>
            <Image source={require('./assets/nftportrait.gif')} style={styles.portraitLogo}/>
            <Image style={styles.portraitImage} source={require('./assets/nftportrait.gif')} />
        </View>
        <View style={styles.container3View}> 
          <Text style={styles.container3Heading}>Create and sell your NFTs</Text>

          <View style={styles.container3InnerView}>
            <Entypo name='wallet' style={styles.container3ViewModule1} size={35}/>
            <Text style={styles.container3Module1Heading}>Set up your wallet</Text>
            <Text style={styles.container3Module1Para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, provident numquam maiores minus saepe nostrum quo enim? Enim eius nobis natus. Fugit neque consectetur non tempora dolores, est nam quod.</Text>
          </View>

          <View style={styles.container3InnerView}>
            <FontAwesome5 name='shapes' style={styles.container3ViewModule1} size={35}/>
            <Text style={styles.container3Module1Heading}>Create your collection</Text>
            <Text style={styles.container3Module1Para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, provident numquam maiores minus saepe nostrum quo enim? Enim eius nobis natus. Fugit neque consectetur non tempora dolores, est nam quod.</Text>
          </View>

          <View style={styles.container3InnerView}>
            <MaterialIcons name='collections' style={styles.container3ViewModule1} size={35}/>
            <Text style={styles.container3Module1Heading}>Add your NFTs</Text>
            <Text style={styles.container3Module1Para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, provident numquam maiores minus saepe nostrum quo enim? Enim eius nobis natus. Fugit neque consectetur non tempora dolores, est nam quod.</Text>
          </View>

          <View style={styles.container3InnerView}>
            <FontAwesome name='tags' style={styles.container3ViewModule1} size={35}/>
            <Text style={styles.container3Module1Heading}>List them for sale</Text>
            <Text style={styles.container3Module1Para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, provident numquam maiores minus saepe nostrum quo enim? Enim eius nobis natus. Fugit neque consectetur non tempora dolores, est nam quod.</Text>
          </View>
        </View>
        <HorizontalSlider2/>
        <Footer/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    portraitView:{
        height:height*0.5,
        width:width*1,
        backgroundColor:'black',
        alignItems:'center',
        marginBottom:8
    },
    verticalScroll:{
      height:height*0.8    // 0.8 or 80% of available because vertical slider at the starting of horizontal slider is taking 20%
    },                     // of screen.
    portraitImage:{
        height:'100%',
        width:'100%',
        opacity:0.55
    },
    menu:{
        position:'absolute',
        top:13,
        left:10,
    },
    portraitLogo:{
        height:60,
        width:60,
        top:150,
        zIndex:1,
        borderRadius:50,
        borderWidth:2,
        borderColor:'white',
        position:'absolute'
    },
    portraitText:{
        position:'absolute',
        color:'white',
        fontSize:20,
        zIndex:2,
        fontFamily:'Raleway-Bold',
        top:220
    },
    portraitPara:{
        position:'absolute',
        color:'white',
        fontSize:15,
        zIndex:2,
        top:250,
        marginHorizontal:75,
        textAlign:'center',
        fontFamily:'Raleway-Medium'
    },
    container3View:{
      backgroundColor:'#cffcfe',
      alignItems:'center',
      paddingVertical:30,
      paddingHorizontal:15,
      marginBottom:8
    },
    container3ViewModule1:{
      color:'#f91a40'
    },
    container3Heading:{
      textAlign:'center',
      color:'black',
      fontSize:22,
      marginBottom:20,
      fontFamily:'Raleway-ExtraBold'
    },
    container3Image1:{
      width:150,
    },
    container3InnerView:{
      alignItems:'center',
      marginVertical:15
    },
    container3Module1Heading:{
      fontSize:18,
      color:'black',
      fontFamily:'Raleway-Bold'
    },
    container3Module1Para:{
      textAlign:'center',
      paddingHorizontal:25,
      paddingVertical:10,
      color:'black',
      fontFamily:'Raleway-Regular'
    },
}
)