import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function NFTCards(props) {
  return (
    <View style={styles.sliderComponent1}>
        <View style={styles.sliderSubComponent1}>
            <Image style={styles.sliderSubComponent1Image} source={props.backgroundPath}/>
        </View>
        <View style={styles.sliderSubComponent2}>
            <Image style={styles.sliderSubComponent2Logo} source={props.LogoPath}/>
            <Text style={styles.sliderSubComponent2Heading}>{props.Title}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Raleway-Medium'}}>by</Text>
                <Text style={{color:'blue', fontFamily:'Raleway-Medium'}}> {props.Title}</Text>
            </View>
            <Text style={styles.sliderSubComponent2Para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi eum doloribus facere natus esse similique!
                 Non labore sed, facere dolorem libero, cupiditate excepturi adipisci itaque a at velit sunt et eum voluptate 
                 maxime esse quos repellendus consequuntur. Asperiores nobis incidunt esse. Possimus architecto laborum odio 
                 blanditiis adipisci repudiandae soluta.</Text>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    sliderComponent1:{
        height:height*0.75,
        marginBottom:10
    },
    sliderSubComponent1:{
        flex:0.5,
        backgroundColor:'black',
    },
    sliderSubComponent2:{
        alignItems:'center',
        flex:0.5,
        backgroundColor:'#cffcfe'
    },
    sliderSubComponent1Image:{
        width:'100%',
        height:'100%',
        opacity:0.55,
    },
    sliderSubComponent2Logo:{
        width:'17%',
        height:'20%',
        borderRadius:75,
        position:'absolute',
        top:-30,
        borderWidth:2,
        borderColor:'white'
    },
    sliderSubComponent2Heading:{
        marginTop:40,
        fontSize:20,
        fontFamily:'Raleway-Bold'
    },
    sliderSubComponent2Para:{
        color:'black',
        paddingHorizontal:25,
        paddingTop:10,
        textAlign:'center',
        fontFamily:'Raleway-Regular'
    }
})